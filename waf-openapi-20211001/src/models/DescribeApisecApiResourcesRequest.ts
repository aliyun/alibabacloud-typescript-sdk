// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecApiResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The API operation.
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
   * The request method of the API. Valid values:
   * - **GET**: GET request.
   * - **POST**: POST request.
   * - **HEAD**: HEAD request.
   * - **PUT**: PUT request.
   * - **DELETE**: DELETE request.
   * - **CONNECT**: CONNECT request.
   * - **PATCH**: PATCH request.
   * - **OPTIONS**: OPTIONS request.
   * 
   * @example
   * POST
   */
  apiMethod?: string;
  /**
   * @remarks
   * The status of the API. Valid values:
   * - **NewbornInterface**: newly added.
   * - **OfflineInterface**: inactive.
   * - **normal**: normal.
   * 
   * @example
   * OfflineInterface
   */
  apiStatus?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The service object. Valid values:
   * - **PublicAPI**: public service.
   * - **ThirdpartAPI**: third-party collaboration.
   * - **InternalAPI**: internal office.
   * 
   * @example
   * innerAPI
   */
  apiType?: string;
  /**
   * @remarks
   * Specifies whether the API has an authentication field. Valid values:
   * - **0**: has authentication.
   * - **1**: does not have authentication.
   * 
   * @example
   * 0
   */
  authFlag?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to obtain hybrid cloud cluster information.
   * 
   * @example
   * 740
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query, in UNIX timestamp (UTC) format. Unit: seconds.
   * 
   * @example
   * 1683388800
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the API is followed. Valid values:
   * - **1**: followed.
   * - **0**: not followed.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-u***gr20j
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
   * The remarks.
   * 
   * @example
   * loginApi
   */
  note?: string;
  /**
   * @remarks
   * The name of the field used for sorting. Valid values:
   * - **allCnt**: total access volume in the last 30 days.
   * - **botCnt**: bot access volume in the last 30 days.
   * - **crossBorderCnt**: cross-border access volume in the last 30 days.
   * - **abnormalNum**: number of risks associated with the API.
   * - **eventNum**: number of events associated with the API.
   * - **farthestTs**: first discovery time.
   * - **lastestTs**: most recent access time.
   * 
   * @example
   * allCnt
   */
  orderKey?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - **desc**: descending order (default).
   * - **asc**: ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The page number to return in a paging query. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Default value: **10**, which indicates that each page contains 10 entries.
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
   * The type of sensitive information in the request.
   * 
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported sensitive information types.
   * 
   * @example
   * 1004,1005
   */
  requestSensitiveType?: string;
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
   * The sensitivity level of the API. Valid values:
   * - **L1**: high sensitivity.
   * - **L2**: medium sensitivity.
   * - **L3**: low sensitivity.
   * - **N**: not sensitive.
   * 
   * @example
   * L3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of sensitive data in the response.
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported sensitive data types.
   * 
   * @example
   * 1004
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The start time of the query, in UNIX timestamp (UTC) format. Unit: seconds.
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

