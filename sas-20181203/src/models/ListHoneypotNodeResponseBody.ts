// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotNodeResponseBodyHoneypotNodeList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a honeypot is allowed to access the Internet. Valid values:
   * 
   * *   **true**: The honeypot is allowed to access the Internet.
   * *   **false**: The honeypot is not allowed to access the Internet.
   * 
   * @example
   * true
   */
  allowHoneypotAccessInternet?: boolean;
  /**
   * @remarks
   * The time when the management node was created.
   * 
   * @example
   * 2022-08-04 15:52:56
   */
  createTime?: string;
  /**
   * @remarks
   * The type of the management node. Default value: **false**. Valid values:
   * 
   * *   **false**: non-default type
   * *   **true**: default type
   * 
   * @example
   * false
   */
  defaultNode?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1fs3qsc1msa3512k****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The maximum number of honeypots that can be deployed to the management node.
   * 
   * @example
   * 10
   */
  honeypotTotalCount?: number;
  /**
   * @remarks
   * The number of honeypots that are deployed to the management node.
   * 
   * @example
   * 2
   */
  honeypotUsedCount?: number;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * 7d110ca6-05ee-4149-8042-13ad1a41fd****
   */
  nodeId?: string;
  /**
   * @remarks
   * The IP address of the management node.
   * 
   * @example
   * 119.180.XX.XX
   */
  nodeIp?: string;
  /**
   * @remarks
   * The name of the management node.
   * 
   * @example
   * cyct_cnymu
   */
  nodeName?: string;
  /**
   * @remarks
   * The maximum number of probes that can be deployed for the management node.
   * 
   * @example
   * 5
   */
  probeTotalCount?: number;
  /**
   * @remarks
   * The number of probes that are deployed for the management node.
   * 
   * @example
   * 2
   */
  probeUsedCount?: number;
  /**
   * @remarks
   * An array consisting of the CIDR blocks that are allowed to access the management node.
   */
  securityGroupProbeIpList?: string[];
  /**
   * @remarks
   * The status of the management node. Valid values:
   * 
   * *   **1**: normal
   * *   **2**: abnormal
   * 
   * @example
   * 1
   */
  totalStatus?: number;
  /**
   * @remarks
   * Indicates whether the management node can be upgraded. Valid values:
   * 
   * *   **false**: no
   * *   **true**: yes
   * 
   * @example
   * true
   */
  upgradeAvailable?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowHoneypotAccessInternet: 'AllowHoneypotAccessInternet',
      createTime: 'CreateTime',
      defaultNode: 'DefaultNode',
      ecsInstanceId: 'EcsInstanceId',
      honeypotTotalCount: 'HoneypotTotalCount',
      honeypotUsedCount: 'HoneypotUsedCount',
      nodeId: 'NodeId',
      nodeIp: 'NodeIp',
      nodeName: 'NodeName',
      probeTotalCount: 'ProbeTotalCount',
      probeUsedCount: 'ProbeUsedCount',
      securityGroupProbeIpList: 'SecurityGroupProbeIpList',
      totalStatus: 'TotalStatus',
      upgradeAvailable: 'UpgradeAvailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowHoneypotAccessInternet: 'boolean',
      createTime: 'string',
      defaultNode: 'boolean',
      ecsInstanceId: 'string',
      honeypotTotalCount: 'number',
      honeypotUsedCount: 'number',
      nodeId: 'string',
      nodeIp: 'string',
      nodeName: 'string',
      probeTotalCount: 'number',
      probeUsedCount: 'number',
      securityGroupProbeIpList: { 'type': 'array', 'itemType': 'string' },
      totalStatus: 'number',
      upgradeAvailable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupProbeIpList)) {
      $dara.Model.validateArray(this.securityGroupProbeIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotNodeResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 149
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

export class ListHoneypotNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * An array that consists of the information about the management nodes.
   */
  honeypotNodeList?: ListHoneypotNodeResponseBodyHoneypotNodeList[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListHoneypotNodeResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 337BEA70-B03D-5370-8420-436F3FCD9924
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      honeypotNodeList: 'HoneypotNodeList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      honeypotNodeList: { 'type': 'array', 'itemType': ListHoneypotNodeResponseBodyHoneypotNodeList },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: ListHoneypotNodeResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.honeypotNodeList)) {
      $dara.Model.validateArray(this.honeypotNodeList);
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

