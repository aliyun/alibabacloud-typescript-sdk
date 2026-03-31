// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSStatusResponseBodyDDoSStatus extends $dara.Model {
  /**
   * @remarks
   * The type of events that are triggered by DDoS attacks. Valid values:
   * 
   * *   defense: traffic scrubbing events.
   * *   blackhole: blackhole filtering events.
   * 
   * @example
   * blackhole
   */
  eventType?: string;
  /**
   * @remarks
   * Indicates whether DDoS attacks occur on specific domain names. Valid value:
   * 
   * *   **doing**: DDoS attacks occur on specific domain names.
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
   * Indicates whether DDoS attacks occur on specific domain names.
   */
  DDoSStatus?: DescribeDDoSStatusResponseBodyDDoSStatus[];
  /**
   * @remarks
   * The ID of the request.
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

