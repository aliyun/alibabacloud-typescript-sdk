// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPackageJobsResponseBodyPackageJobListPackageJobsInputsInput extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, set this parameter to the ID of a media asset.
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

export class ListPackageJobsResponseBodyPackageJobListPackageJobsInputs extends $dara.Model {
  /**
   * @remarks
   * The information about the input stream file.
   */
  input?: ListPackageJobsResponseBodyPackageJobListPackageJobsInputsInput;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: ListPackageJobsResponseBodyPackageJobListPackageJobsInputsInput,
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

export class ListPackageJobsResponseBodyPackageJobListPackageJobsOutput extends $dara.Model {
  /**
   * @remarks
   * The media object.
   * 
   * *   If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported.
   * *   If Type is set to Media, set this parameter to the ID of a media asset.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
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

export class ListPackageJobsResponseBodyPackageJobListPackageJobs extends $dara.Model {
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
   * 2022-07-07T14:00:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-07T15:00:32Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input of the job.
   */
  inputs?: ListPackageJobsResponseBodyPackageJobListPackageJobsInputs[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 7b38a5d86f1e47838927b6e7ccb11cbe
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
   * 2022-07-07T15:00:32Z
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
  output?: ListPackageJobsResponseBodyPackageJobListPackageJobsOutput;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue that is used to run the job.
   * 
   * @example
   * 5b40833e4c3e4d4e95a866abb9a42510
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 1 to 10. The greater the value, the higher the priority. Default value: 6.
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
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-07T14:00:32Z
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
      inputs: { 'type': 'array', 'itemType': ListPackageJobsResponseBodyPackageJobListPackageJobsInputs },
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: ListPackageJobsResponseBodyPackageJobListPackageJobsOutput,
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

export class ListPackageJobsResponseBodyPackageJobList extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. The token of the next page is returned after you call this operation for the first time.
   * 
   * @example
   * 019daf5780f74831b0e1a767c9f1c178
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The list of packaging jobs.
   */
  packageJobs?: ListPackageJobsResponseBodyPackageJobListPackageJobs[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      packageJobs: 'PackageJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      packageJobs: { 'type': 'array', 'itemType': ListPackageJobsResponseBodyPackageJobListPackageJobs },
    };
  }

  validate() {
    if(Array.isArray(this.packageJobs)) {
      $dara.Model.validateArray(this.packageJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of packaging jobs.
   */
  packageJobList?: ListPackageJobsResponseBodyPackageJobList;
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
      packageJobList: 'PackageJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageJobList: ListPackageJobsResponseBodyPackageJobList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.packageJobList && typeof (this.packageJobList as any).validate === 'function') {
      (this.packageJobList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

