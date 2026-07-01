// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The source of the input media:
   * 
   * - If `Type` is `OSS`, set this parameter to the URL of the input file. You can use OSS (`oss://`), HTTP, or HTTPS URLs.
   * 
   * > You must first add the OSS bucket specified in the URL to Intelligent Media Management Service (IMS) by using [Storage Management](https://help.aliyun.com/document_detail/609918.html).
   * 
   * - If `Type` is `Media`, set this parameter to the media asset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the input media.
   * 
   * - `OSS`: The input is an OSS file.
   * 
   * - `Media`: The input is a media asset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobRequestScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f9c56
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job priority. A higher value means a higher priority. Valid values range from 1 to 10.
   * 
   * @example
   * 5
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * job-name
   */
  input?: SubmitMediaInfoJobRequestInput;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The scheduling settings.
   * 
   * @example
   * user-data
   */
  scheduleConfig?: SubmitMediaInfoJobRequestScheduleConfig;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      scheduleConfig: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitMediaInfoJobRequestInput,
      name: 'string',
      scheduleConfig: SubmitMediaInfoJobRequestScheduleConfig,
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

