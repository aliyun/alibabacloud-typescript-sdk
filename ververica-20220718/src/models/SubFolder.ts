// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubFolder extends $dara.Model {
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * a579aec9-1d5e-3382-9d65-9887ff6cfaff
   */
  folderId?: string;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The parent folder ID.
   * 
   * @example
   * 95c0787c-408f-4e1f-88ba-ef0a84a2c2ee
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
      name: 'name',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

