// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecAbnormalsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the risk.
   * 
   * @example
   * 29c6401****99a2bad3943e26d8
   */
  abnormalId?: string;
  /**
   * @remarks
   * The level of the risk. Valid values:
   * 
   * * **high**
   * * **medium**
   * * **low**
   * 
   * @example
   * medium
   */
  abnormalLevel?: string;
  /**
   * @remarks
   * The type of the risk.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported types of risks.
   * 
   * @example
   * LackOfSpeedLimit
   */
  abnormalTag?: string;
  /**
   * @remarks
   * The risk-related API.
   * 
   * @example
   * /api/users/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the risk-related API.
   * 
   * @example
   * bd9efb8ad******d9ca6
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the business purposes of APIs.
   * 
   * @example
   * RegisterAPI
   */
  apiTag?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * >  This parameter is available only in hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud clusters.
   * 
   * @example
   * 546
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1684382100
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-z***9g301
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name or IP address of the API.
   * 
   * @example
   * a.aliyun.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The name of the sorting field. Valid values:
   * 
   * *   **discoverTime** (default): indicates the time when a risk was first detected.
   * *   **abnormalLevel**: indicates the level of a risk.
   * *   **latestDiscoverTime**: indicates the time when a risk was last detected.
   * 
   * @example
   * allCnt
   */
  orderKey?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * * **desc (default)**: in descending order
   * * **asc**: in ascending order
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The source of the risk type. Valid values:
   * 
   * * **custom**
   * * **default**
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the risk. Valid values:
   * 
   * * **toBeConfirmed**
   * * **confirmed**
   * * **toBeFixed**
   * * **fixed**
   * * **ignored**
   * 
   * @example
   * Confirmed
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalId: 'AbnormalId',
      abnormalLevel: 'AbnormalLevel',
      abnormalTag: 'AbnormalTag',
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      apiTag: 'ApiTag',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      matchedHost: 'MatchedHost',
      orderKey: 'OrderKey',
      orderWay: 'OrderWay',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalId: 'string',
      abnormalLevel: 'string',
      abnormalTag: 'string',
      apiFormat: 'string',
      apiId: 'string',
      apiTag: 'string',
      clusterId: 'string',
      endTime: 'string',
      instanceId: 'string',
      matchedHost: 'string',
      orderKey: 'string',
      orderWay: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'string',
      userStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

