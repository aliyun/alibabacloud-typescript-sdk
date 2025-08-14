// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPackageJobResponseBodyPackageJobInputsInput extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * *   OSS: an Object Storage Service (OSS) object.
   * *   Media: a media asset.
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

export class GetPackageJobResponseBodyPackageJobInputs extends $dara.Model {
  /**
   * @remarks
   * The information about the input stream file.
   */
  input?: GetPackageJobResponseBodyPackageJobInputsInput;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: GetPackageJobResponseBodyPackageJobInputsInput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageJobResponseBodyPackageJobOutput extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, the ID of a media asset is returned.
   * 
   * @example
   * oss://bucket/path/to/video.m3u8
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
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

export class GetPackageJobResponseBodyPackageJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T11:34:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T11:44:05Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input of the job.
   */
  inputs?: GetPackageJobResponseBodyPackageJobInputs[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  jobId?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * Resource content bad.
   */
  message?: string;
  /**
   * @remarks
   * The time when the job was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T11:44:05Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: GetPackageJobResponseBodyPackageJobOutput;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/output.m3u8
   */
  outputUrl?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * 36f3fee40aa047c0b067d0fb85edc12b
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 1 to 10. The greater the value, the higher the priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The state of the job.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T11:34:05Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The source of the job. Valid values:
   * 
   * *   API
   * *   WorkFlow
   * *   Console
   * 
   * @example
   * API
   */
  triggerSource?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"param": "value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputs: 'Inputs',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      outputUrl: 'OutputUrl',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      status: 'Status',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      inputs: { 'type': 'array', 'itemType': GetPackageJobResponseBodyPackageJobInputs },
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetPackageJobResponseBodyPackageJobOutput,
      outputUrl: 'string',
      pipelineId: 'string',
      priority: 'number',
      status: 'string',
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the packaging job.
   */
  packageJob?: GetPackageJobResponseBodyPackageJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      packageJob: 'PackageJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageJob: GetPackageJobResponseBodyPackageJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.packageJob && typeof (this.packageJob as any).validate === 'function') {
      (this.packageJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

