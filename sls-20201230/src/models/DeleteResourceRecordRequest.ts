// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the records to delete. Separate multiple IDs with commas (,). You can specify up to 200 IDs at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * record-001,record-002
   */
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

