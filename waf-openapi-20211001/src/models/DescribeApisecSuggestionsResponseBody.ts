// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecSuggestionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API.
   * 
   * @example
   * /apisec/v1/saveinfo
   */
  apiFormat?: string;
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
   * The rule ID of the protection suggestion.
   * 
   * @example
   * 15060a1f8fed40130b7c4a7bf8d8733b
   */
  suggestId?: string;
  /**
   * @remarks
   * The rule content of the protection suggestion. The value is a string that consists of multiple parameters in the JSON format. Valid values:
   * 
   * *   **event_tags**: event type
   * *   **black_iplist**: IP address blacklist
   * *   **ip_baseline**: IP address
   * *   **freq_baseline**: throttling frequency
   * *   **client_id_baseline**: client information
   * *   **country_baseline**: country information
   * *   **province_baseline**: province information
   * *   **sensitive_type**: sensitive information
   * 
   * @example
   * {
   *     "rule": "ClientRule",
   *     "client_id_baseline": ["Edge"]
   * }
   */
  suggestRule?: string;
  /**
   * @remarks
   * The rule type of the protection suggestion. Valid values:
   * 
   * *   **BotRule**: bot management rules
   * *   **BlackIPRule**: IP address blacklist rules
   * *   **WhiteIPRule**: IP address whitelist rules
   * *   **RateLimitRule**: throttling rules
   * *   **ClientRule**: client rules
   * *   **GeoRule**: region-related rules
   * *   **SensitiveRule**: sensitive information rules
   * *   **UnauthRule**: authentication rules
   * 
   * @example
   * WhiteIPRule
   */
  suggestType?: string;
  static names(): { [key: string]: string } {
    return {
      apiFormat: 'ApiFormat',
      matchedHost: 'MatchedHost',
      suggestId: 'SuggestId',
      suggestRule: 'SuggestRule',
      suggestType: 'SuggestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiFormat: 'string',
      matchedHost: 'string',
      suggestId: 'string',
      suggestRule: 'string',
      suggestType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSuggestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protection suggestions.
   */
  data?: DescribeApisecSuggestionsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecSuggestionsResponseBodyData },
      requestId: 'string',
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

