// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EscalationRuleEscalationsContactGroupsByLevel extends $dara.Model {
  critical?: string[];
  error?: string[];
  info?: string[];
  resolve?: string[];
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      error: 'Error',
      info: 'Info',
      resolve: 'Resolve',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: { 'type': 'array', 'itemType': 'string' },
      error: { 'type': 'array', 'itemType': 'string' },
      info: { 'type': 'array', 'itemType': 'string' },
      resolve: { 'type': 'array', 'itemType': 'string' },
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.critical)) {
      $dara.Model.validateArray(this.critical);
    }
    if(Array.isArray(this.error)) {
      $dara.Model.validateArray(this.error);
    }
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    if(Array.isArray(this.resolve)) {
      $dara.Model.validateArray(this.resolve);
    }
    if(Array.isArray(this.warning)) {
      $dara.Model.validateArray(this.warning);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EscalationRuleEscalations extends $dara.Model {
  backupContactGroups?: string[];
  contactGroups?: string[];
  contactGroupsByLevel?: EscalationRuleEscalationsContactGroupsByLevel;
  escalateMin?: number;
  static names(): { [key: string]: string } {
    return {
      backupContactGroups: 'BackupContactGroups',
      contactGroups: 'ContactGroups',
      contactGroupsByLevel: 'ContactGroupsByLevel',
      escalateMin: 'EscalateMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupContactGroups: { 'type': 'array', 'itemType': 'string' },
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      contactGroupsByLevel: EscalationRuleEscalationsContactGroupsByLevel,
      escalateMin: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backupContactGroups)) {
      $dara.Model.validateArray(this.backupContactGroups);
    }
    if(Array.isArray(this.contactGroups)) {
      $dara.Model.validateArray(this.contactGroups);
    }
    if(this.contactGroupsByLevel && typeof (this.contactGroupsByLevel as any).validate === 'function') {
      (this.contactGroupsByLevel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EscalationRule extends $dara.Model {
  createTime?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  escalations?: EscalationRuleEscalations[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      escalations: 'Escalations',
      name: 'Name',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      escalations: { 'type': 'array', 'itemType': EscalationRuleEscalations },
      name: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

