// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaProducingJobsResponseBodyMediaProducingJobList extends $dara.Model {
  /**
   * @remarks
   * The template material parameters.
   * 
   * @example
   * {"Text1":"text","Text0":"text","Media1":"mediaId","Media0":"mediaId"}
   */
  clipsParam?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was complete. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-21T16:40:30Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the job was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-21T16:40:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the output file. Unit: seconds.
   * 
   * @example
   * 15.5
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the online editing job.
   * 
   * @example
   * ******8750b54e3c976a47da6f******
   */
  jobId?: string;
  /**
   * @remarks
   * The media asset ID of the output file.
   * 
   * @example
   * 0ce4ea70f52471edab61f7e7d6786302
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * http://your-bucket.oss-cn-shanghai.aliyuncs.com/your-video.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The returned message. Note: Pay attention to this parameter if the job failed.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2022-03-21T16:41:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * ******faa3b542f5a6135217e3******
   */
  projectId?: string;
  /**
   * @remarks
   * The job state.
   * 
   * @example
   * Sucess
   */
  status?: string;
  /**
   * @remarks
   * The ID of the online editing template.
   * 
   * @example
   * cb786a39c5d44cecb23d8c864facffc1
   */
  templateId?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format.
   * 
   * @example
   * {"key":"value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clipsParam: 'ClipsParam',
      code: 'Code',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      duration: 'Duration',
      jobId: 'JobId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      status: 'Status',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsParam: 'string',
      code: 'string',
      completeTime: 'string',
      createTime: 'string',
      duration: 'number',
      jobId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      message: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      status: 'string',
      templateId: 'string',
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

