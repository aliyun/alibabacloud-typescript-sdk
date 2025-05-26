// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class SemanticQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The files.
   */
  files?: File[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C5C1E0F-D8B8-4DA0-8127-EC32C771****
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

