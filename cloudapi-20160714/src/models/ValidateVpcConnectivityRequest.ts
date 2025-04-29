// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateVpcConnectivityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-hz-72bc18******
   */
  instanceId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the VPC access authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * 5f1b3216f9********e2c1297b6741dc
   */
  vpcAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityToken: 'SecurityToken',
      vpcAccessId: 'VpcAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityToken: 'string',
      vpcAccessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

