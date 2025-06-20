// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBlockRequestApproveStrategyNodes extends $dara.Model {
  approveRuleType?: number;
  approveType?: number;
  id?: number;
  name?: string;
  nodeCode?: string;
  priorityOrder?: number;
  roleCode?: number;
  roleValue?: string[];
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      approveRuleType: 'ApproveRuleType',
      approveType: 'ApproveType',
      id: 'Id',
      name: 'Name',
      nodeCode: 'NodeCode',
      priorityOrder: 'PriorityOrder',
      roleCode: 'RoleCode',
      roleValue: 'RoleValue',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveRuleType: 'number',
      approveType: 'number',
      id: 'number',
      name: 'string',
      nodeCode: 'string',
      priorityOrder: 'number',
      roleCode: 'number',
      roleValue: { 'type': 'array', 'itemType': 'string' },
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roleValue)) {
      $dara.Model.validateArray(this.roleValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

