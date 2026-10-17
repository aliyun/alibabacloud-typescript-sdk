// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Trial extends $dara.Model {
  /**
   * @remarks
   * Accessibility
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * ExperimentId
   * 
   * @example
   * exp-1zpfthdx******
   */
  experimentId?: string;
  /**
   * @remarks
   * GmtCreateTime
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * GmtModifiedTime
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
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
   * 
   * @example
   * testrun
   */
  name?: string;
  /**
   * @remarks
   * OwnerId
   * 
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @remarks
   * SourceId
   * 
   * @example
   * train9s0afvjkf
   */
  sourceId?: string;
  /**
   * @remarks
   * SourceType
   * 
   * @example
   * TrainingService
   */
  sourceType?: string;
  /**
   * @remarks
   * TrialId
   * 
   * @example
   * trl-v0fw9a0sd8f9af
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

