// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecAbnormalsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the security risk.
   * 
   * @example
   * 29c6401****99a2bad3943e26d8
   */
  abnormalId?: string;
  /**
   * @remarks
   * The severity level of the security risk. Valid values:
   * 
   * - **high**: High.
   * 
   * - **medium**: Medium.
   * 
   * - **low**: Low.
   * 
   * @example
   * medium
   */
  abnormalLevel?: string;
  /**
   * @remarks
   * The type of the security risk.
   * 
   * > Call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to query the supported risk types.
   * 
   * @example
   * LackOfSpeedLimit
   */
  abnormalTag?: string;
  /**
   * @remarks
   * The path of the API that is associated with the security risk.
   * 
   * @example
   * /api/users/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API that is associated with the security risk.
   * 
   * @example
   * bd9efb8ad******d9ca6
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * > Call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to query the supported business purposes.
   * 
   * @example
   * RegisterAPI
   */
  apiTag?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud WAF cluster.
   * 
   * > This parameter is required only for hybrid cloud scenarios. Call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to query the IDs of hybrid cloud WAF clusters.
   * 
   * @example
   * 546
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1684382100
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-z***9g301
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name or IP address that the API resides on.
   * 
   * @example
   * a.aliyun.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The field by which the query results are sorted. Valid values:
   * 
   * - **discoverTime** (default): The time when the risk was first detected.
   * 
   * - **abnormalLevel**: The risk level.
   * 
   * - **latestDiscoverTime**: The most recent time when the risk was detected.
   * 
   * @example
   * firstTime
   */
  orderKey?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - **desc** (default): Descending order.
   * 
   * - **asc**: Ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The source of the risk detection rule. Valid values:
   * 
   * - **custom**: Custom rule.
   * 
   * - **default**: Built-in rule.
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The page number of the returned page. Default value: **1**.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  startTime?: string;
  /**
   * @remarks
   * The handling status of the security risk. Valid values:
   * 
   * - **toBeConfirmed**: To be confirmed.
   * 
   * - **confirmed**: Confirmed.
   * 
   * - **toBeFixed**: To be fixed.
   * 
   * - **fixed**: Fixed (manually verified).
   * 
   * - **ignored**: Ignored.
   * 
   * - **toBeVerified**: To be verified by the system.
   * 
   * - **notFixed**: Verification failed.
   * 
   * - **systemFixed**: Fixed (verified by the system).
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

