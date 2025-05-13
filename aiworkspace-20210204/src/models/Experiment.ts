// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExperimentLabel } from "./ExperimentLabel";
import { Run } from "./Run";


export class Experiment extends $dara.Model {
  accessibility?: string;
  artifactUri?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: ExperimentLabel[];
  latestRun?: Run;
  name?: string;
  ownerId?: string;
  requestId?: string;
  tensorboardLogUri?: string;
  userId?: string;
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

