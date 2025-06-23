// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDDoSEventsResponseBodyDDoSEvents } from "./DescribeDdoSeventsResponseBodyDdoSevents";


export class DescribeDDoSEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DDoS attack events.
   */
  DDoSEvents?: DescribeDDoSEventsResponseBodyDDoSEvents[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0CA72AF5-1795-4350-8C77-50A448A2F334
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned attack events.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      DDoSEvents: 'DDoSEvents',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSEvents: { 'type': 'array', 'itemType': DescribeDDoSEventsResponseBodyDDoSEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DDoSEvents)) {
      $dara.Model.validateArray(this.DDoSEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

