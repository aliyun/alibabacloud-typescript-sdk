// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 345
   */
  attackCnt?: string;
  attackerList?: string[];
  /**
   * @example
   * {\\"location\\":[\\"FR\\",\\"CN\\"],\\"location_type\\":\\"country\\"}
   */
  detailValue?: string;
  /**
   * @example
   * 1683703260
   */
  endTs?: string;
  /**
   * @example
   * 18ba94fea9***e66ba0557b7b91
   */
  eventId?: string;
  /**
   * @example
   * low
   */
  eventLevel?: string;
  /**
   * @example
   * ip
   */
  eventScope?: string;
  /**
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @example
   * already confirmed.
   */
  note?: string;
  /**
   * @example
   * custom
   */
  origin?: string;
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @example
   * 1683648000
   */
  startTs?: string;
  /**
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

