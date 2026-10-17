// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExperimentLabel } from "./ExperimentLabel";
import { Run } from "./Run";


export class Experiment extends $dara.Model {
  /**
   * @remarks
   * The visibility of the experiment. PRIVATE indicates that the experiment is visible only to the creator and their Alibaba Cloud account. PUBLIC indicates that the experiment is visible to all users.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The default artifact output path for tasks associated with the experiment. Currently, only OSS paths are supported.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/test
   */
  artifactUri?: string;
  /**
   * @remarks
   * The experiment ID.
   * 
   * @example
   * exp-1zpfthdx******
   */
  experimentId?: string;
  /**
   * @remarks
   * The time when the experiment was created.
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the experiment was last modified.
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The list of experiment labels.
   */
  labels?: ExperimentLabel[];
  /**
   * @remarks
   * The information about the latest run associated with the experiment.
   */
  latestRun?: Run;
  /**
   * @remarks
   * The experiment name.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the experiment owner.
   * 
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C6835C5-A424-5AFB-ACC2-F1E3CA1ABF7C
   */
  requestId?: string;
  /**
   * @remarks
   * The default OSS storage path for TensorBoard logs of each trial in the experiment.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/tensorboard/
   */
  tensorboardLogUri?: string;
  /**
   * @remarks
   * The user ID of the experiment creator.
   * 
   * @example
   * 1557702098******
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the experiment belongs.
   * 
   * @example
   * 1517**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      artifactUri: 'ArtifactUri',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestRun: 'LatestRun',
      name: 'Name',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      tensorboardLogUri: 'TensorboardLogUri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      artifactUri: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': ExperimentLabel },
      latestRun: Run,
      name: 'string',
      ownerId: 'string',
      requestId: 'string',
      tensorboardLogUri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestRun && typeof (this.latestRun as any).validate === 'function') {
      (this.latestRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

