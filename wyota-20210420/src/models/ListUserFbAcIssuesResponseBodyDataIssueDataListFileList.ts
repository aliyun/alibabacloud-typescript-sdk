// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserFbAcIssuesResponseBodyDataIssueDataListFileList extends $dara.Model {
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
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

