// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveSnapshotJobResponseBodySnapshotOutput } from "./GetLiveSnapshotJobResponseBodySnapshotOutput";
import { GetLiveSnapshotJobResponseBodyStreamInput } from "./GetLiveSnapshotJobResponseBodyStreamInput";


export class GetLiveSnapshotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The snapshot callback URL.
   * 
   * @example
   * http://www.aliyun.com/snapshot/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The time when the file was created.
   * 
   * @example
   * 2022-02-02T22:22:22Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the job.
   */
  jobName?: string;
  /**
   * @remarks
   * The time when the file was last modified.
   * 
   * @example
   * 2022-02-02T22:22:22Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The naming format of the snapshot captured in overwrite mode.
   * 
   * @example
   * snapshot/{JobId}.jpg
   */
  overwriteFormat?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The naming format of the snapshot captured in time series mode.
   * 
   * @example
   * snapshot/{JobId}/{UnixTimestamp}.jpg
   */
  sequenceFormat?: string;
  /**
   * @remarks
   * The output information.
   */
  snapshotOutput?: GetLiveSnapshotJobResponseBodySnapshotOutput;
  /**
   * @remarks
   * The state of the job.
   * 
   * Valid values:
   * 
   * *   init: The job is not started.
   * *   paused: The job is paused.
   * *   started: The job is in progress.
   * 
   * @example
   * started
   */
  status?: string;
  /**
   * @remarks
   * The input information.
   */
  streamInput?: GetLiveSnapshotJobResponseBodyStreamInput;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287666****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   */
  templateName?: string;
  /**
   * @remarks
   * The interval between two adjacent snapshots.
   * 
   * @example
   * 5
   */
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      createTime: 'CreateTime',
      jobId: 'JobId',
      jobName: 'JobName',
      lastModified: 'LastModified',
      overwriteFormat: 'OverwriteFormat',
      requestId: 'RequestId',
      sequenceFormat: 'SequenceFormat',
      snapshotOutput: 'SnapshotOutput',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      createTime: 'string',
      jobId: 'string',
      jobName: 'string',
      lastModified: 'string',
      overwriteFormat: 'string',
      requestId: 'string',
      sequenceFormat: 'string',
      snapshotOutput: GetLiveSnapshotJobResponseBodySnapshotOutput,
      status: 'string',
      streamInput: GetLiveSnapshotJobResponseBodyStreamInput,
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
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

