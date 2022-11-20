import React, {useEffect, useState} from 'react';

import {useTheme, useTranslation} from '../hooks';
import {Block, Input, Product} from '../components';
import {instance} from '../service/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from '../constants/types';
const Home = () => {
  const {t} = useTranslation();
  const [products, setProducts] = useState([] as IProduct[]);
  const {colors, sizes} = useTheme();
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(true);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        const response = await instance.get('posts', {
          method: 'get',
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setProducts(response.data || []);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
      // console.log('user token: ', userToken);
    });
  }, []);

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} />
      </Block>

      {/* products list */}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {!loading
            ? products?.map((product) => (
                <Product {...product} key={`card-${product?.id}`} />
              ))
            : null}
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
