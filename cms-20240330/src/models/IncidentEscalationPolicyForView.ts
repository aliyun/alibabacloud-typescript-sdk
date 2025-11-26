// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageForView } from "./IncidentEscalationStageForView";


export class IncidentEscalationPolicyForView extends $dara.Model {
  createTime?: string;
  description?: string;
  enable?: boolean;
  escalationStageList?: IncidentEscalationStageForView[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ownerType?: string;
  regionId?: string;
  source?: string;
  syncFromType?: string;
  updateTime?: string;
  userId?: string;
  uuid?: string;
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

