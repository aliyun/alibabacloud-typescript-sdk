// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * A unique token used to ensure the idempotence of the request. The client generates this value. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the Elasticsearch instance to which you want to validate connectivity.
   * 
   * @example
   * {     "endpoints": [         "http://es-cn-n6w1o1x0w001c****.elasticsearch.aliyuncs.com:9200"     ],     "userName": "elastic",     "password": "xxxx" }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

