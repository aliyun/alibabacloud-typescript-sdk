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

