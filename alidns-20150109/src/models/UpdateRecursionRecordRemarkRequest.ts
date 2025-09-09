// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordRemarkRequest extends $dara.Model {
  /**
   * @example
   * e432232342423ew423
   */
  clientToken?: string;
  /**
   * @remarks
   * record id
   * 
   * @example
   * 173671468000010
   */
  recordId?: string;
  /**
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

