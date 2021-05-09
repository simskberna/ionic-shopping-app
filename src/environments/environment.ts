// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url1:string ="https://localhost/wordpress/wp-json/wc/v3"
const authUrl1:string ="https://localhost/wordpress/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1:string ="https://localhost/wordpress/wp-json/jwt-auth/v1/token/validate"
const url2:string="https://localhost/wordpress/wp-json/wp/v2";
export const environment = {
  production: false,
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

  },
  test:{
    consumer_key : 'ck_deea723000be772f57d8e0c9d9c5c575af2083cb',
    consumer_secret: 'cs_3774a274dc1023eaa6cf743bf90983b15234dd1b'

  },
  states: [
    {value: 'AR', name: 'Arizona'},
    {value: 'FL', name: 'Florida'},
    {value: 'TX', name: 'Texas'},
    {value: 'OI', name: 'Ohio'},
    {value: 'NW', name: 'New Jersey'},
    {value: 'LA', name: 'Los Angeles'},
 ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
