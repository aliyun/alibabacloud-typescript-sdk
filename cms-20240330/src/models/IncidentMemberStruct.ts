// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentMemberStructAcknowledge extends $dara.Model {
  /**
   * @remarks
   * 确认级别。
   * 
   * @example
   * 2
   */
  breakLevel?: string;
  /**
   * @remarks
   * 验证时间。
   * 
   * @example
   * 1741234567890
   */
  verifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      breakLevel: 'breakLevel',
      verifyTime: 'verifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakLevel: 'string',
      verifyTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncidentMemberStructContacts extends $dara.Model {
  /**
   * @remarks
   * 通道。
   * 
   * @example
   * dingtalk
   */
  channel?: string;
  /**
   * @remarks
   * 联系人 ID（脱敏）
   * 
   * @example
   * user-12345
   */
  contactMask?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      contactMask: 'contactMask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      contactMask: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncidentMemberStructEscalation extends $dara.Model {
  /**
   * @remarks
   * 描述。
   * 
   * @example
   * 通知运维团队
   */
  description?: string;
  /**
   * @remarks
   * 事件升级ID。
   * 
   * @example
   * escalation-001
   */
  incidentEscalationId?: string;
  /**
   * @remarks
   * 名称。
   * 
   * @example
   * 第一阶段
   */
  name?: string;
  /**
   * @remarks
   * 升级阶段索引。
   * 
   * @example
   * 1
   */
  stageIndex?: string;
  /**
   * @remarks
   * 标题。
   * 
   * @example
   * 告警升级至运维团队
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      incidentEscalationId: 'incidentEscalationId',
      name: 'name',
      stageIndex: 'stageIndex',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      incidentEscalationId: 'string',
      name: 'string',
      stageIndex: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncidentMemberStructScheduleGroup extends $dara.Model {
  /**
   * @remarks
   * 联系人ID。
   * 
   * @example
   * group-001
   */
  contactId?: string;
  /**
   * @remarks
   * 名称。
   * 
   * @example
   * 夜间值班组
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncidentMemberStruct extends $dara.Model {
  /**
   * @remarks
   * 确认信息结构体。
   */
  acknowledge?: IncidentMemberStructAcknowledge;
  /**
   * @remarks
   * 联系人ID。
   * 
   * @example
   * user-12345
   */
  contactId?: string;
  /**
   * @remarks
   * 联系人列表。
   */
  contacts?: IncidentMemberStructContacts[];
  /**
   * @remarks
   * 升级阶段信息。
   */
  escalation?: IncidentMemberStructEscalation;
  /**
   * @remarks
   * 事件ID。
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * 事件成员ID。
   * 
   * @example
   * member-001
   */
  incidentMemberId?: string;
  /**
   * @remarks
   * 调度组。
   */
  scheduleGroup?: IncidentMemberStructScheduleGroup;
  /**
   * @remarks
   * 时间。
   * 
   * @example
   * 2025-10-08 10:18:58
   */
  time?: number;
  /**
   * @remarks
   * 用户ID。
   * 
   * @example
   * 4123456
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      acknowledge: 'acknowledge',
      contactId: 'contactId',
      contacts: 'contacts',
      escalation: 'escalation',
      incidentId: 'incidentId',
      incidentMemberId: 'incidentMemberId',
      scheduleGroup: 'scheduleGroup',
      time: 'time',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acknowledge: IncidentMemberStructAcknowledge,
      contactId: 'string',
      contacts: { 'type': 'array', 'itemType': IncidentMemberStructContacts },
      escalation: IncidentMemberStructEscalation,
      incidentId: 'string',
      incidentMemberId: 'string',
      scheduleGroup: IncidentMemberStructScheduleGroup,
      time: 'number',
      userId: 'number',
    };
  }

  validate() {
    if(this.acknowledge && typeof (this.acknowledge as any).validate === 'function') {
      (this.acknowledge as any).validate();
    }
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(this.escalation && typeof (this.escalation as any).validate === 'function') {
      (this.escalation as any).validate();
    }
    if(this.scheduleGroup && typeof (this.scheduleGroup as any).validate === 'function') {
      (this.scheduleGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

