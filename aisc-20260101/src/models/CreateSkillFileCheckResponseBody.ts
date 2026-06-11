// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillFileCheckResponseBodyDataUploadResults extends $dara.Model {
  errorMsg?: string;
  fileHash?: string;
  fileName?: string;
  identifyId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      fileHash: 'FileHash',
      fileName: 'FileName',
      identifyId: 'IdentifyId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      fileHash: 'string',
      fileName: 'string',
      identifyId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillFileCheckResponseBodyData extends $dara.Model {
  failCount?: number;
  rootTaskId?: string;
  successCount?: number;
  uploadResults?: CreateSkillFileCheckResponseBodyDataUploadResults[];
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      rootTaskId: 'RootTaskId',
      successCount: 'SuccessCount',
      uploadResults: 'UploadResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      rootTaskId: 'string',
      successCount: 'number',
      uploadResults: { 'type': 'array', 'itemType': CreateSkillFileCheckResponseBodyDataUploadResults },
    };
  }

  validate() {
    if(Array.isArray(this.uploadResults)) {
      $dara.Model.validateArray(this.uploadResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillFileCheckResponseBody extends $dara.Model {
  data?: CreateSkillFileCheckResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSkillFileCheckResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

