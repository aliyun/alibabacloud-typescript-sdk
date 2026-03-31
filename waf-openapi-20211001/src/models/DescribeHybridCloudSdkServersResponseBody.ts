// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudSdkServersResponseBodySdkServers extends $dara.Model {
  clusterName?: string;
  /**
   * @example
   * 1621428205000
   */
  createTime?: number;
  /**
   * @example
   * qsh5-sec-8-fedd**005
   */
  hostName?: string;
  /**
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * SDKID。
   * 
   * @example
   * b11327c21790846374051d5d**83c
   */
  mid?: string;
  protectionGroupAddress?: string;
  /**
   * @example
   * on
   */
  pullinStatus?: string;
  resourceId?: string;
  status?: string;
  /**
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
   * @example
   * 3600F008-2E76-5D0B-BC76-EFBD****6D
   */
  requestId?: string;
  sdkServers?: DescribeHybridCloudSdkServersResponseBodySdkServers[];
  /**
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

