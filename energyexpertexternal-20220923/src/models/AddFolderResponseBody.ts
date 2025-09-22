// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FolderItem } from "./FolderItem";


export class AddFolderResponseBody extends $dara.Model {
  data?: FolderItem;
  /**
   * @example
   * E38E561C-B996-0E19-8DBC-A218AAE17FBA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: FolderItem,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

