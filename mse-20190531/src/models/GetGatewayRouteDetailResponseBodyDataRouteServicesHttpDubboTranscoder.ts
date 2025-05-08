// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapList } from "./GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapList";


export class GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder extends $dara.Model {
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
  mothedMapList?: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapList[];
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
      mothedMapList: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapList },
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

