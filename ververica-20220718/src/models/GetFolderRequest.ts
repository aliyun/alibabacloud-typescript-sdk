// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The folder ID. If this parameter is left empty, the root folder is returned.
   * 
   * @example
   * 89097
   */
  folderId?: string;
  /**
   * @remarks
   * The folder type.
   * 
   * @example
   * DEVELOPMENT
   */
  rootType?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
      rootType: 'rootType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      rootType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

