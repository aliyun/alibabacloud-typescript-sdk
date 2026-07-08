// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSStatusResponseBodyDDoSStatus extends $dara.Model {
  /**
   * @remarks
   * The event type. Valid values:
   * - defense: DDoS scrubbing events.
   * - blackhole: DDoS blackhole filtering events.
   * 
   * @example
   * blackhole
   */
  eventType?: string;
  /**
   * @remarks
   * The DDoS status. Valid values:
   * - **doing**: under DDoS attack.
   * 
   * @example
   * doing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current DDoS status.
   */
  DDoSStatus?: DescribeDDoSStatusResponseBodyDDoSStatus[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSStatus: 'DDoSStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSStatus: { 'type': 'array', 'itemType': DescribeDDoSStatusResponseBodyDDoSStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DDoSStatus)) {
      $dara.Model.validateArray(this.DDoSStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

