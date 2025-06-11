// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDirectoryResponseBodyDirectory } from "./CreateDirectoryResponseBodyDirectory";


export class CreateDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the directory.
   */
  directory?: CreateDirectoryResponseBodyDirectory;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADADC31D-90EE-5459-99B0-D83DF07769A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: CreateDirectoryResponseBodyDirectory,
      requestId: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

