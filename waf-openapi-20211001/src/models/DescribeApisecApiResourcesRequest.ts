// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecApiResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The API.
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
   * 
   * * **GET**
   * * **POST**
   * * **HEAD**
   * * **PUT**
   * * **DELETE**
   * * **CONNECT**
   * * **PATCH**
   * * **OPTIONS**
   * 
   * @example
   * POST
   */
  apiMethod?: string;
  /**
   * @remarks
   * The API status. Valid values:
   * 
   * * **NewbornInterface**: The API is newly added.
   * * **OfflineInterface**: The API is inactive.
   * * **normal**: The API is normal.
   * 
   * @example
   * OfflineInterface
   */
  apiStatus?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the business purposes of APIs.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The service object. Valid values:
   * 
   * * **PublicAPI**: public services
   * * **ThirdpartAPI**: cooperation with third-party partners
   * * **InternalAPI**: internal office
   * 
   * @example
   * innerAPI
   */
  apiType?: string;
  /**
   * @remarks
   * Specifies whether authentication is required. Valid values:
   * 
   * * **0**: Authentication is required.
   * * **1**: Authentication is not required.
   * 
   * @example
   * 0
   */
  authFlag?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * >  This parameter is available only in hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud clusters.
   * 
   * @example
   * 740
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683388800
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to follow the API. Valid values:
   * 
   * * **1**: follows the API.
   * * **0**: does not follow the API.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-u***gr20j
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
   * The remarks.
   * 
   * @example
   * API for logon
   */
  note?: string;
  /**
   * @remarks
   * The name of the sorting field. Valid values:
   * 
   * * **allCnt**: the total number of calls to the API in the previous 30 days
   * * **botCnt**: the number of bot-initiated requests in the previous 30 days
   * * **crossBorderCnt**: the number of cross-border requests in the previous 30 days
   * * **abnormalNum**: the number of API-related risks
   * * **eventNum**: the number of API-related security events
   * * **farthestTs**: the time when the API was first detected
   * * **lastestTs**: the time of the most recent access to the API
   * 
   * @example
   * allCnt
   */
  orderKey?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * * **desc** (default): descending order
   * * **asc**: ascending order
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
   * The region ID of the WAF instance. Value:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sensitive data type in the request.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types.
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
   * * **L1**: high sensitivity
   * * **L2**: moderate sensitivity
   * * **L3**: low sensitivity
   * * **N**: non-sensitivity
   * 
   * @example
   * L3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The sensitive data type in the response.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types.
   * 
   * @example
   * 1004
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp in UTC. Unit: seconds.
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

