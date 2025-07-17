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

export class ListNetworksResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The network resources of the serverless resource group.
   */
  networkList?: ListNetworksResponseBodyPagingInfoNetworkList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkList: 'NetworkList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkList: { 'type': 'array', 'itemType': ListNetworksResponseBodyPagingInfoNetworkList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkList)) {
      $dara.Model.validateArray(this.networkList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListNetworksResponseBodyPagingInfo;
  /**
   * @remarks
   * The ID of the request. It is used to locate logs and troubleshoot problems.
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
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListNetworksResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

