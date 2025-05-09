// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEntityIntoMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * maxcompute-table
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * category.123
   */
  metaCollectionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metaCollectionId: 'MetaCollectionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaCollectionId: 'string',
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

