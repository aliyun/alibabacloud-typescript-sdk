// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos extends $dara.Model {
  /**
   * @remarks
   * The output stream URL.
   * 
   * @example
   * rtmp://mydomain/app/mytranscode1
   */
  outputUrl?: string;
  /**
   * @remarks
   * The output stream protocol type. Currently, only the RTMP protocol is supported.
   * 
   * @example
   * rtmp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputUrl: 'string',
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

export class GetLiveTranscodeJobResponseBodyJobOutputStream extends $dara.Model {
  /**
   * @remarks
   * The output stream information.
   */
  streamInfos?: GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfos: { 'type': 'array', 'itemType': GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos },
    };
  }

  validate() {
    if(Array.isArray(this.streamInfos)) {
      $dara.Model.validateArray(this.streamInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeJobResponseBodyJobStreamInput extends $dara.Model {
  /**
   * @remarks
   * The input stream URL.
   * 
   * @example
   * rtmp://mydomain/app/stream1
   */
  inputUrl?: string;
  /**
   * @remarks
   * The input stream type.
   * 
   * @example
   * rtmp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
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

export class GetLiveTranscodeJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-20T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the transcoding job.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the transcoding job.
   * 
   * @example
   * task1
   */
  name?: string;
  /**
   * @remarks
   * The output stream information.
   */
  outputStream?: GetLiveTranscodeJobResponseBodyJobOutputStream;
  /**
   * @remarks
   * The start mode.
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The job status. Valid values:
   * - 0: Not started.
   * - 1: Running.
   * - 2: Stopped.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The input stream information.
   */
  streamInput?: GetLiveTranscodeJobResponseBodyJobStreamInput;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * b6491d5b3e514b7d895d14b5453ea119
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * basic
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * @example
   * normal
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      outputStream: 'OutputStream',
      startMode: 'StartMode',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      outputStream: GetLiveTranscodeJobResponseBodyJobOutputStream,
      startMode: 'number',
      status: 'number',
      streamInput: GetLiveTranscodeJobResponseBodyJobStreamInput,
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(this.outputStream && typeof (this.outputStream as any).validate === 'function') {
      (this.outputStream as any).validate();
    }
    if(this.streamInput && typeof (this.streamInput as any).validate === 'function') {
      (this.streamInput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveTranscodeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding job information.
   */
  job?: GetLiveTranscodeJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetLiveTranscodeJobResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

