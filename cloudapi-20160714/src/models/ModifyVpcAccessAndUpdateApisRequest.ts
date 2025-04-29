// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcAccessAndUpdateApisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new instance.
   * 
   * @example
   * i-uf6bzcg1pr4oh5jjmxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC authorization.
   * 
   * > 
   * 
   * *   The name of a VPC authorization cannot be changed. You cannot use this parameter to change the name of a VPC authorization.
   * 
   * *   You must set this parameter to the name of the current VPC authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * VpcName
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to update the associated API.
   * 
   * **
   * 
   * **Warning:** If you want to update the VPC authorization of a published API, you must set this parameter to true. Otherwise, the update will not be synchronized to the backend service of the API.
   * 
   * @example
   * true
   */
  needBatchWork?: boolean;
  /**
   * @remarks
   * The new port number.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * Specifies whether to update the VPC authorization.
   * 
   * > 
   * 
   * *   If the ID of the instance in your VPC is changed but the IP address of the instance remains unchanged, you can set this parameter to true to update the VPC authorization.
   * 
   * @example
   * false
   */
  refresh?: boolean;
  securityToken?: string;
  /**
   * @remarks
   * The token of the request.
   * 
   * @example
   * c20d86c4-1eb3-4d0b-afe9-c586df1e2136
   */
  token?: string;
  /**
   * @remarks
   * The ID of the new VPC.
   * 
   * @example
   * vpc-m5e7jqfppv5wbvmdw5pg2
   */
  vpcId?: string;
  /**
   * @remarks
   * The hostname of the backend service.
   * 
   * @example
   * iot.hu***ng.com
   */
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      needBatchWork: 'NeedBatchWork',
      port: 'Port',
      refresh: 'Refresh',
      securityToken: 'SecurityToken',
      token: 'Token',
      vpcId: 'VpcId',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      needBatchWork: 'boolean',
      port: 'number',
      refresh: 'boolean',
      securityToken: 'string',
      token: 'string',
      vpcId: 'string',
      vpcTargetHostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

