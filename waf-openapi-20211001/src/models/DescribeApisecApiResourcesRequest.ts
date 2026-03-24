// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecApiResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The API endpoint path used to filter the query results.
   * 
   * @example
   * /auth/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 867ade***24ee6e205b8da82b8f84
   */
  apiId?: string;
  /**
   * @remarks
   * The HTTP request method of the API. Valid values: **GET**, **POST**, **HEAD**, **PUT**, **DELETE**, **CONNECT**, **PATCH**, and **OPTIONS**.
   * 
   * @example
   * POST
   */
  apiMethod?: string;
  /**
   * @remarks
   * The lifecycle status of the API. Valid values:
   * 
   * - **NewbornInterface**: newly discovered.
   * 
   * - **OfflineInterface**: inactive.
   * 
   * - **normal**: active.
   * 
   * @example
   * OfflineInterface
   */
  apiStatus?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to obtain the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The type of service that the API serves. Valid values:
   * 
   * - **PublicAPI**: public-facing service.
   * 
   * - **ThirdpartAPI**: third-party service.
   * 
   * - **InternalAPI**: internal service.
   * 
   * @example
   * innerAPI
   */
  apiType?: string;
  /**
   * @remarks
   * Indicates whether the API requires authentication. Valid values:
   * 
   * - **0**: The API requires authentication.
   * 
   * - **1**: The API does not require authentication.
   * 
   * @example
   * 0
   */
  authFlag?: string;
  /**
   * @remarks
   * The ID of the Hybrid Cloud WAF cluster.
   * 
   * > This parameter is available only for hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain information about Hybrid Cloud WAF clusters.
   * 
   * @example
   * 740
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp in seconds.
   * 
   * @example
   * 1683388800
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the API is followed. Valid values:
   * 
   * - **1**: The API is followed.
   * 
   * - **0**: The API is not followed.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-u***gr20j
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name or IP address of the API used to filter the query results.
   * 
   * @example
   * a.aliyun.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The remarks of the API asset used to filter the query results.
   * 
   * @example
   * loginApi
   */
  note?: string;
  /**
   * @remarks
   * The field by which to sort the results. Valid values:
   * 
   * - **allCnt**: sorts by the total number of requests in the last 30 days.
   * 
   * - **botCnt**: sorts by the number of bot requests in the last 30 days.
   * 
   * - **crossBorderCnt**: sorts by the number of cross-border requests in the last 30 days.
   * 
   * - **abnormalNum**: sorts by the number of threats associated with the API.
   * 
   * - **eventNum**: sorts by the number of security events associated with the API.
   * 
   * - **farthestTs**: sorts by the time when the API was first discovered.
   * 
   * - **lastestTs**: sorts by the time of the most recent access.
   * 
   * @example
   * allCnt
   */
  orderKey?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **desc**: descending order (default).
   * 
   * - **asc**: ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
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
   * The type of sensitive data in the request.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to obtain the supported sensitive data types.
   * 
   * @example
   * 1004,1005
   */
  requestSensitiveType?: string;
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
   * The sensitivity level of the API. Valid values:
   * 
   * - **L1**: High.
   * 
   * - **L2**: Medium.
   * 
   * - **L3**: Low.
   * 
   * - **N**: Non-sensitive.
   * 
   * @example
   * L3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of sensitive data in the response.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to obtain the supported sensitive data types.
   * 
   * @example
   * 1004
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp in seconds.
   * 
   * @example
   * 1681833600
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiStatus: 'ApiStatus',
      apiTag: 'ApiTag',
      apiType: 'ApiType',
      authFlag: 'AuthFlag',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      follow: 'Follow',
      instanceId: 'InstanceId',
      matchedHost: 'MatchedHost',
      note: 'Note',
      orderKey: 'OrderKey',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestSensitiveType: 'RequestSensitiveType',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveType: 'SensitiveType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiFormat: 'string',
      apiId: 'string',
      apiMethod: 'string',
      apiStatus: 'string',
      apiTag: 'string',
      apiType: 'string',
      authFlag: 'string',
      clusterId: 'string',
      endTime: 'string',
      follow: 'number',
      instanceId: 'string',
      matchedHost: 'string',
      note: 'string',
      orderKey: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestSensitiveType: 'string',
      resourceManagerResourceGroupId: 'string',
      sensitiveLevel: 'string',
      sensitiveType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

