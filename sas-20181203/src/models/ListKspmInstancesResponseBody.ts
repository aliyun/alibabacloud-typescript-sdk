// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKspmInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asset has security alarms. Values:
   * - **YES**: There are security alarms
   * - **NO**: There are no security alarms
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The subtype of the asset.
   * 
   * @example
   * 1
   */
  assetSubType?: string;
  /**
   * @remarks
   * The name of the asset subtype.
   * 
   * @example
   * Pod
   */
  assetSubTypeName?: string;
  /**
   * @remarks
   * The type of the asset.
   * 
   * @example
   * 1
   */
  assetType?: number;
  /**
   * @remarks
   * The name of the asset type.
   * 
   * @example
   * Workload
   */
  assetTypeName?: string;
  /**
   * @remarks
   * The timestamp when the instance was created. Unit: milliseconds.
   * 
   * @example
   * 1607365213000
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6t6u05n6g48****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * yztest-l***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The ID of the region where the asset is located.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the asset has security risks. Values:
   * - **YES**: There are security risks
   * - **NO**: There are no security risks
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * Security information of the asset.
   * 
   * @example
   * {\\"seriousNum\\":0,\\"appNum\\":0,\\"baselineMedium\\":0,\\"remindNum\\":0,\\"imageVulNntf\\":0,\\"cveNum\\":0,\\"vul\\":0,\\"uuid\\":\\"rm-uf6t6u05n6g485o70\\",\\"emgNum\\":0,\\"weakPWNum\\":0,\\"imageMaliciousFileRemind\\":0,\\"imageBaselineMedium\\":0,\\"laterVulCount\\":0,\\"cmsNum\\":0,\\"imageMaliciousFileSerious\\":0,\\"agentlessMalicious\\":0,\\"suspNum\\":0,\\"imageBaselineHigh\\":0,\\"asapVulCount\\":0,\\"imageVulLater\\":0,\\"agentlessAll\\":0,\\"sysNum\\":0,\\"containerLater\\":0,\\"containerSuspicious\\":0,\\"imageBaselineNum\\":0,\\"newSuspicious\\":0,\\"nntfVulCount\\":0,\\"scaNum\\":0,\\"containerNntf\\":0,\\"health\\":0,\\"trojan\\":0,\\"suspicious\\":0,\\"imageMaliciousFileSuspicious\\":0,\\"containerRemind\\":0,\\"baselineLow\\":0,\\"imageVulAsap\\":0,\\"imageBaselineLow\\":0,\\"containerAsap\\":0,\\"agentlessBaseline\\":0,\\"agentlessVulSca\\":0,\\"agentlessVulCve\\":0,\\"containerSerious\\":0,\\"baselineHigh\\":0,\\"account\\":0,\\"baselineNum\\":6}
   */
  securityInfo?: string;
  /**
   * @remarks
   * List of resource tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The vendor of the asset. This value is fixed at **200**.
   * 
   * @example
   * 200
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      assetSubType: 'AssetSubType',
      assetSubTypeName: 'AssetSubTypeName',
      assetType: 'AssetType',
      assetTypeName: 'AssetTypeName',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      regionId: 'RegionId',
      riskStatus: 'RiskStatus',
      securityInfo: 'SecurityInfo',
      tags: 'Tags',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      assetSubType: 'string',
      assetSubTypeName: 'string',
      assetType: 'number',
      assetTypeName: 'string',
      createdTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      regionId: 'string',
      riskStatus: 'string',
      securityInfo: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      vendor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKspmInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of data items displayed on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a pagination query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of items to display per page in a pagination query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of data items found.
   * 
   * @example
   * 55
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

export class ListKspmInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of Kubernetes asset information.
   */
  instances?: ListKspmInstancesResponseBodyInstances[];
  /**
   * @remarks
   * Page information for pagination queries.
   */
  pageInfo?: ListKspmInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of this call request, a unique identifier generated by Alibaba Cloud for the request, which can be used to troubleshoot and pinpoint issues.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DDCAE1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Values:
   * - **true**: Success
   * - **false**: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListKspmInstancesResponseBodyInstances },
      pageInfo: ListKspmInstancesResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
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

