// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddToMetaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  categoryId?: number;
  /**
   * @remarks
   * The GUID of the metatable.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

