// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Download task ID.
   * 
   * @example
   * 202411194002618
   */
  downloadTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

