// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of attacks.
   * 
   * @example
   * 345
   */
  attackCnt?: string;
  /**
   * @remarks
   * The attacker list.
   */
  attackerList?: string[];
  /**
   * @remarks
   * The detailed information about the security event. The value is a string converted from a JSON object constructed by a series of parameters.
   * 
   * @example
   * {\\"location\\":[\\"FR\\",\\"CN\\"],\\"location_type\\":\\"country\\"}
   */
  detailValue?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1683703260
   */
  endTs?: string;
  /**
   * @remarks
   * The ID of the API security event.
   * 
   * @example
   * 18ba94fea9***e66ba0557b7b91
   */
  eventId?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - **high**: high risk.
   * - **medium**: medium risk.
   * - **low**: low risk.
   * 
   * @example
   * low
   */
  eventLevel?: string;
  /**
   * @remarks
   * The dimension of the security event. Valid values:
   * - **ip** (default): IP security event.
   * 
   * - **account**: account security event.
   * 
   * @example
   * ip
   */
  eventScope?: string;
  /**
   * @remarks
   * The event type.
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported event types.
   * 
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * already confirmed.
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
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1683648000
   */
  startTs?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - **toBeConfirmed**: to be confirmed.
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
      attackCnt: 'AttackCnt',
      attackerList: 'AttackerList',
      detailValue: 'DetailValue',
      endTs: 'EndTs',
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventScope: 'EventScope',
      eventTag: 'EventTag',
      note: 'Note',
      origin: 'Origin',
      requestId: 'RequestId',
      startTs: 'StartTs',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackCnt: 'string',
      attackerList: { 'type': 'array', 'itemType': 'string' },
      detailValue: 'string',
      endTs: 'string',
      eventId: 'string',
      eventLevel: 'string',
      eventScope: 'string',
      eventTag: 'string',
      note: 'string',
      origin: 'string',
      requestId: 'string',
      startTs: 'string',
      userStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackerList)) {
      $dara.Model.validateArray(this.attackerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

