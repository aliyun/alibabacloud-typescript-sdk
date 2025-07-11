// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecApiResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of API-related risks.
   * 
   * @example
   * 2
   */
  abnormalNum?: number;
  /**
   * @remarks
   * The total number of calls to this API in the previous 30 days.
   * 
   * @example
   * 10
   */
  allCnt?: number;
  /**
   * @remarks
   * The API.
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
   * 867ade***24ee6e205b8da82b8f84
   */
  apiId?: string;
  /**
   * @remarks
   * The API-related information. The value of this parameter is a JSON string that contains multiple parameters. The value includes the following parameters:
   * 
   * * **param_num**: the number of API parameters
   * * **request_method**: the request method
   * * **protocol**: the request protocol
   * * **api_url**: the request URL
   * * **poc_payload**: the request
   * * **request**: the sample request
   * * **response**: the sample response
   * * **param**: the request parameters
   */
  apiInfo?: string;
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
   * The API-related sensitive information. The value of this parameter is a JSON string that contains multiple parameters. The value includes the following parameters:
   * 
   * * **request_sensitive_list**: the sensitive data type in the request
   * * **response_sensitive_list**: the sensitive data type in the response
   * * **sensitive_list**: sensitive data types
   * * **sensitive_level**: sensitivity level
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
   * The sensitive data type in the request.
   * 
   * @example
   * ["1002","1005"]
   */
  apiSensitiveRequest?: string;
  /**
   * @remarks
   * The sensitive data type in the response.
   * 
   * @example
   * ["1002","1005"]
   */
  apiSensitiveResponse?: string;
  /**
   * @remarks
   * The API status. Valid values:
   * 
   * *   **NewbornInterface**: The API is newly added.
   * *   **OfflineInterface**: The API is inactive.
   * *   **normal**: The API is normal.
   * 
   * @example
   * NewbornInterface
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
   * *   **PublicAPI**: public services
   * *   **ThirdpartAPI**: cooperation with third-party partners
   * *   **InternalAPI**: internal office
   * 
   * @example
   * PublicAPI
   */
  apiType?: string;
  /**
   * @remarks
   * Indicates whether authentication is required. Valid values:
   * 
   * * **0**: Authentication is required.
   * * **1**: Authentication is not required.
   * 
   * @example
   * 1
   */
  authFlag?: string;
  /**
   * @remarks
   * The number of bot-initiated requests in the previous 30 days.
   * 
   * @example
   * 2
   */
  botCnt?: number;
  /**
   * @remarks
   * The number of the cross-border requests in the previous 30 days.
   * 
   * @example
   * 2
   */
  crossBorderCnt?: number;
  /**
   * @remarks
   * The number of API-related security events.
   * 
   * @example
   * 2
   */
  eventNum?: number;
  /**
   * @remarks
   * The sample APIs.
   */
  examples?: string[];
  /**
   * @remarks
   * The time when the API asset was first detected. This value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683388800
   */
  farthestTs?: number;
  /**
   * @remarks
   * Specifies whether to follow the API. Valid values:
   * 
   * *   **1**: follows the API.
   * *   **0**: does not follow the API.
   * 
   * @example
   * 1
   */
  follow?: number;
  /**
   * @remarks
   * The time at which the API was last accessed. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1683388800
   */
  lastestTs?: number;
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
   * Password changed
   */
  note?: string;
  /**
   * @remarks
   * The list of protection objects corresponding to this asset.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      abnormalNum: 'AbnormalNum',
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
   * The API assets.
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

