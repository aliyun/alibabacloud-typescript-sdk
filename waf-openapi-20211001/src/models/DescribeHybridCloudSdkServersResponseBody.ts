// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudSdkServersResponseBodySdkServers extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * testcluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The timestamp when the entry was created.
   * 
   * @example
   * 1621428205000
   */
  createTime?: number;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * qsh5-sec-8-fedd**005
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The machine identifier (MID).
   * 
   * @example
   * b11327c21790846374051d5d**83c
   */
  mid?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 1.1.1.1
   */
  protectionGroupAddress?: string;
  /**
   * @remarks
   * The traffic redirection status. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  pullinStatus?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * test-antifaud-2.jqt.wafqax.top-waf
   */
  resourceId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the entry was updated.
   * 
   * @example
   * 1719489906000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      hostName: 'HostName',
      ip: 'Ip',
      mid: 'Mid',
      protectionGroupAddress: 'ProtectionGroupAddress',
      pullinStatus: 'PullinStatus',
      resourceId: 'ResourceId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      createTime: 'number',
      hostName: 'string',
      ip: 'string',
      mid: 'string',
      protectionGroupAddress: 'string',
      pullinStatus: 'string',
      resourceId: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudSdkServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3600F008-2E76-5D0B-BC76-EFBD****6D
   */
  requestId?: string;
  /**
   * @remarks
   * The SDK information.
   */
  sdkServers?: DescribeHybridCloudSdkServersResponseBodySdkServers[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdkServers: 'SdkServers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdkServers: { 'type': 'array', 'itemType': DescribeHybridCloudSdkServersResponseBodySdkServers },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sdkServers)) {
      $dara.Model.validateArray(this.sdkServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

