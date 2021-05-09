const url1:string ="https://localhost/wordpress/wp-json/wc/v3";
const authUrl1:string ="https://localhost/wordpress/wp-json/jwt-auth/v1/token";
const tokenVerifyUrl1:string ="https://localhost/wordpress/wp-json/jwt-auth/v1/token/validate";
const url2:string="https://localhost/wordpress/wp-json/wp/v2";
export const environment = {
  production: true,
  user_r:url2,

  backend_api_url: url1,
  auth_url: authUrl1,
  token_verify_url: tokenVerifyUrl1,
  readOnlyKeys:{
    consumer_key :'ck_a50fd4716f10dd076825d7ac4591dfdd943b92fd',
    consumer_secret: 'cs_42286b148426faf1b9e45c872a871e523307a8b1'
  },
  writableKeys:{
    consumer_key : 'ck_bfe245cd01ebd80f9618f5a8fb8d36e1ea812c72',
    consumer_secret: 'cs_ed67ab709bceb2d307db0d76afb320c62e4b5d3d'

  }
};
