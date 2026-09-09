// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceRecord } from "./ResourceRecord";


export class UpsertResourceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The list of records to write. A maximum of 200 records can be written at a time. If no ID is specified for a record, the server automatically generates one.
   * 
   * This parameter is required.
   */
  records?: ResourceRecord[];
  static names(): { [key: string]: string } {
    return {
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ResourceRecord },
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

