// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkResponseBodyNetwork extends $dara.Model {
  /**
   * @remarks
   * The time when the network resource was created. The value is a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the network resource.
   * 
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @remarks
   * The ID of the network resource.
   * 
   * @example
   * 1000
   */
  id?: number;
  /**
   * @remarks
   * The ID of the resource group to which the network resource belongs.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group ID of the network resource.
   * 
   * @example
   * sg-2ze13vamugr7jenXXXXX
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The current status of the network resource. Valid values:
   * - Pending: The resource is pending.
   * - Creating: The resource is being created.
   * - Running: The resource is running.
   * - Deleting: The resource is being deleted.
   * - Deleted: The resource is deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The VPC ID of the network resource.
   * 
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID of the network resource.
   * 
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      id: 'number',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      status: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the network resource.
   */
  network?: GetNetworkResponseBodyNetwork;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: GetNetworkResponseBodyNetwork,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

