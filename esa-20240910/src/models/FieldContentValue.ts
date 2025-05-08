// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldContentValueFieldList } from "./FieldContentValueFieldList";


export class FieldContentValue extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the fields.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @remarks
   * The fields.
   */
  fieldList?: FieldContentValueFieldList[];
  static names(): { [key: string]: string } {
    return {
      sortOrder: 'SortOrder',
      fieldList: 'FieldList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sortOrder: 'number',
      fieldList: { 'type': 'array', 'itemType': FieldContentValueFieldList },
    };
  }

  validate() {
    if(Array.isArray(this.fieldList)) {
      $dara.Model.validateArray(this.fieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

