// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecSuggestionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API operation.
   * 
   * @example
   * /apisec/v1/saveinfo
   */
  apiFormat?: string;
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
   * The ID of the protection suggestion.
   * 
   * @example
   * 15060a1f8fed40130b7c4a7bf8d8733b
   */
  suggestId?: string;
  /**
   * @remarks
   * The content of the protection suggestion rule, which is a string converted from a JSON object constructed with a series of parameters. The parameters include:
   * - **event_tags**: the event type.
   * - **black_iplist**: the IP blacklist.
   * - **ip_baseline**: the IP list.
   * - **freq_baseline**: the throttling frequency information.
   * - **client_id_baseline**: the client information.
   * - **country_baseline**: the country information.
   * - **province_baseline**: the region information.
   * - **sensitive_type**: the sensitive information type.
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
   * The type of the protection suggestion. Valid values: 
   * - **BotRule**: bot rule.
   * - **BlackIPRule**: IP blacklist rule.
   * - **WhiteIPRule**: IP whitelist rule.
   * - **RateLimitRule**: throttling rule.
   * - **ClientRule**: client rule.
   * - **GeoRule**: geo-blocking rule.
   * - **SensitiveRule**: sensitive information rule.
   * - **UnauthRule**: authentication rule.
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
   * The list of protection suggestions.
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

