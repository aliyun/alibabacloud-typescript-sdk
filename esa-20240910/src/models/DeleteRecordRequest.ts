// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

