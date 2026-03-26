// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Trial extends $dara.Model {
  /**
   * @remarks
   * Accessibility
   */
  accessibility?: string;
  /**
   * @remarks
   * ExperimentId
   */
  experimentId?: string;
  /**
   * @remarks
   * GmtCreateTime
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * GmtModifiedTime
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Labels
   */
  labels?: { [key: string]: any }[];
  /**
   * @remarks
   * Name
   */
  name?: string;
  /**
   * @remarks
   * OwnerId
   */
  ownerId?: string;
  /**
   * @remarks
   * SourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * SourceType
   */
  sourceType?: string;
  /**
   * @remarks
   * TrialId
   */
  trialId?: string;
  /**
   * @remarks
   * UserId
   */
  userId?: string;
  /**
   * @remarks
   * WorkspaceId
   */
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

