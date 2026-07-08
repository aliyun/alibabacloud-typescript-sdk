// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of attacks in the security event.
   * 
   * @example
   * 10
   */
  allCnt?: number;
  /**
   * @remarks
   * The path of the API that is associated with the security event.
   * 
   * @example
   * /apisec/v1/register.php
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API that is associated with the security event.
   * 
   * @example
   * 2ecc1cf67b91853bc55545052ccf06a8
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The type of client that initiated the attack, such as a browser or automation tool.
   * 
   * @example
   * Chrome
   */
  attackClient?: string;
  /**
   * @remarks
   * The attack count over time. The value is a JSON string in which each key is a UNIX timestamp in seconds and each value is the number of attacks at that time.
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
   * The IP address of the attacker. >Notice: This parameter is deprecated. Use the AttackIps parameter instead.
   * 
   * @example
   * 104.234.140.**
   * 
   * @deprecated
   */
  attackIp?: string;
  /**
   * @remarks
   * The information about the attacker IP address. The value is a JSON string that contains the following fields:
   * 
   * - **ip**: the IP address.
   * 
   * - **country_id**: the country.
   * 
   * - **region_id**: the region.
   * 
   * - **cnt**: the number of attacks.
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
   * The list of attacker IP addresses.
   * 
   * @deprecated
   */
  attackIps?: string[];
  /**
   * @remarks
   * The list of attackers that are associated with the security event.
   */
  attackerList?: string[];
  /**
   * @remarks
   * The end time of the event. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1683703260
   */
  endTs?: number;
  /**
   * @remarks
   * The ID of the security event.
   * 
   * @example
   * c82cb276847e9c96f9597d9f4b0cdcff
   */
  eventId?: string;
  /**
   * @remarks
   * The details of the security event. The value is a JSON string that contains the following fields:
   * 
   * - **ip_info**: the information about the attacker IP address. For more information, see the **AttackIpInfo** response parameter.
   * 
   * - **rule_id**: the ID of the rule that corresponds to the event.
   * 
   * - **rule_tag**: the information about the rule that corresponds to the event.
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
   * 
   * - **high**: high severity.
   * 
   * - **medium**: medium severity.
   * 
   * - **low**: low severity.
   * 
   * @example
   * medium
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event type.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported event types.
   * 
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @remarks
   * Indicates whether the event is followed. Valid values:
   * 
   * - **1**: The event is followed.
   * 
   * - **0**: The event is not followed.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The domain name or IP address that is protected by WAF.
   * 
   * @example
   * a.***.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The remarks that are added to the security event.
   * 
   * @example
   * Notify
   */
  note?: string;
  /**
   * @remarks
   * The source of the event type. Valid values:
   * 
   * - **custom**: a user-defined event type.
   * 
   * - **default**: a built-in event type.
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The country where the attacker IP address is located.
   * 
   * @example
   * US
   */
  remoteCountry?: string;
  /**
   * @remarks
   * The region where the attacker IP address is located.
   * 
   * @example
   * 110000
   */
  remoteRegion?: string;
  /**
   * @remarks
   * A sample of the API request data. The value is a JSON string.
   * 
   * @example
   * {}
   * 
   * @deprecated
   */
  requestData?: string;
  /**
   * @remarks
   * A sample of the API response data. The value is a JSON string.
   * 
   * @example
   * {}
   * 
   * @deprecated
   */
  responseData?: string;
  /**
   * @remarks
   * The start time of the event. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1683648000
   */
  startTs?: number;
  /**
   * @remarks
   * The handling status of the event. Valid values:
   * 
   * - **toBeConfirmed**: pending confirmation.
   * 
   * - **confirmed**: confirmed but not yet handled.
   * 
   * - **actioned**: handled.
   * 
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
   * The total number of entries returned.
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

