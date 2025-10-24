// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFpShotImportJobResponseBodyFpShotImportJobList extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the job fails.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2020-06-30T00:33:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was completed.
   * 
   * @example
   * 2020-06-30T00:34:02Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the text fingerprint library.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  /**
   * @remarks
   * The import configuration.
   * 
   * @example
   * ""
   */
  fpImportConfig?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 25bacf2824614bcf9273dc0744db****
   */
  id?: string;
  /**
   * @remarks
   * The input file.
   * 
   * @example
   * {\\"Bucket\\":\\"mts-example****\\",\\"Location\\":\\"oss-cn-shanghai\\",\\"Object\\":\\"test-0828/video/test.mp4\\"}
   */
  input?: string;
  /**
   * @remarks
   * The error message returned when the job fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the job is submitted.
   * 
   * @example
   * ebb51ee30f0b49aba959823fa991****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The processing information of the job.
   * 
   * @example
   * http://testbucket.oss-cn-shanghai.aliyuncs.com/932ajjw***32ssoj_importResult.txt
   */
  processMessage?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Processing: The job is in progress.
   * *   Fail: The job fails.
   * *   Success: The job is successful.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * 001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      fpDBId: 'FpDBId',
      fpImportConfig: 'FpImportConfig',
      id: 'Id',
      input: 'Input',
      message: 'Message',
      pipelineId: 'PipelineId',
      processMessage: 'ProcessMessage',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      fpDBId: 'string',
      fpImportConfig: 'string',
      id: 'string',
      input: 'string',
      message: 'string',
      pipelineId: 'string',
      processMessage: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotImportJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The jobs of importing text files to a text fingerprint library.
   */
  fpShotImportJobList?: ListFpShotImportJobResponseBodyFpShotImportJobList[];
  /**
   * @remarks
   * The job IDs that do not exist. This parameter is not returned if all specified job IDs exist.
   */
  nonExistIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotImportJobList: 'FpShotImportJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotImportJobList: { 'type': 'array', 'itemType': ListFpShotImportJobResponseBodyFpShotImportJobList },
      nonExistIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fpShotImportJobList)) {
      $dara.Model.validateArray(this.fpShotImportJobList);
    }
    if(Array.isArray(this.nonExistIds)) {
      $dara.Model.validateArray(this.nonExistIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

