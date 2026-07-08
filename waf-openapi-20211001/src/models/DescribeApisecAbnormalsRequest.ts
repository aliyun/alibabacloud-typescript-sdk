// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecAbnormalsRequest extends $dara.Model {
  /**
   * @remarks
   * The risk ID.
   * 
   * @example
   * 29c6401****99a2bad3943e26d8
   */
  abnormalId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - **high**: high risk.
   * - **medium**: medium risk.
   * - **low**: low risk.
   * 
   * @example
   * medium
   */
  abnormalLevel?: string;
  /**
   * @remarks
   * The risk type.
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported risk types.
   * 
   * @example
   * LackOfSpeedLimit
   */
  abnormalTag?: string;
  /**
   * @remarks
   * The API operation associated with the risk.
   * 
   * @example
   * /api/users/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API associated with the risk.
   * 
   * @example
   * bd9efb8ad******d9ca6
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported business purposes.
   * 
   * @example
   * RegisterAPI
   */
  apiTag?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud cluster information.
   * 
   * @example
   * 546
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1684382100
   */
  endTime?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-z***9g301
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name or IP address to which the API operation belongs.
   * 
   * @example
   * a.aliyun.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The name of the field used for sorting. Valid values:
   * - **discoverTime**: the time when the risk was first detected. This is the default value.
   * - **abnormalLevel**: the risk level.
   * - **latestDiscoverTime**: the time when the risk was most recently detected.
   * 
   * @example
   * firstTime
   */
  orderKey?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - **desc**: descending order. This is the default value.
   * - **asc**: ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The source of the risk type. Valid values:
   * - **custom**: custom.
   * - **default**: built-in.
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The page number to return in a paging query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Default value: **10**, which indicates 10 entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  startTime?: string;
  /**
   * @remarks
   * The risk status. Valid values:
   * - **toBeConfirmed**: to be confirmed.
   * - **confirmed**: confirmed.
   * - **toBeFixed**: to be fixed.
   * - **fixed**: fixed (manually verified).
   * - **ignored**: ignored.
   * - **toBeVerified**: to be verified by the system.
   * - **notFixed**: not fixed after verification.
   * - **systemFixed**: fixed (verified by the system).
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

