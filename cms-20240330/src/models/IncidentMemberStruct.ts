// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentMemberStructAcknowledge extends $dara.Model {
  /**
   * @remarks
   * The confirmation level.
   * 
   * @example
   * 2
   */
  breakLevel?: string;
  /**
   * @remarks
   * The verification time.
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
   * The channel.
   * 
   * @example
   * dingtalk
   */
  channel?: string;
  /**
   * @remarks
   * The masked ID of the contact.
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
   * The description.
   * 
   * @example
   * 通知运维团队
   */
  description?: string;
  /**
   * @remarks
   * The ID of the event escalation.
   * 
   * @example
   * escalation-001
   */
  incidentEscalationId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 第一阶段
   */
  name?: string;
  /**
   * @remarks
   * The index of the escalation stage.
   * 
   * @example
   * 1
   */
  stageIndex?: string;
  /**
   * @remarks
   * The title.
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
   * The ID of the contact.
   * 
   * @example
   * group-001
   */
  contactId?: string;
  /**
   * @remarks
   * The name.
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
   * The structure of the confirmation information.
   */
  acknowledge?: IncidentMemberStructAcknowledge;
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * user-12345
   */
  contactId?: string;
  /**
   * @remarks
   * A list of contacts.
   */
  contacts?: IncidentMemberStructContacts[];
  /**
   * @remarks
   * Information about the escalation stage.
   */
  escalation?: IncidentMemberStructEscalation;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * The ID of the event member.
   * 
   * @example
   * member-001
   */
  incidentMemberId?: string;
  /**
   * @remarks
   * The scheduling group.
   */
  scheduleGroup?: IncidentMemberStructScheduleGroup;
  /**
   * @remarks
   * The time.
   * 
   * @example
   * 2025-10-08 10:18:58
   */
  time?: number;
  /**
   * @remarks
   * The user ID.
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

