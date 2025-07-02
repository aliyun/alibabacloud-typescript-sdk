// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportUserFbIssueRequestFileList extends $dara.Model {
  fileMd5?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  ossUrl?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileMd5: 'FileMd5',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      ossUrl: 'OssUrl',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileMd5: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
      ossUrl: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

