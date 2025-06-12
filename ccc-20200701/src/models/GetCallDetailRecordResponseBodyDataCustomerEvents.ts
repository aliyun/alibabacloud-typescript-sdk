// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence } from "./GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence";


export class GetCallDetailRecordResponseBodyDataCustomerEvents extends $dara.Model {
  /**
   * @example
   * 1332315****
   */
  customerId?: string;
  eventSequence?: GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence[];
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      eventSequence: 'EventSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence },
    };
  }

  validate() {
    if(Array.isArray(this.eventSequence)) {
      $dara.Model.validateArray(this.eventSequence);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

