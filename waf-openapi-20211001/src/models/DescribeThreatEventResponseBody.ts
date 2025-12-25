// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventResponseBodyThreatEvents extends $dara.Model {
  /**
   * @example
   * 100%
   */
  blockRate?: string;
  /**
   * @example
   * 1768406400000
   */
  endTime?: number;
  /**
   * @example
   * f439994c8ab39f84eced33490f0c4388
   */
  eventId?: string;
  /**
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @example
   * 3.3.3.3
   */
  eventSrc?: string;
  /**
   * @example
   * Event_InternalLoginWeakPasswd
   */
  eventTag?: string;
  /**
   * @example
   * test.aliyundemo.com-waf
   */
  eventTarget?: string;
  static names(): { [key: string]: string } {
    return {
      blockRate: 'BlockRate',
      endTime: 'EndTime',
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventSrc: 'EventSrc',
      eventTag: 'EventTag',
      eventTarget: 'EventTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRate: 'string',
      endTime: 'number',
      eventId: 'string',
      eventLevel: 'string',
      eventSrc: 'string',
      eventTag: 'string',
      eventTarget: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeThreatEventResponseBody extends $dara.Model {
  /**
   * @example
   * 98106632-6865-5600-A834-3D909***
   */
  requestId?: string;
  threatEvents?: DescribeThreatEventResponseBodyThreatEvents[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      threatEvents: 'ThreatEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      threatEvents: { 'type': 'array', 'itemType': DescribeThreatEventResponseBodyThreatEvents },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.threatEvents)) {
      $dara.Model.validateArray(this.threatEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

