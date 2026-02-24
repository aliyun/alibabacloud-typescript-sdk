// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageForView } from "./IncidentEscalationStageForView";


export class IncidentEscalationPolicyForView extends $dara.Model {
  /**
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @example
   * workspace api monitor update test
   */
  description?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  escalationStageList?: IncidentEscalationStageForView[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "Critical-Alert-Escalation"
   */
  name?: string;
  /**
   * @example
   * "USER"
   */
  ownerType?: string;
  /**
   * @example
   * "cn-hangzhou"
   */
  regionId?: string;
  /**
   * @example
   * "MANUAL"
   */
  source?: string;
  /**
   * @example
   * "ARMS"
   */
  syncFromType?: string;
  /**
   * @example
   * 2025-04-15T02:02:50Z
   */
  updateTime?: string;
  /**
   * @example
   * "user-abc123"
   */
  userId?: string;
  /**
   * @example
   * "a1b2c3d4-e5f6-7890-1234-567890abcdef"
   */
  uuid?: string;
  /**
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

