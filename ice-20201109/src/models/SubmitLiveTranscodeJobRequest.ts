// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveTranscodeJobRequestStreamInput extends $dara.Model {
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
   * The type of the input stream. Only RTMP is supported.
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

export class SubmitLiveTranscodeJobRequestTimedConfig extends $dara.Model {
  /**
   * @remarks
   * The stop time of the transcoding task.
   * >Notice: The interval between the stop time and the current time cannot exceed 7 days.</notice>. The time is in ISO 8601 format and must be in UTC (ending with Z).
   * 
   * @example
   * 2022-07-20T08:20:32Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the transcoding task.
   * >Notice: The interval between the start time and the current time cannot exceed 7 days.</notice>. The time is in ISO 8601 format and must be in UTC (ending with Z).
   * 
   * @example
   * 2022-02-21T00:00:00Z
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

export class SubmitLiveTranscodeJobRequestTranscodeOutput extends $dara.Model {
  /**
   * @remarks
   * The streaming domain name for ApsaraVideo Live.
   * 
   * @example
   * mydomain
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the output stream.
   * LiveCenter: the URL generated based on the ApsaraVideo Live domain name.
   * 
   * > Currently, only LiveCenter is supported.
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

export class SubmitLiveTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  name?: string;
  /**
   * @remarks
   * The start mode. Valid values:
   * 
   * - 0: Starts the task immediately.
   * - 1: Starts the task at a scheduled time.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The stream input information.
   * 
   * This parameter is required.
   */
  streamInput?: SubmitLiveTranscodeJobRequestStreamInput;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The configuration of the scheduled task.
   * This parameter is required when StartMode is set to 1.
   */
  timedConfig?: SubmitLiveTranscodeJobRequestTimedConfig;
  /**
   * @remarks
   * The transcoding output information.
   * 
   * This parameter is required.
   */
  transcodeOutput?: SubmitLiveTranscodeJobRequestTranscodeOutput;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      startMode: 'StartMode',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      timedConfig: 'TimedConfig',
      transcodeOutput: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      startMode: 'number',
      streamInput: SubmitLiveTranscodeJobRequestStreamInput,
      templateId: 'string',
      timedConfig: SubmitLiveTranscodeJobRequestTimedConfig,
      transcodeOutput: SubmitLiveTranscodeJobRequestTranscodeOutput,
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

