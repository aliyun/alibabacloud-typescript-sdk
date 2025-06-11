// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDirectoryResponseBodyDirectory } from "./UpdateDirectoryResponseBodyDirectory";


export class UpdateDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the directory.
   */
  directory?: UpdateDirectoryResponseBodyDirectory;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B182C041-8C64-5F2F-A07B-FC67FAF89CF9
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
      directory: UpdateDirectoryResponseBodyDirectory,
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

