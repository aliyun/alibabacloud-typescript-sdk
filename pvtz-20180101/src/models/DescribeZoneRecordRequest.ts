// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 5808
   */
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

