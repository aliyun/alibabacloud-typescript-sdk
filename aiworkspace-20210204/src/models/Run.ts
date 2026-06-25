// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLabel } from "./RunLabel";
import { RunMetric } from "./RunMetric";
import { RunParam } from "./RunParam";


export class Run extends $dara.Model {
  /**
   * @remarks
   * The visibility of the run.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The ID of the experiment associated with the run.
   * 
   * @example
   * exp-1zpfthdx******
   */
  experimentId?: string;
  /**
   * @remarks
   * The time when the run was created.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the run was last modified.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The list of labels for the run.
   */
  labels?: RunLabel[];
  /**
   * @remarks
   * The list of metrics for the run.
   */
  metrics?: RunMetric[];
  /**
   * @remarks
   * Name
   * 
   * @example
   * testrun
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner\\"s root account.
   * 
   * @example
   * 163104*****3440
   */
  ownerId?: string;
  /**
   * @remarks
   * The list of hyperparameters for the run.
   */
  params?: RunParam[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The unique ID of the run.
   * 
   * @example
   * run-1qJhzJ2YXgX****
   */
  runId?: string;
  /**
   * @remarks
   * The ID of the source PAI workload.
   * 
   * @example
   * train9s0afvjkf
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the source PAI workload.
   * 
   * @example
   * TrainingService
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the owner.
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the run belongs.
   * 
   * @example
   * 145883
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      metrics: 'Metrics',
      name: 'Name',
      ownerId: 'OwnerId',
      params: 'Params',
      requestId: 'RequestId',
      runId: 'RunId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': RunLabel },
      metrics: { 'type': 'array', 'itemType': RunMetric },
      name: 'string',
      ownerId: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
      requestId: 'string',
      runId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

