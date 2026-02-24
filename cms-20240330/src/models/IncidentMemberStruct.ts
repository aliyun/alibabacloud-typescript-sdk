// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentMemberStructAcknowledge extends $dara.Model {
  /**
   * @remarks
   * Acknowledgement level.
   * 
   * @example
   * 2
   */
  breakLevel?: string;
  /**
   * @remarks
   * Verification time.
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
   * Channel.
   * 
   * @example
   * dingtalk
   */
  channel?: string;
  /**
   * @remarks
   * Contact ID (masked).
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
   * Description.
   * 
   * @example
   * Notify the operations team.
   */
  description?: string;
  /**
   * @remarks
   * Event Escalation ID.
   * 
   * @example
   * escalation-001
   */
  incidentEscalationId?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * Phase one.
   */
  name?: string;
  /**
   * @remarks
   * Escalation phase index.
   * 
   * @example
   * 1
   */
  stageIndex?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * Alert escalated to the operations team.
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
   * Contact ID.
   * 
   * @example
   * group-001
   */
  contactId?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * Night shift duty team.
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
   * Acknowledgement Information Structure.
   */
  acknowledge?: IncidentMemberStructAcknowledge;
  /**
   * @remarks
   * Contact ID.
   * 
   * @example
   * user-12345
   */
  contactId?: string;
  /**
   * @remarks
   * Contact list.
   */
  contacts?: IncidentMemberStructContacts[];
  /**
   * @remarks
   * Escalation phase information.
   */
  escalation?: IncidentMemberStructEscalation;
  /**
   * @remarks
   * Incident ID.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * Event Member ID.
   * 
   * @example
   * member-001
   */
  incidentMemberId?: string;
  /**
   * @remarks
   * Schedule group.
   */
  scheduleGroup?: IncidentMemberStructScheduleGroup;
  /**
   * @remarks
   * Time.
   * 
   * @example
   * 2025-10-08 10:18:58
   */
  time?: number;
  /**
   * @remarks
   * User ID.
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

