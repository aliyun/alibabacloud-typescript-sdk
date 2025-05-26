// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class BatchGetFileMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata returned.
   */
  files?: File[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F84C6D9-5AC0-49F9-914D-F02678E3****
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
      files: { 'type': 'array', 'itemType': File },
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

