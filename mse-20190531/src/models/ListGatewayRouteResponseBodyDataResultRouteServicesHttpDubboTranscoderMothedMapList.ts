// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList } from "./ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList";


export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList extends $dara.Model {
  /**
   * @remarks
   * The method name of the Dubbo service.
   * 
   * @example
   * sayHello
   */
  dubboMothedName?: string;
  /**
   * @remarks
   * The HTTP method.
   * 
   * > Valid values:
   * 
   * *   ALL_GET
   * 
   * *   ALL_POST
   * 
   * *   ALL_PUT
   * 
   * *   ALL_DELETE
   * 
   * *   ALL_PATCH
   * 
   * @example
   * ALL_GET
   */
  httpMothed?: string;
  /**
   * @remarks
   * The path used for method matching.
   * 
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  /**
   * @remarks
   * The information about parameter mappings.
   */
  paramMapsList?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList[];
  /**
   * @remarks
   * The pass-through type of the header.
   * 
   * > Valid values:
   * 
   * *   PASS_ALL: All headers are passed through.
   * 
   * *   PASS_NOT: All headers are not passed through.
   * 
   * *   PASS_ASSIGN: Specified headers are passed through.
   * 
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  /**
   * @remarks
   * The list of headers to be passed through.
   */
  passThroughList?: string[];
  static names(): { [key: string]: string } {
    return {
      dubboMothedName: 'DubboMothedName',
      httpMothed: 'HttpMothed',
      mothedpath: 'Mothedpath',
      paramMapsList: 'ParamMapsList',
      passThroughAllHeaders: 'PassThroughAllHeaders',
      passThroughList: 'PassThroughList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMothedName: 'string',
      httpMothed: 'string',
      mothedpath: 'string',
      paramMapsList: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList },
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

