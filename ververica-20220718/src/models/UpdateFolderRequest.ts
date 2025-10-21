// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Folder } from "./Folder";


export class UpdateFolderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: Folder;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Folder,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

