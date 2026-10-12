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
   * The list of labels for the experiment.
   */
  labels?: ExperimentLabel[];
  /**
   * @remarks
   * LatestRun
   */
  latestRun?: Run;
  /**
   * @remarks
   * The name of the experiment.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the experiment owner.
   */
  ownerId?: string;
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The default OSS storage path for TensorBoard logs of each trial in the experiment.
   */
  tensorboardLogUri?: string;
  /**
   * @remarks
   * The user ID of the experiment creator.
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

