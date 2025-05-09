// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworksResponseBodyPagingInfoNetworkList extends $dara.Model {
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
   * The ID of the user who creates the network resource.
   * 
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * 1000
   */
  id?: number;
  /**
   * @remarks
   * The ID of the serverless resource group.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2ze13vamugr7jenXXXXX
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the network resource. Valid values: Pending, Creating, Running, Deleting, and Deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  vpcId?: string;
  /**
   * @remarks
   * The VSwitch ID.
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

