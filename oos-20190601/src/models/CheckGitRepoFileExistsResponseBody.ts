// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckGitRepoFileExistsResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  fileExists?: boolean;
  /**
   * @example
   * A5320F1D-92D9-44BB-A416-5FC525ED6D57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileExists: 'FileExists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileExists: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

