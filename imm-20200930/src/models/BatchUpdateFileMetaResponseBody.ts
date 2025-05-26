// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchUpdateFileMetaResponseBodyFiles } from "./BatchUpdateFileMetaResponseBodyFiles";


export class BatchUpdateFileMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The files whose metadata was updated.
   */
  files?: BatchUpdateFileMetaResponseBodyFiles[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5BF215E-3237-0852-B9C6-F233D44A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': BatchUpdateFileMetaResponseBodyFiles },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

