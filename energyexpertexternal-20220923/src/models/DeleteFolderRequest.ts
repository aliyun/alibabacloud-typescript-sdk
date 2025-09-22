// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFolderRequest extends $dara.Model {
  /**
   * @example
   * 53c0412ea5c343dcad324137622210b3
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

