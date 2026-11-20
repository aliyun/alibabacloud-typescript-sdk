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
   * The list of API IDs.
   */
  apiIds?: string[];
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
   * - **NewbornInterface**: Newly added.
   * - **OfflineInterface**: Inactive.
   * - **normal**: Normal.
   * 
   * @example
   * OfflineInterface
   */
  apiStatus?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The service object of the API. Valid values:
   * - **PublicAPI**: Public service.
   * - **ThirdpartAPI**: Third-party cooperation.
   * - **InternalAPI**: Internal office.
   * 
   * @example
   * innerAPI
   */
  apiType?: string;
  /**
   * @remarks
   * Specifies whether the API has an authentication field. Valid values:
   * - **0**: Has authentication field.
   * - **1**: No authentication field.
   * 
   * @example
   * 0
   */
  authFlag?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud cluster information.
   * 
   * @example
   * 740
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683388800
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the API is followed. Valid values:
   * - **1**: Followed.
   * - **0**: Not followed.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
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
   * The note.
   * 
   * @example
   * loginApi
   */
  note?: string;
  /**
   * @remarks
   * The name of the field by which to sort the results. Valid values:
   * - **allCnt**: Total number of visits in the last 30 days.
   * - **botCnt**: Number of bot visits in the last 30 days.
   * - **crossBorderCnt**: Number of cross-border visits in the last 30 days.
   * - **abnormalNum**: Number of risks associated with the API.
   * - **eventNum**: Number of events associated with the API.
   * - **farthestTs**: Time when the API was first discovered.
   * - **lastestTs**: Time of the last visit.
   * 
   * @example
   * allCnt
   */
  orderKey?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - **desc**: Descending order. This is the default value.
   * - **asc**: Ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The number of the page to return in a paging query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Default value: **10**, which indicates 10 entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * - **cn-hangzhou**: The Chinese mainland.
   * - **ap-southeast-1**: Outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of sensitive information in requests.
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive information types.
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
   * - **L1**: High sensitivity.
   * - **L2**: Medium sensitivity.
   * - **L3**: Low sensitivity.
   * - **N**: Non-sensitive.
   * 
   * @example
   * L3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of sensitive data in responses.
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types.
   * 
   * @example
   * 1004
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The start time of the query. The time is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1681833600
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      apiIds: 'ApiIds',
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
      apiIds: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.apiIds)) {
      $dara.Model.validateArray(this.apiIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

