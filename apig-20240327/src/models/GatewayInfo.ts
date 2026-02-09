// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GatewayInfoVpcInfo extends $dara.Model {
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * test-vpc
   */
  name?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf664nyle5kh***
   */
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
  /**
   * @remarks
   * The instance engine version.
   * 
   * @example
   * 2.0.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-cq7og15lhtgi6qasrj60
   */
  gatewayId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * apitest-gw
   */
  name?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) information.
   */
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

