// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList } from "./ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList";


export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder extends $dara.Model {
  /**
   * @remarks
   * The Dubbo service group.
   * 
   * @example
   * service group
   */
  dubboServiceGroup?: string;
  /**
   * @remarks
   * The name of the Dubbo service.
   * 
   * @example
   * org.apache.dubbo.samples.basic.api.DemoService
   */
  dubboServiceName?: string;
  /**
   * @remarks
   * The version of the Dubbo service.
   * 
   * @example
   * 0.0.0
   */
  dubboServiceVersion?: string;
  /**
   * @remarks
   * The forwarding rules of the Dubbo service.
   */
  mothedMapList?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList[];
  static names(): { [key: string]: string } {
    return {
      dubboServiceGroup: 'DubboServiceGroup',
      dubboServiceName: 'DubboServiceName',
      dubboServiceVersion: 'DubboServiceVersion',
      mothedMapList: 'MothedMapList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboServiceGroup: 'string',
      dubboServiceName: 'string',
      dubboServiceVersion: 'string',
      mothedMapList: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList },
    };
  }

  validate() {
    if(Array.isArray(this.mothedMapList)) {
      $dara.Model.validateArray(this.mothedMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

