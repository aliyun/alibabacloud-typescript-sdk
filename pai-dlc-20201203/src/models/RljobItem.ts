// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLJobModelConfig } from "./RljobModelConfig";
import { RLJobSettings } from "./RljobSettings";


export class RLJobItem extends $dara.Model {
  /**
   * @remarks
   * The algorithm.
   * 
   * @example
   * grpo
   */
  algorithm?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * swebench-lite-grpo-qwen27b
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time in UTC RFC 3339 format.
   * 
   * @example
   * 2026-09-08T07:00:00Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The end time in the UTC RFC 3339 format. This is consistent with the DLC GetJob operation. The job end time is used first. If the job end time is missing, the stop time is used. If both are missing, this field is not returned. The same value rule applies to sorting.
   * 
   * @example
   * 2026-09-08T09:30:00Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The start time in UTC RFC 3339 format.
   * 
   * @example
   * 2026-09-08T07:05:00Z
   */
  gmtRunningTime?: string;
  /**
   * @remarks
   * The RLJob ID. This field is required and always returned.
   * 
   * @example
   * dlc5yfk7eyg95lac
   */
  jobId?: string;
  /**
   * @remarks
   * The job type. Valid value: Train.
   * 
   * @example
   * Train
   */
  jobType?: string;
  /**
   * @remarks
   * The model names and in-container paths associated with the job.
   */
  models?: RLJobModelConfig[];
  /**
   * @remarks
   * The reason code. This is an independent field and must not be parsed from the ReasonMessage text.
   * 
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @remarks
   * The reason description.
   * 
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The job-level resource group or quota ID persisted in the current job record. This is consistent with DLC GetJob and GetRLJob, and is not the original request value. It is returned from the job record even if the execution snapshot is unreadable.
   * 
   * @example
   * dlc-quota
   */
  resourceId?: string;
  /**
   * @remarks
   * The job configuration summary. Uses a supported subset of DLC JobSettings fields. The list returns only the current job tags in Settings.Tags. For the complete configuration, call GetRLJob.
   * 
   * @example
   * {"Tags":{"rls.scene":"code-rl"}}
   */
  settings?: RLJobSettings;
  /**
   * @remarks
   * The job status. Uses the same vocabulary as DLC ValidJobStatus: Creating, Queuing, Running, Stopping, Succeeded, Failed, or Stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The substatus. Examples include Evaluating, WritingResults, EarlyStopped, Validating, Deleting, and Archived.
   * 
   * @example
   * Evaluating
   */
  subStatus?: string;
  /**
   * @remarks
   * The training and sampling execution mode that takes effect for the job. Valid values: ColocateSync and DisaggregateAsync.
   * 
   * @example
   * ColocateSync
   */
  trainerMode?: string;
  /**
   * @remarks
   * The ID of the user who submitted the job. This has the same meaning as UserId in DLC.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-20210126170216-mtl37ge7gkvdz
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtRunningTime: 'GmtRunningTime',
      jobId: 'JobId',
      jobType: 'JobType',
      models: 'Models',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceId: 'ResourceId',
      settings: 'Settings',
      status: 'Status',
      subStatus: 'SubStatus',
      trainerMode: 'TrainerMode',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtRunningTime: 'string',
      jobId: 'string',
      jobType: 'string',
      models: { 'type': 'array', 'itemType': RLJobModelConfig },
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceId: 'string',
      settings: RLJobSettings,
      status: 'string',
      subStatus: 'string',
      trainerMode: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

