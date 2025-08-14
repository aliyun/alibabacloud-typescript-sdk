// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveSnapshotJobRequestSnapshotOutput extends $dara.Model {
  /**
   * @remarks
   * The bucket of the snapshot output endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * testbucket
   */
  bucket?: string;
  /**
   * @remarks
   * The output endpoint of the snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The storage type of the snapshot. The value can only be oss.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLiveSnapshotJobRequestStreamInput extends $dara.Model {
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
  /**
   * @remarks
   * The URL of the input stream.
   * 
   * *   It cannot exceed 255 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://www.aliyun.com/stream
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

export class SubmitLiveSnapshotJobRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot callback URL.
   * 
   * *   It cannot exceed 255 characters in length.
   * *   Both HTTP and HTTPS URLs are supported.
   * 
   * @example
   * http://www.aliyun.com/snapshot/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * *   It cannot exceed 128 characters in length.
   * 
   * This parameter is required.
   */
  jobName?: string;
  /**
   * @remarks
   * The information about the output snapshot.
   * 
   * This parameter is required.
   */
  snapshotOutput?: SubmitLiveSnapshotJobRequestSnapshotOutput;
  /**
   * @remarks
   * The information about the input stream.
   * 
   * This parameter is required.
   */
  streamInput?: SubmitLiveSnapshotJobRequestStreamInput;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      jobName: 'JobName',
      snapshotOutput: 'SnapshotOutput',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      jobName: 'string',
      snapshotOutput: SubmitLiveSnapshotJobRequestSnapshotOutput,
      streamInput: SubmitLiveSnapshotJobRequestStreamInput,
      templateId: 'string',
    };
  }

  validate() {
    if(this.snapshotOutput && typeof (this.snapshotOutput as any).validate === 'function') {
      (this.snapshotOutput as any).validate();
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

