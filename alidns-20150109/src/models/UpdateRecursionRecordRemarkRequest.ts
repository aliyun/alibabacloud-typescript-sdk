// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. Generate a unique value for this parameter from your client. The value can contain only ASCII characters and must be no more than 64 characters long.
   * 
   * @example
   * e432232342423ew423
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the record.
   * 
   * This parameter is required.
   * 
   * @example
   * 173671468000010
   */
  recordId?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      recordId: 'RecordId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      recordId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

