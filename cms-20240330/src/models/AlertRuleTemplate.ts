// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleTemplate extends $dara.Model {
  alertType?: string;
  applyCount?: number;
  bizType?: string;
  datasource?: string;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  isSystem?: number;
  labels?: string;
  ruleConfigs?: string;
  scenes?: string;
  schemaVersion?: string;
  sourceType?: string;
  status?: number;
  subType?: string;
  templateName?: string;
  userId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'alertType',
      applyCount: 'applyCount',
      bizType: 'bizType',
      datasource: 'datasource',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      isSystem: 'isSystem',
      labels: 'labels',
      ruleConfigs: 'ruleConfigs',
      scenes: 'scenes',
      schemaVersion: 'schemaVersion',
      sourceType: 'sourceType',
      status: 'status',
      subType: 'subType',
      templateName: 'templateName',
      userId: 'userId',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      applyCount: 'number',
      bizType: 'string',
      datasource: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      isSystem: 'number',
      labels: 'string',
      ruleConfigs: 'string',
      scenes: 'string',
      schemaVersion: 'string',
      sourceType: 'string',
      status: 'number',
      subType: 'string',
      templateName: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

