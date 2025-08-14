// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveTranscodeJobRequestStreamInput extends $dara.Model {
  /**
   * @remarks
   * The URL of the input stream.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://mydomain/app/stream1
   */
  inputUrl?: string;
  /**
   * @remarks
   * The type of the input stream. The value can only be rtmp.
   * 
   * This parameter is required.
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

export class UpdateLiveTranscodeJobRequestTimedConfig extends $dara.Model {
  /**
   * @remarks
   * The stop time of the transcoding job. Note: The time span between the stop time and the current time cannot exceed seven days.
   * 
   * @example
   * 2022-08-05T06:08:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the transcoding job. Note: The time span between the start time and the current time cannot exceed seven days.
   * 
   * @example
   * 2022-06-19T02:16:41Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTranscodeJobRequestTranscodeOutput extends $dara.Model {
  /**
   * @remarks
   * The streaming domain name of ApsaraVideo Live.
   * 
   * This parameter is required.
   * 
   * @example
   * mydomain
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the output stream. A value of LiveCenter indicates that the URL of the output stream is generated based on the domain name of ApsaraVideo Live. The value can only be LiveCenter.
   * 
   * This parameter is required.
   * 
   * @example
   * LiveCenter
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

export class UpdateLiveTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * mytest3
   */
  name?: string;
  /**
   * @remarks
   * The information about the input stream.
   */
  streamInput?: UpdateLiveTranscodeJobRequestStreamInput;
  /**
   * @remarks
   * The configuration of a timed transcoding job.
   */
  timedConfig?: UpdateLiveTranscodeJobRequestTimedConfig;
  /**
   * @remarks
   * The information about the transcoding output.
   */
  transcodeOutput?: UpdateLiveTranscodeJobRequestTranscodeOutput;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      streamInput: 'StreamInput',
      timedConfig: 'TimedConfig',
      transcodeOutput: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      streamInput: UpdateLiveTranscodeJobRequestStreamInput,
      timedConfig: UpdateLiveTranscodeJobRequestTimedConfig,
      transcodeOutput: UpdateLiveTranscodeJobRequestTranscodeOutput,
    };
  }

  validate() {
    if(this.streamInput && typeof (this.streamInput as any).validate === 'function') {
      (this.streamInput as any).validate();
    }
    if(this.timedConfig && typeof (this.timedConfig as any).validate === 'function') {
      (this.timedConfig as any).validate();
    }
    if(this.transcodeOutput && typeof (this.transcodeOutput as any).validate === 'function') {
      (this.transcodeOutput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

