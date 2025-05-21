// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayInfoVpcInfo } from "./GatewayInfoVpcInfo";


export class GatewayInfo extends $dara.Model {
  engineVersion?: string;
  gatewayId?: string;
  name?: string;
  vpcInfo?: GatewayInfoVpcInfo;
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'engineVersion',
      gatewayId: 'gatewayId',
      name: 'name',
      vpcInfo: 'vpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: 'string',
      gatewayId: 'string',
      name: 'string',
      vpcInfo: GatewayInfoVpcInfo,
    };
  }

  validate() {
    if(this.vpcInfo && typeof (this.vpcInfo as any).validate === 'function') {
      (this.vpcInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

