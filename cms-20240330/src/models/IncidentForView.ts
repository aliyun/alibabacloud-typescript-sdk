// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationPolicyForView } from "./IncidentEscalationPolicyForView";
import { ContactForIncidentView } from "./ContactForIncidentView";
import { IncidentResponsePlanForView } from "./IncidentResponsePlanForView";
import { EventResourceForIncidentView } from "./EventResourceForIncidentView";


export class IncidentForView extends $dara.Model {
  content?: string;
  escalations?: IncidentEscalationPolicyForView[];
  /**
   * @example
   * "group-123456"
   */
  groupUuid?: string;
  groupingKeys?: { [key: string]: string };
  /**
   * @example
   * "incident-abc123"
   */
  incidentId?: string;
  notifyStrategyName?: string;
  /**
   * @example
   * "notify-strategy-789"
   */
  notifyStrategyUuid?: string;
  operator?: ContactForIncidentView;
  owners?: ContactForIncidentView[];
  participants?: ContactForIncidentView[];
  plan?: IncidentResponsePlanForView;
  relatedResources?: EventResourceForIncidentView[];
  /**
   * @example
   * "Network"
   */
  rootCauseCategory?: string;
  /**
   * @example
   * "Critical"
   */
  severity?: string;
  solution?: string;
  /**
   * @example
   * "Open"
   */
  state?: string;
  /**
   * @example
   * "P1-Alert-Notification"
   */
  subscriptionName?: string;
  /**
   * @example
   * "subscription-abc"
   */
  subscriptionUuid?: string;
  /**
   * @example
   * 1743876000000
   */
  time?: number;
  title?: string;
  /**
   * @example
   * "user-abc123"
   */
  userId?: string;
  /**
   * @example
   * "ws-xyz789"
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      escalations: 'escalations',
      groupUuid: 'groupUuid',
      groupingKeys: 'groupingKeys',
      incidentId: 'incidentId',
      notifyStrategyName: 'notifyStrategyName',
      notifyStrategyUuid: 'notifyStrategyUuid',
      operator: 'operator',
      owners: 'owners',
      participants: 'participants',
      plan: 'plan',
      relatedResources: 'relatedResources',
      rootCauseCategory: 'rootCauseCategory',
      severity: 'severity',
      solution: 'solution',
      state: 'state',
      subscriptionName: 'subscriptionName',
      subscriptionUuid: 'subscriptionUuid',
      time: 'time',
      title: 'title',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      escalations: { 'type': 'array', 'itemType': IncidentEscalationPolicyForView },
      groupUuid: 'string',
      groupingKeys: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      incidentId: 'string',
      notifyStrategyName: 'string',
      notifyStrategyUuid: 'string',
      operator: ContactForIncidentView,
      owners: { 'type': 'array', 'itemType': ContactForIncidentView },
      participants: { 'type': 'array', 'itemType': ContactForIncidentView },
      plan: IncidentResponsePlanForView,
      relatedResources: { 'type': 'array', 'itemType': EventResourceForIncidentView },
      rootCauseCategory: 'string',
      severity: 'string',
      solution: 'string',
      state: 'string',
      subscriptionName: 'string',
      subscriptionUuid: 'string',
      time: 'number',
      title: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    if(this.groupingKeys) {
      $dara.Model.validateMap(this.groupingKeys);
    }
    if(this.operator && typeof (this.operator as any).validate === 'function') {
      (this.operator as any).validate();
    }
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(Array.isArray(this.participants)) {
      $dara.Model.validateArray(this.participants);
    }
    if(this.plan && typeof (this.plan as any).validate === 'function') {
      (this.plan as any).validate();
    }
    if(Array.isArray(this.relatedResources)) {
      $dara.Model.validateArray(this.relatedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

