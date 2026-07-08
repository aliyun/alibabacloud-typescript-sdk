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
   * The total access volume in the last 30 days.
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
   * The API information, which is a string converted from a JSON object constructed with a series of parameters. The parameters include:
   * - **param_num**: the number of API parameters.
   * - **request_method**: the request method.
   * - **protocol**: the request protocol.
   * - **api_url**: the request URL.
   * - **poc_payload**: the request.
   * - **request**: the request sample.
   * - **response**: the response sample.
   * - **param**: the request parameters.
   * > This field is returned only when the **ApiId** parameter is specified.
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
   * The sensitive information involved in the API, which is a string converted from a JSON object constructed with a series of parameters. The parameters include:
   * - **request_sensitive_list**: the list of sensitive data types in the request.
   * - **response_sensitive_list**: the list of sensitive data types in the response.
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
   * The sensitive data in the API request.
   * 
   * @example
   * ["1002","1005"]
   */
  apiSensitiveRequest?: string;
  /**
   * @remarks
   * The sensitive data in the API response.
   * 
   * @example
   * ["1002","1005"]
   */
  apiSensitiveResponse?: string;
  /**
   * @remarks
   * The status of the API. Valid values:
   * - **NewbornInterface**: newly added.
   * - **OfflineInterface**: inactive.
   * - **normal**: normal.
   * 
   * @example
   * NewbornInterface
   */
  apiStatus?: string;
  /**
   * @remarks
   * The business purpose of the API.
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
   * PublicAPI
   */
  apiType?: string;
  /**
   * @remarks
   * Specifies whether the API has an authentication field. Valid values:
   * - **0**: has authentication.
   * - **1**: does not have authentication.
   * 
   * @example
   * 1
   */
  authFlag?: string;
  /**
   * @remarks
   * The bot access volume in the last 30 days.
   * 
   * @example
   * 2
   */
  botCnt?: number;
  /**
   * @remarks
   * The cross-border access volume in the last 30 days.
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
   * The time when the API asset was first discovered, in UNIX timestamp (UTC) format. Unit: seconds.
   * 
   * @example
   * 1683388800
   */
  farthestTs?: number;
  /**
   * @remarks
   * Specifies whether the API is followed. Valid values:
   * - **1**: followed.
   * - **0**: not followed.
   * 
   * @example
   * 1
   */
  follow?: number;
  /**
   * @remarks
   * The most recent access time of the API asset, in UNIX timestamp (UTC) format. Unit: seconds.
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
   * The list of protected objects corresponding to the asset.
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

