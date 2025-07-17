// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GatewayInfoVpcInfo extends $dara.Model {
  name?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

