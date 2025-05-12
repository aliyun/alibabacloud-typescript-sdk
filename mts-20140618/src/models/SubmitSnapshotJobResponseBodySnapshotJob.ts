// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSnapshotJobResponseBodySnapshotJobInput } from "./SubmitSnapshotJobResponseBodySnapshotJobInput";
import { SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult } from "./SubmitSnapshotJobResponseBodySnapshotJobMnsmessageResult";
import { SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig } from "./SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig";


export class SubmitSnapshotJobResponseBodySnapshotJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The number of snapshots that are captured.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2021-05-19T03:11:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * @example
   * f4e3b9ba9f3840c39d6e288056f0****
   */
  id?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: SubmitSnapshotJobResponseBodySnapshotJobInput;
  /**
   * @remarks
   * The message sent by MNS to notify the user of the job result.
   */
  MNSMessageResult?: SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the snapshot job is submitted.
   * 
   * @example
   * dd3dae411e704030b921e52698e5****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The snapshot configurations.
   */
  snapshotConfig?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig;
  /**
   * @remarks
   * The status of the snapshot job. Valid values:
   * 
   * *   **Submitted**: The job is submitted.
   * *   **Snapshoting**: The job is being processed.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * 
   * @example
   * Snapshoting
   */
  state?: string;
  /**
   * @remarks
   * The number of single images that are contained in the tiled image.
   * 
   * @example
   * 5
   */
  tileCount?: string;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      creationTime: 'CreationTime',
      id: 'Id',
      input: 'Input',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      snapshotConfig: 'SnapshotConfig',
      state: 'State',
      tileCount: 'TileCount',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      creationTime: 'string',
      id: 'string',
      input: SubmitSnapshotJobResponseBodySnapshotJobInput,
      MNSMessageResult: SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      snapshotConfig: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig,
      state: 'string',
      tileCount: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    if(this.snapshotConfig && typeof (this.snapshotConfig as any).validate === 'function') {
      (this.snapshotConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

