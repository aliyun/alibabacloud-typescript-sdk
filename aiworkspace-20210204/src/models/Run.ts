// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLabel } from "./RunLabel";
import { RunMetric } from "./RunMetric";
import { RunParam } from "./RunParam";


export class Run extends $dara.Model {
  /**
   * @remarks
   * The visibility.
   */
  accessibility?: string;
  /**
   * @remarks
   * The ID of the experiment that corresponds to the run.
   */
  experimentId?: string;
  /**
   * @remarks
   * The creation time.
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modified time.
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The labels added to the run.
   */
  labels?: RunLabel[];
  /**
   * @remarks
   * The metrics of the run.
   */
  metrics?: RunMetric[];
  /**
   * @remarks
   * Parameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner account.
   */
  ownerId?: string;
  /**
   * @remarks
   * The hyperparameters of the run.
   */
  params?: RunParam[];
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The run ID.
   */
  runId?: string;
  /**
   * @remarks
   * The ID of the source PAI workload.
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the source PAI workload.
   */
  sourceType?: string;
  /**
   * @remarks
   * The owner ID.
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the run belongs.
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

