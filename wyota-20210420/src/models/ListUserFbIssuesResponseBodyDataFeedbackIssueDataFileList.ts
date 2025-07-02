// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList extends $dara.Model {
  fileMd5?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileMd5: 'FileMd5',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileMd5: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
      ossUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

