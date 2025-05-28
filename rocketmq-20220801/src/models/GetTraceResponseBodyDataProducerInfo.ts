// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTraceResponseBodyDataProducerInfoRecords } from "./GetTraceResponseBodyDataProducerInfoRecords";


export class GetTraceResponseBodyDataProducerInfo extends $dara.Model {
  /**
   * @remarks
   * The production records.
   */
  records?: GetTraceResponseBodyDataProducerInfoRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetTraceResponseBodyDataProducerInfoRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

