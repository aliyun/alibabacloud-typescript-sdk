// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchMediaProducingJobResponseBodyEditingBatchJobSubJobList extends $dara.Model {
  duration?: number;
  /**
   * @remarks
   * The error code that is returned if the subjob failed. This parameter is not returned if the subjob is successful.
   * 
   * @example
   * InvalidMaterial.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the subjob failed. This parameter is not returned if the subjob is successful.
   * 
   * @example
   * The specified clips id not found:["****30d0b5e871eebb2ff7f6c75a****"]
   */
  errorMessage?: string;
  /**
   * @remarks
   * The subjob ID.
   * 
   * @example
   * ****8e81933d44e3ae69e2f81485****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the output media asset.
   * 
   * @example
   * ****1470b11171ee9d19e7e6c66a****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * http:/xxx.oss-cn-shanghai.aliyuncs.com/xxx_0.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * ****7cc47fe04eaa81bd853acb6a****
   */
  projectId?: string;
  /**
   * @remarks
   * The subjob state. Valid values:
   * 
   * Init: The subjob is initialized.
   * 
   * Processing: The subjob is in progress.
   * 
   * Success: The subjob is successful.
   * 
   * Failed: The subjob failed.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      projectId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

