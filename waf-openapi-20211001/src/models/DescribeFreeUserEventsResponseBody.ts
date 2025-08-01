// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFreeUserEventsResponseBodyEvent extends $dara.Model {
  /**
   * @remarks
   * The API.
   * 
   * @example
   * /api/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The attacker IP address.
   * 
   * @example
   * 104.234.140.**
   */
  attackIP?: string;
  /**
   * @remarks
   * The time at which the attack was launched. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1683703260
   */
  attackTime?: number;
  /**
   * @remarks
   * The domain name of the API.
   * 
   * @example
   * www.***.cn
   */
  domain?: string;
  /**
   * @remarks
   * The severity level of the security event. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The type of the security event.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported types of security events.
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
   * The security events on which basic detection is performed.
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

