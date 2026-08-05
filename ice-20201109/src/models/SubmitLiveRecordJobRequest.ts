// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveRecordJobRequestRecordOutput extends $dara.Model {
  /**
   * @remarks
   * The name of the storage space.
   * 
   * @example
   * imsbucket1
   */
  bucket?: string;
  /**
   * @remarks
   * The storage service endpoint.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The type of the storage address.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
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

export class SubmitLiveRecordJobRequestStreamInput extends $dara.Model {
  /**
   * @remarks
   * The type of the live stream address. Currently, only rtmp is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  type?: string;
  /**
   * @remarks
   * The live stream address.
   * 
   * @example
   * rtmp://example.com/live/stream1
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveRecordJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the recording task.
   * 
   * This parameter is required.
   * 
   * @example
   * live stream record 1
   */
  name?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * https://example.com/imsnotify
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The recording storage address.
   * 
   * This parameter is required.
   */
  recordOutput?: SubmitLiveRecordJobRequestRecordOutput;
  /**
   * @remarks
   * The live stream address.
   * 
   * This parameter is required.
   */
  streamInput?: SubmitLiveRecordJobRequestStreamInput;
  /**
   * @remarks
   * The recording template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 69e1f9fe-1e97-11ed-ba64-0c42a1b73d66
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      notifyUrl: 'NotifyUrl',
      recordOutput: 'RecordOutput',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyUrl: 'string',
      recordOutput: SubmitLiveRecordJobRequestRecordOutput,
      streamInput: SubmitLiveRecordJobRequestStreamInput,
      templateId: 'string',
    };
  }

  validate() {
    if(this.recordOutput && typeof (this.recordOutput as any).validate === 'function') {
      (this.recordOutput as any).validate();
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

