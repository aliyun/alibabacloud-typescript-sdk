// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentMemberStructAcknowledge extends $dara.Model {
  /**
   * @remarks
   * The acknowledgment level.
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
   * The contact ID (masked).
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
   * Notify the O&M team
   */
  description?: string;
  /**
   * @remarks
   * The incident escalation ID.
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
   * Stage 1
   */
  name?: string;
  /**
   * @remarks
   * The escalation stage index.
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
   * Alert escalated to the O&M team
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
   * The contact ID.
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
   * Night on-call group
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
   * The acknowledgment information struct.
   */
  acknowledge?: IncidentMemberStructAcknowledge;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * user-12345
   */
  contactId?: string;
  /**
   * @remarks
   * The contact list.
   */
  contacts?: IncidentMemberStructContacts[];
  /**
   * @remarks
   * The escalation stage information.
   */
  escalation?: IncidentMemberStructEscalation;
  /**
   * @remarks
   * The incident ID.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * The incident member ID.
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
   * 1794984221885
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

