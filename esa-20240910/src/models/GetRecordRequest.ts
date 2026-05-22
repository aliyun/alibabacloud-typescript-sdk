// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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

