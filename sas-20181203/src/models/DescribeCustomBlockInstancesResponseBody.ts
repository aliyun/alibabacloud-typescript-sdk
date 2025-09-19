// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomBlockInstancesResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The status of the host network extension. Valid values:
   * 
   * *   **true**: online
   * *   **false**: offline
   * 
   * @example
   * true
   */
  aliNetOnline?: boolean;
  /**
   * @remarks
   * The blocking type. Valid values:
   * 
   * *   **group**: security group
   * *   **alinet**: host network extension
   * 
   * @example
   * group
   */
  blockType?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * AliNetNotOnline
   */
  errorCode?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * myInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 116.62.121.1xx
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 192.168.1.xx
   */
  intranetIp?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled for the server.
   * 
   * *   **2**: enabling failed
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The information that is returned after brute-force attacks are blocked.
   * 
   * @example
   * {"aliUid":*******,"groupId":"sg-xxxx","groupName":"Sas_Malicious_Ip_Security_Group","groupType":"normal","instanceId":"i-xxxx","regionId":"cn-shenzhen","vpcId":"vpc-xxxxxxxx"}
   */
  successInfo?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * f2d6e901-1004-4ca8-9dae-53ec04a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliNetOnline: 'AliNetOnline',
      blockType: 'BlockType',
      errorCode: 'ErrorCode',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      status: 'Status',
      successInfo: 'SuccessInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliNetOnline: 'boolean',
      blockType: 'string',
      errorCode: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      status: 'number',
      successInfo: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomBlockInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of servers to which the defense rule is applied.
   * 
   * @example
   * 83
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomBlockInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The server ID.
   */
  instanceList?: DescribeCustomBlockInstancesResponseBodyInstanceList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCustomBlockInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D81DD78E-E006-5C65-A171-C8CB09XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': DescribeCustomBlockInstancesResponseBodyInstanceList },
      pageInfo: DescribeCustomBlockInstancesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

