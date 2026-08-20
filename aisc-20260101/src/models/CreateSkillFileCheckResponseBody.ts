// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillFileCheckResponseBodyDataUploadResults extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the file upload fails.
   * 
   * @example
   * Network error.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The SHA256 value of the uploaded file.
   * 
   * @example
   * 514f44ebed1d0c1df5e16a116080b64b
   */
  fileHash?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * test-file
   */
  fileName?: string;
  /**
   * @remarks
   * The unique ID of the uploaded file. You can use this ID to query the task result.
   * 
   * @example
   * 1824jcadg01bsl10b
   */
  identifyId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The number of files that failed to be uploaded.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The root task ID returned after the task is submitted.
   * 
   * @example
   * c6e7fa8a77df6e182ac3fcf1478ab83a
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The number of files that are uploaded successfully.
   * 
   * @example
   * 10
   */
  successCount?: number;
  /**
   * @remarks
   * The upload results.
   */
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
  /**
   * @remarks
   * The task creation result.
   */
  data?: CreateSkillFileCheckResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9FDE3D6F-26BD-5937-B0E5-8F47962B****
   */
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

