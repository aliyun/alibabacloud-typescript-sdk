// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageForView } from "./IncidentEscalationStageForView";


export class IncidentEscalationPolicyForView extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * workspace api monitor update test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of escalation stages.
   */
  escalationStageList?: IncidentEscalationStageForView[];
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * "Critical-Alert-Escalation"
   */
  name?: string;
  /**
   * @remarks
   * The owner type.
   * 
   * - **USER**: User. This is the default value.
   * 
   * - **APP**: Application.
   * 
   * @example
   * "USER"
   */
  ownerType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * "cn-hangzhou"
   */
  regionId?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * "MANUAL"
   */
  source?: string;
  /**
   * @remarks
   * The source type of the synchronization policy.
   * 
   * @example
   * "ARMS"
   */
  syncFromType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-04-15T02:02:50Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * "user-abc123"
   */
  userId?: string;
  /**
   * @remarks
   * The globally unique identifier.
   * 
   * @example
   * "a1b2c3d4-e5f6-7890-1234-567890abcdef"
   */
  uuid?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * "ws-xyz789"
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      enable: 'enable',
      escalationStageList: 'escalationStageList',
      name: 'name',
      ownerType: 'ownerType',
      regionId: 'regionId',
      source: 'source',
      syncFromType: 'syncFromType',
      updateTime: 'updateTime',
      userId: 'userId',
      uuid: 'uuid',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      enable: 'boolean',
      escalationStageList: { 'type': 'array', 'itemType': IncidentEscalationStageForView },
      name: 'string',
      ownerType: 'string',
      regionId: 'string',
      source: 'string',
      syncFromType: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.escalationStageList)) {
      $dara.Model.validateArray(this.escalationStageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

