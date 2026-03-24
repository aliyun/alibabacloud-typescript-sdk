// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudSdkServersResponseBodySdkServers extends $dara.Model {
  /**
   * @remarks
   * The name of the hybrid cloud cluster to which the SDK server belongs.
   * 
   * @example
   * testcluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the hybrid cloud SDK server was created. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1621428205000
   */
  createTime?: number;
  /**
   * @remarks
   * The hostname of the hybrid cloud SDK server.
   * 
   * @example
   * qsh5-sec-8-fedd**005
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address of the hybrid cloud SDK server.
   * 
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the SDK server.
   * 
   * @example
   * b11327c21790846374051d5d**83c
   */
  mid?: string;
  /**
   * @remarks
   * The address of the protection group associated with the SDK server.
   * 
   * @example
   * 1.1.1.1
   */
  protectionGroupAddress?: string;
  /**
   * @remarks
   * Indicates whether traffic redirection is enabled. Valid values:
   * 
   * - **on**: Traffic redirection is enabled.
   * 
   * - **off**: Traffic redirection is disabled.
   * 
   * @example
   * on
   */
  pullinStatus?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * test-antifaud-2.jqt.wafqax.top-waf
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the hybrid cloud SDK server.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The time when the hybrid cloud SDK server was last updated. This value is a UNIX timestamp in milliseconds.
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
   * The ID of the request.
   * 
   * @example
   * 3600F008-2E76-5D0B-BC76-EFBD****6D
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the hybrid cloud SDK servers.
   */
  sdkServers?: DescribeHybridCloudSdkServersResponseBodySdkServers[];
  /**
   * @remarks
   * The total number of hybrid cloud SDK servers returned.
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

