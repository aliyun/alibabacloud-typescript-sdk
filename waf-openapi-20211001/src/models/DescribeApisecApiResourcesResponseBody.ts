// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecApiResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of risks associated with the API.
   * 
   * @example
   * 2
   */
  abnormalNum?: number;
  /**
   * @remarks
   * The number of account security events associated with the asset.
   * 
   * @example
   * 1
   */
  accountEventNum?: number;
  /**
   * @remarks
   * The total number of access requests in the last 30 days.
   * 
   * @example
   * 1683388800
   */
  allCnt?: number;
  /**
   * @remarks
   * The API operation.
   * 
   * @example
   * /v1/etl/finddatabyvid
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 197b52abcd81d6a8bd4***e477
   */
  apiId?: string;
  /**
   * @remarks
   * API-related information, which is a JSON string constructed from a series of parameters. The parameters include:
   * - **param_num**: the number of API parameters.
   * - **request_method**: the request method.
   * - **protocol**: the request protocol.
   * - **api_url**: the request URL.
   * - **poc_payload**: the request.
   * - **request**: the request example.
   * - **response**: the response example.
   * - **param**: the request parameters.
   * > This value is returned only when the **ApiId** request parameter is specified.
   */
  apiInfo?: string;
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
   * Sensitive information related to the API, which is a JSON string constructed from a series of parameters. The parameters include:
   * - **request_sensitive_list**: the list of sensitive data types in requests.
   * - **response_sensitive_list**: the list of sensitive data types in responses.
   * - **sensitive_list**: the list of sensitive data types.
   * - **sensitive_level**: the sensitivity level.
   * 
   * @example
   * {
   *     "sensitive_list": ["1003","1005"],
   *     "sensitive_level": "L2",
   *     "request_sensitive_list": ["1003"],
   *     "response_sensitive_list": ["1005"]
   * }
   */
  apiSensitive?: string;
  /**
   * @remarks
   * The sensitive data in API requests.
   * 
   * @example
   * ["1002","1005"]
   */
  apiSensitiveRequest?: string;
  /**
   * @remarks
   * The sensitive data in API responses.
   * 
   * @example
   * ["1002","1005"]
   */
  apiSensitiveResponse?: string;
  /**
   * @remarks
   * The status of the API. Valid values:
   * - **NewbornInterface**: New.
   * - **OfflineInterface**: Inactive.
   * - **normal**: Normal.
   * 
   * @example
   * NewbornInterface
   */
  apiStatus?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * > Call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The service object. Valid values:
   * - **PublicAPI**: Public service.
   * - **ThirdpartAPI**: Third-party collaboration.
   * - **InternalAPI**: Internal office.
   * 
   * @example
   * PublicAPI
   */
  apiType?: string;
  /**
   * @remarks
   * Specifies whether the API has an authentication field. Valid values:
   * - **0**: Has authentication.
   * - **1**: Does not have authentication.
   * 
   * @example
   * 1
   */
  authFlag?: string;
  /**
   * @remarks
   * The number of bot access requests in the last 30 days.
   * 
   * @example
   * 2
   */
  botCnt?: number;
  /**
   * @remarks
   * The number of cross-border access requests in the last 30 days.
   * 
   * @example
   * 2
   */
  crossBorderCnt?: number;
  /**
   * @remarks
   * The number of security events associated with the API.
   * 
   * @example
   * 2
   */
  eventNum?: number;
  /**
   * @remarks
   * The list of API examples.
   * 
   * @deprecated
   */
  examples?: string[];
  /**
   * @remarks
   * The time when the API asset was first discovered. The value is a UNIX timestamp (UTC), in seconds.
   * 
   * @example
   * 1683388800
   */
  farthestTs?: number;
  /**
   * @remarks
   * Specifies whether the API is followed. Valid values:
   * - **1**: Followed.
   * - **0**: Not followed.
   * 
   * @example
   * 1
   */
  follow?: number;
  /**
   * @remarks
   * The most recent access time of the API asset. The value is a UNIX timestamp (UTC), in seconds.
   * 
   * @example
   * 1683388800
   */
  lastestTs?: number;
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
   * The list of protected objects associated with the asset.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      abnormalNum: 'AbnormalNum',
      accountEventNum: 'AccountEventNum',
      allCnt: 'AllCnt',
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      apiInfo: 'ApiInfo',
      apiMethod: 'ApiMethod',
      apiSensitive: 'ApiSensitive',
      apiSensitiveRequest: 'ApiSensitiveRequest',
      apiSensitiveResponse: 'ApiSensitiveResponse',
      apiStatus: 'ApiStatus',
      apiTag: 'ApiTag',
      apiType: 'ApiType',
      authFlag: 'AuthFlag',
      botCnt: 'BotCnt',
      crossBorderCnt: 'CrossBorderCnt',
      eventNum: 'EventNum',
      examples: 'Examples',
      farthestTs: 'FarthestTs',
      follow: 'Follow',
      lastestTs: 'LastestTs',
      matchedHost: 'MatchedHost',
      note: 'Note',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalNum: 'number',
      accountEventNum: 'number',
      allCnt: 'number',
      apiFormat: 'string',
      apiId: 'string',
      apiInfo: 'string',
      apiMethod: 'string',
      apiSensitive: 'string',
      apiSensitiveRequest: 'string',
      apiSensitiveResponse: 'string',
      apiStatus: 'string',
      apiTag: 'string',
      apiType: 'string',
      authFlag: 'string',
      botCnt: 'number',
      crossBorderCnt: 'number',
      eventNum: 'number',
      examples: { 'type': 'array', 'itemType': 'string' },
      farthestTs: 'number',
      follow: 'number',
      lastestTs: 'number',
      matchedHost: 'string',
      note: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecApiResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of API assets.
   */
  data?: DescribeApisecApiResourcesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecApiResourcesResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

