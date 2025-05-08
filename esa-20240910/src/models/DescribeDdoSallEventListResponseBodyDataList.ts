// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSAllEventListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The peak of volumetric attacks. Unit: bit/s.
   * 
   * @example
   * 800
   */
  bps?: number;
  coverage?: string;
  /**
   * @remarks
   * The peak of connection flood attacks. Unit: connections per seconds (CPS).
   * 
   * @example
   * 50
   */
  cps?: number;
  /**
   * @remarks
   * The time when the DDoS attack ends.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-12T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The attack event ID.
   * 
   * @example
   * web-cc_1
   */
  eventId?: string;
  eventResult?: string;
  /**
   * @remarks
   * The type of DDoS attacks that was queried. Valid values:
   * 
   * *   **web-cc**: web resource exhaustion attacks.
   * *   **cc**: connection flood attacks.
   * *   **traffic**: volumetric attacks.
   * 
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @remarks
   * The peak of volumetric attacks. Unit: packets per second (PPS).
   * 
   * @example
   * 12000
   */
  pps?: number;
  /**
   * @remarks
   * The peak QPS of web resource exhaustion attacks.
   * 
   * @example
   * 7692
   */
  qps?: number;
  /**
   * @remarks
   * The time when the DDoS attack starts.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-12T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The attack target.
   * 
   * @example
   * example.com
   */
  target?: string;
  /**
   * @remarks
   * The ID of the web resource exhaustion attack target.
   * 
   * @example
   * 000000000155****
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      coverage: 'Coverage',
      cps: 'Cps',
      endTime: 'EndTime',
      eventId: 'EventId',
      eventResult: 'EventResult',
      eventType: 'EventType',
      pps: 'Pps',
      qps: 'Qps',
      startTime: 'StartTime',
      target: 'Target',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      coverage: 'string',
      cps: 'number',
      endTime: 'string',
      eventId: 'string',
      eventResult: 'string',
      eventType: 'string',
      pps: 'number',
      qps: 'number',
      startTime: 'string',
      target: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

