// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveVpcAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of an ECS or SLB instance in the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf6bzcg1pr4oh5jjmxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether batch work is required.
   * 
   * @example
   * true
   */
  needBatchWork?: boolean;
  /**
   * @remarks
   * The port number that corresponds to the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  port?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf657qec7lx42paw3qxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      needBatchWork: 'NeedBatchWork',
      port: 'Port',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      needBatchWork: 'boolean',
      port: 'number',
      securityToken: 'string',
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

