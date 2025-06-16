// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipGatewayInfoResponseBodyEipInfosEipInfo } from "./DescribeEipGatewayInfoResponseBodyEipInfosEipInfo";


export class DescribeEipGatewayInfoResponseBodyEipInfos extends $dara.Model {
  eipInfo?: DescribeEipGatewayInfoResponseBodyEipInfosEipInfo[];
  static names(): { [key: string]: string } {
    return {
      eipInfo: 'EipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfo: { 'type': 'array', 'itemType': DescribeEipGatewayInfoResponseBodyEipInfosEipInfo },
    };
  }

  validate() {
    if(Array.isArray(this.eipInfo)) {
      $dara.Model.validateArray(this.eipInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

