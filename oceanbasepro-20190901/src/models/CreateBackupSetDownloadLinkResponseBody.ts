// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupSetDownloadLinkResponseBody extends $dara.Model {
  /**
   * @example
   * 10000***67
   */
  downloadTaskId?: number;
  /**
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'number',
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

