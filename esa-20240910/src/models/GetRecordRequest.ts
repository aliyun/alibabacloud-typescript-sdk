// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The record ID, which can be obtained by calling [ListRecords](https://help.aliyun.com/document_detail/2850265.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
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

