// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportUserFbAcIssueRequestFileList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class ReportUserFbAcIssueRequest extends $dara.Model {
  account?: string;
  clientVersion?: string;
  errorMsg?: string;
  fileList?: ReportUserFbAcIssueRequestFileList[];
  instanceId?: string;
  labels?: string;
  reservedA?: string;
  reservedB?: string;
  userEmail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientVersion: 'ClientVersion',
      errorMsg: 'ErrorMsg',
      fileList: 'FileList',
      instanceId: 'InstanceId',
      labels: 'Labels',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      userEmail: 'UserEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      clientVersion: 'string',
      errorMsg: 'string',
      fileList: { 'type': 'array', 'itemType': ReportUserFbAcIssueRequestFileList },
      instanceId: 'string',
      labels: 'string',
      reservedA: 'string',
      reservedB: 'string',
      userEmail: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

