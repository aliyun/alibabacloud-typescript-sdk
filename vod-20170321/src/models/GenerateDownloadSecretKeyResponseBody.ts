// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDownloadSecretKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The key file for secure download.
   * 
   * @example
   * ***
   */
  appEncryptKey?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E99B9BAD-7F9D-552B-A689-B72E92EA040E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appEncryptKey: 'AppEncryptKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEncryptKey: 'string',
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

