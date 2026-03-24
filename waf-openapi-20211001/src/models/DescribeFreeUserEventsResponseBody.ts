// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFreeUserEventsResponseBodyEvent extends $dara.Model {
  /**
   * @remarks
   * The API path.
   * 
   * @example
   * /api/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The attack IP address.
   * 
   * @example
   * 104.234.140.**
   */
  attackIP?: string;
  /**
   * @remarks
   * The time of the attack. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1683703260
   */
  attackTime?: number;
  /**
   * @remarks
   * The domain name to which the API belongs.
   * 
   * @example
   * www.***.cn
   */
  domain?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * 
   * - **high**: high risk.
   * 
   * - **medium**: medium risk.
   * 
   * - **low**: low risk.
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event type.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to obtain the supported event types.
   * 
   * @example
   * Event_DataTraverse
   */
  eventTag?: string;
  static names(): { [key: string]: string } {
    return {
      apiFormat: 'ApiFormat',
      attackIP: 'AttackIP',
      attackTime: 'AttackTime',
      domain: 'Domain',
      eventLevel: 'EventLevel',
      eventTag: 'EventTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiFormat: 'string',
      attackIP: 'string',
      attackTime: 'number',
      domain: 'string',
      eventLevel: 'string',
      eventTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFreeUserEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of security events detected by the basic scan.
   */
  event?: DescribeFreeUserEventsResponseBodyEvent[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A2DF88D-90C2-56E9-B8D5-36BB9646791C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: { 'type': 'array', 'itemType': DescribeFreeUserEventsResponseBodyEvent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.event)) {
      $dara.Model.validateArray(this.event);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

