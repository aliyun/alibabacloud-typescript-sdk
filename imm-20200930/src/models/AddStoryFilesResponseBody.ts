// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddStoryFilesResponseBodyFiles } from "./AddStoryFilesResponseBodyFiles";


export class AddStoryFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that were added.
   */
  files?: AddStoryFilesResponseBodyFiles[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6E93D6C9-5AC0-49F9-914D-E02678D3****
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
      files: { 'type': 'array', 'itemType': AddStoryFilesResponseBodyFiles },
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

