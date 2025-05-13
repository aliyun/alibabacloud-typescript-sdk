// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentMemberStructAcknowledge } from "./IncidentMemberStructAcknowledge";
import { IncidentMemberStructContacts } from "./IncidentMemberStructContacts";
import { IncidentMemberStructEscalation } from "./IncidentMemberStructEscalation";
import { IncidentMemberStructScheduleGroup } from "./IncidentMemberStructScheduleGroup";


export class IncidentMemberStruct extends $dara.Model {
  acknowledge?: IncidentMemberStructAcknowledge;
  contactId?: string;
  contacts?: IncidentMemberStructContacts[];
  escalation?: IncidentMemberStructEscalation;
  incidentId?: string;
  incidentMemberId?: string;
  scheduleGroup?: IncidentMemberStructScheduleGroup;
  time?: number;
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

