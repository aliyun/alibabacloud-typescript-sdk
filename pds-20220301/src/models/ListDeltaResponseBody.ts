// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class ListDeltaResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The information about the file.
   */
  file?: File;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 122fb09598ae66777c7040109a16f49381f6abe2
   */
  fileId?: string;
  /**
   * @remarks
   * The operation that is performed. Valid values: Valid values:
   * 
   * *   create
   * *   overwrite
   * *   delete
   * *   update
   * *   move
   * *   trash
   * *   restore
   * *   rename
   * 
   * @example
   * create
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'file',
      fileId: 'file_id',
      op: 'op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: File,
      fileId: 'string',
      op: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cursor of the incremental information.
   * 
   * @example
   * 1WQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  cursor?: string;
  /**
   * @remarks
   * Indicates whether more information is returned.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The incremental information returned.
   */
  items?: ListDeltaResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      hasMore: 'has_more',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListDeltaResponseBodyItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

