// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of attacks.
   * 
   * @example
   * 10
   */
  allCnt?: number;
  /**
   * @remarks
   * The API operation.
   * 
   * @example
   * /apisec/v1/register.php
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API associated with the security event.
   * 
   * @example
   * 2ecc1cf67b91853bc55545052ccf06a8
   */
  apiId?: string;
  /**
   * @remarks
   * The API business purpose.
   * 
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The attack client.
   * 
   * @example
   * Chrome
   */
  attackClient?: string;
  /**
   * @remarks
   * The attack count information, converted to a string in JSON format constructed by a series of parameters. The key is a timestamp in seconds, and the value is the number of attacks.
   * 
   * @example
   * {
   *     "1717498320": 500,
   *     "1717498380": 529,
   *     "1717498440": 20
   * }
   * 
   * @deprecated
   */
  attackCntInfo?: string;
  /**
   * @remarks
   * The attack IP address.<notice>This parameter is deprecated. Use the AttackIps parameter instead.</notice>
   * 
   * @example
   * 104.234.140.**
   * 
   * @deprecated
   */
  attackIp?: string;
  /**
   * @remarks
   * The attack IP address information, converted to a string in JSON format constructed by a series of parameters. Includes:
   * - **ip**: The IP address.
   * - **country_id**: The country.
   * - **region_id**: The region.
   * - **cnt**: The number of attacks.
   * 
   * @example
   * [
   *     {
   *         "ip": "72.*.*.119",
   *         "country_id": "US",
   *         "region_id": "",
   *         "cnt": "2100"
   *     }
   * ]
   * 
   * @deprecated
   */
  attackIpInfo?: string;
  /**
   * @remarks
   * The list of attack IP addresses.
   * 
   * @deprecated
   */
  attackIps?: string[];
  /**
   * @remarks
   * The attacker list corresponding to the event.
   */
  attackerList?: string[];
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683703260
   */
  endTs?: number;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * c82cb276847e9c96f9597d9f4b0cdcff
   */
  eventId?: string;
  /**
   * @remarks
   * The detailed event information, converted to a string in JSON format constructed by a series of parameters. Includes:
   * - **ip_info**: The attack IP address information. You can refer to the **AttackIpInfo** response parameter of this operation.
   * - **rule_id**: The ID of the rule corresponding to the event.
   * - **rule_tag**: The rule information corresponding to the event.
   * 
   * @example
   * {
   *     "ip_info": [
   *         {
   *             "ip": "112.224.143.**",
   *             "country_id": "CN",
   *             "region_id": "-",
   *             "cnt": "4"
   *         }
   *     ],
   *     "rule_id": "837**",
   *     "rule_tag": "interface returns a large amount of sensitive information"
   * }
   * 
   * @deprecated
   */
  eventInfo?: string;
  /**
   * @remarks
   * The severity level of the event. Valid values:
   * - **high**: high risk.
   * - **medium**: medium risk.
   * - **low**: low risk.
   * 
   * @example
   * medium
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event type.
   * 
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported event types.
   * 
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @remarks
   * Specifies whether the event is followed. Valid values:
   * - **1**: Followed.
   * - **0**: Not followed.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The domain name or IP address to which the API operation belongs.
   * 
   * @example
   * a.***.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The note.
   * 
   * @example
   * Notify
   */
  note?: string;
  /**
   * @remarks
   * The origin of the event type. Valid values:
   * - **custom**: custom.
   * - **default**: built-in.
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The country to which the attack IP address belongs.
   * 
   * @example
   * US
   */
  remoteCountry?: string;
  /**
   * @remarks
   * The region to which the attack IP address belongs.
   * 
   * @example
   * 110000
   */
  remoteRegion?: string;
  /**
   * @remarks
   * The API request data instance, converted to a string in JSON format constructed by a series of parameters.
   * 
   * @example
   * {}
   * 
   * @deprecated
   */
  requestData?: string;
  /**
   * @remarks
   * The API response data example, converted to a string in JSON format constructed by a series of parameters.
   * 
   * @example
   * {}
   * 
   * @deprecated
   */
  responseData?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683648000
   */
  startTs?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * - **toBeConfirmed**: pending confirmation.
   * - **confirmed**: confirmed.
   * - **actioned**: handled.
   * - **ignored**: ignored.
   * 
   * @example
   * toBeConfirmed
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allCnt: 'AllCnt',
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      apiTag: 'ApiTag',
      attackClient: 'AttackClient',
      attackCntInfo: 'AttackCntInfo',
      attackIp: 'AttackIp',
      attackIpInfo: 'AttackIpInfo',
      attackIps: 'AttackIps',
      attackerList: 'AttackerList',
      endTs: 'EndTs',
      eventId: 'EventId',
      eventInfo: 'EventInfo',
      eventLevel: 'EventLevel',
      eventTag: 'EventTag',
      follow: 'Follow',
      matchedHost: 'MatchedHost',
      note: 'Note',
      origin: 'Origin',
      remoteCountry: 'RemoteCountry',
      remoteRegion: 'RemoteRegion',
      requestData: 'RequestData',
      responseData: 'ResponseData',
      startTs: 'StartTs',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCnt: 'number',
      apiFormat: 'string',
      apiId: 'string',
      apiTag: 'string',
      attackClient: 'string',
      attackCntInfo: 'string',
      attackIp: 'string',
      attackIpInfo: 'string',
      attackIps: { 'type': 'array', 'itemType': 'string' },
      attackerList: { 'type': 'array', 'itemType': 'string' },
      endTs: 'number',
      eventId: 'string',
      eventInfo: 'string',
      eventLevel: 'string',
      eventTag: 'string',
      follow: 'number',
      matchedHost: 'string',
      note: 'string',
      origin: 'string',
      remoteCountry: 'string',
      remoteRegion: 'string',
      requestData: 'string',
      responseData: 'string',
      startTs: 'number',
      userStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackIps)) {
      $dara.Model.validateArray(this.attackIps);
    }
    if(Array.isArray(this.attackerList)) {
      $dara.Model.validateArray(this.attackerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of security events.
   */
  data?: DescribeApisecEventsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12F4CC8F-7E9F-5E4D-BF7C-BD1EDDE0C282
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 3
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
      data: { 'type': 'array', 'itemType': DescribeApisecEventsResponseBodyData },
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

