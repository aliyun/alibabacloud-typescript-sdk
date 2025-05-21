// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpDubboTranscoderMothedMapListParamMapsList } from "./HttpDubboTranscoderMothedMapListParamMapsList";


export class HttpDubboTranscoderMothedMapList extends $dara.Model {
  dubboMothedName?: string;
  /**
   * @example
   * ALL_GET
   */
  httpMothed?: string;
  /**
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  paramMapsList?: HttpDubboTranscoderMothedMapListParamMapsList[];
  /**
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  passThroughList?: string[];
  static names(): { [key: string]: string } {
    return {
      dubboMothedName: 'dubboMothedName',
      httpMothed: 'httpMothed',
      mothedpath: 'mothedpath',
      paramMapsList: 'paramMapsList',
      passThroughAllHeaders: 'passThroughAllHeaders',
      passThroughList: 'passThroughList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMothedName: 'string',
      httpMothed: 'string',
      mothedpath: 'string',
      paramMapsList: { 'type': 'array', 'itemType': HttpDubboTranscoderMothedMapListParamMapsList },
      passThroughAllHeaders: 'string',
      passThroughList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.paramMapsList)) {
      $dara.Model.validateArray(this.paramMapsList);
    }
    if(Array.isArray(this.passThroughList)) {
      $dara.Model.validateArray(this.passThroughList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

