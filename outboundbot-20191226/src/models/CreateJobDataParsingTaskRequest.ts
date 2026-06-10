// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobDataParsingTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b3865dc3-40fa-4afd-9fe4-dc7cda305a24
   */
  instanceId?: string;
  /**
   * @remarks
   * Path to the file that contains the job data.
   * 
   * > This value is the Folder parameter returned by the GetJobDataUploadParams operation.
   * 
   * This parameter is required.
   * 
   * @example
   * UPLOADED/JOB/024f8cf0-c842-4c01-b74b-c8667e4579c7/e5897675-91f0-4e53-8af8-7e1ce4f2c089_KDC HR- 外呼话术2- 外呼名单模板 - Copy.xlsx
   */
  jobFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobFilePath: 'JobFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobFilePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

