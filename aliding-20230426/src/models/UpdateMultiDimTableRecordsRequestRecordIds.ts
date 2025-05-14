// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultiDimTableRecordsRequestRecordIds extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HyDGtSj
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
    };
  }

  validate() {
    if(this.fields) {
      $dara.Model.validateMap(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

