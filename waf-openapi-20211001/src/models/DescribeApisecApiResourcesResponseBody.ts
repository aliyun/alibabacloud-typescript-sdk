// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecApiResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of threats associated with the API.
   * 
   * @example
   * 2
   */
  abnormalNum?: number;
  /**
   * @remarks
   * The number of account security events associated with the API.
   * 
   * @example
   * 1
   */
  accountEventNum?: number;
  /**
   * @remarks
   * The total number of requests in the last 30 days.
   * 
   * @example
   * 1683388800
   */
  allCnt?: number;
  /**
   * @remarks
   * The API endpoint path.
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
   * The detailed information about the API. The value is a JSON string that contains the following fields:
   * 
   * - **param_num**: the number of API parameters.
   * 
   * - **request_method**: the request method.
   * 
   * - **protocol**: the request protocol.
   * 
   * - **api_url**: the request URL.
   * 
   * - **poc_payload**: the request.
   * 
   * - **request**: the request sample.
   * 
   * - **response**: the response sample.
   * 
   * - **param**: the request parameters.
   * 
   * > This parameter is returned only when you specify the **ApiId** request parameter.
   */
  apiInfo?: string;
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
   * The sensitive data classification of the API. The value is a JSON string that contains the following fields:
   * 
   * - **request_sensitive_list**: the list of sensitive data types in the request.
   * 
   * - **response_sensitive_list**: the list of sensitive data types in the response.
   * 
   * - **sensitive_list**: the list of sensitive data types.
   * 
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
   * The types of sensitive data detected in the API request. The value is a JSON array of sensitive data type IDs.
   * 
   * @example
   * ["1002","1005"]
   */
  apiSensitiveRequest?: string;
  /**
   * @remarks
   * The types of sensitive data detected in the API response. The value is a JSON array of sensitive data type IDs.
   * 
   * @example
   * ["1002","1005"]
   */
  apiSensitiveResponse?: string;
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
   * NewbornInterface
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
   * PublicAPI
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
   * 1
   */
  authFlag?: string;
  /**
   * @remarks
   * The number of bot requests in the last 30 days.
   * 
   * @example
   * 2
   */
  botCnt?: number;
  /**
   * @remarks
   * The number of cross-border requests in the last 30 days.
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
   * The list of API samples.
   * 
   * @deprecated
   */
  examples?: string[];
  /**
   * @remarks
   * The time when the API was first discovered. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1683388800
   */
  farthestTs?: number;
  /**
   * @remarks
   * Indicates whether the API is followed. Valid values:
   * 
   * - **1**: The API is followed.
   * 
   * - **0**: The API is not followed.
   * 
   * @example
   * 1
   */
  follow?: number;
  /**
   * @remarks
   * The time of the most recent access to the API. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1683388800
   */
  lastestTs?: number;
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
   * The remarks of the API asset.
   * 
   * @example
   * loginApi
   */
  note?: string;
  /**
   * @remarks
   * The list of protected objects associated with the API.
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
   * The total number of returned entries.
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

