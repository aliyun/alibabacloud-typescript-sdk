// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDirectoryResponseBodyDirectory } from "./GetDirectoryResponseBodyDirectory";


export class GetDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the directory.
   */
  directory?: GetDirectoryResponseBodyDirectory;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA6A9E4B-8A61-59E1-AA87-F61CA18258A3
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
      directory: GetDirectoryResponseBodyDirectory,
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

