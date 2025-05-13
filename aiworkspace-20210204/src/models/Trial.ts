// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Trial extends $dara.Model {
  accessibility?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: { [key: string]: any }[];
  name?: string;
  ownerId?: string;
  sourceId?: string;
  sourceType?: string;
  trialId?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      name: 'Name',
      ownerId: 'OwnerId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trialId: 'TrialId',
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
      labels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      name: 'string',
      ownerId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trialId: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

