// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderRequest extends $dara.Model {
  /**
   * @example
   * 89097
   */
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

