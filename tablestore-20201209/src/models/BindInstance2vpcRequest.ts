// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindInstance2VpcRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mkdd-test
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xu6666
   */
  instanceVpcName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6***********ez6ge
   */
  virtualSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2ze***********g31n7
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceVpcName: 'InstanceVpcName',
      virtualSwitchId: 'VirtualSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceVpcName: 'string',
      virtualSwitchId: 'string',
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

