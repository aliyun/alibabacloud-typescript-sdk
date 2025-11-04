// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of attacks.
   * >Notice: The parameter has been deprecated, please use the Attackips parameter.
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
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the business purposes of APIs.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The client that is attacked.
   * 
   * @example
   * Chrome
   */
  attackClient?: string;
  /**
   * @remarks
   * The information about the number of attacks. The value of this parameter is a JSON string that contains multiple parameters. Key indicates the timestamp in seconds, and Value indicates the number of attacks.
   * 
   * @example
   * {\\"1717498320\\":500,\\"1717498380\\":529,\\"1717498440\\":20,\\"1717498260\\":518,\\"1717498200\\":481,\\"1717498140\\":52}
   */
  attackCntInfo?: string;
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * @example
   * 104.234.140.33
   */
  attackIp?: string;
  /**
   * @remarks
   * The information about the attack source IP address. The value of this parameter is a JSON string that contains multiple parameters. The value includes the following parameters:
   * 
   * *   **ip**: the IP address
   * *   **country_id**: the country ID
   * *   **region_id**: the region ID
   * *   **cnt**: the number of attacks
   * 
   * @example
   * [{\\"ip\\":\\"72.*.*.119\\",\\"country_id\\":\\"US\\",\\"region_id\\":\\"\\",\\"cnt\\":\\"2100\\"}]
   */
  attackIpInfo?: string;
  /**
   * @remarks
   * The source IP addresses of the attacks.
   */
  attackIps?: string[];
  attackerList?: string[];
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683703260
   */
  endTs?: number;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * c82cb276847e9c96f9597d9f4b0cdcff
   */
  eventId?: string;
  /**
   * @remarks
   * The details of the event. The value of this parameter is a JSON string that contains multiple parameters. The value includes the following parameters:
   * 
   * *   **ip_info**: the information about the attack source IP address. This parameter corresponds to the **AttackIpInfo** response parameter.
   * *   **rule_id**: the ID of the rule corresponding to the event.
   * *   **rule_tag**: the information about the rule corresponding to the event.
   * 
   * @example
   * {}
   */
  eventInfo?: string;
  /**
   * @remarks
   * The severity level of the event. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * medium
   */
  eventLevel?: string;
  /**
   * @remarks
   * The type of the event.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported event types.
   * 
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @remarks
   * Indicates whether the API is followed. Valid values:
   * 
   * *   **1**: The API is followed.
   * *   **0**: The API is not followed.
   * 
   * @example
   * 0
   */
  follow?: number;
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
   * Notified
   */
  note?: string;
  /**
   * @remarks
   * The source of the event type. Valid values:
   * 
   * *   **custom**
   * *   **default**
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The country to which the attack source IP address belongs.
   * 
   * @example
   * US
   */
  remoteCountry?: string;
  /**
   * @remarks
   * The region to which the attack source IP address belongs.
   * 
   * @example
   * 110000
   */
  remoteRegion?: string;
  /**
   * @remarks
   * The sample API request. The value of this parameter is a JSON string that contains multiple parameters.
   * 
   * @example
   * {}
   */
  requestData?: string;
  /**
   * @remarks
   * The sample API response. The value of this parameter is a JSON string that contains multiple parameters.
   * 
   * @example
   * {}
   */
  responseData?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683648000
   */
  startTs?: number;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * *   **toBeConfirmed**
   * *   **confirmed**
   * *   **ignored**
   * 
   * @example
   * Ignore
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
   * The security events.
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

