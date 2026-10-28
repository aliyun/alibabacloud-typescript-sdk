// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationPolicyForView } from "./IncidentEscalationPolicyForView";
import { ContactForIncidentView } from "./ContactForIncidentView";
import { IncidentResponsePlanForView } from "./IncidentResponsePlanForView";
import { EventResourceForIncidentView } from "./EventResourceForIncidentView";


export class IncidentForView extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the notification block.
   * 
   * @example
   * -1 indicates that notifications are not blocked
   */
  blockingExpireTimestamp?: number;
  /**
   * @remarks
   * The detailed content of the incident.
   * 
   * @example
   * "{"description":"High CPU usage on the ECS instance","impact":"Payment service delay"}"
   */
  content?: string;
  /**
   * @remarks
   * The list of escalation policies.
   */
  escalations?: IncidentEscalationPolicyForView[];
  /**
   * @remarks
   * The group identifier.
   * 
   * @example
   * "group-123456"
   */
  groupUuid?: string;
  /**
   * @remarks
   * The grouping key-value pairs.
   */
  groupingKeys?: { [key: string]: string };
  /**
   * @remarks
   * The unique identifier of the incident.
   * 
   * @example
   * "incident-abc123"
   */
  incidentId?: string;
  /**
   * @remarks
   * The notification policy name.
   * 
   * @example
   * { "contactId": "contact-123", "name": "Zhang San" }
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * The UUID of the associated notification policy used to trigger notifications.
   * 
   * @example
   * "notify-strategy-789"
   */
  notifyStrategyUuid?: string;
  /**
   * @remarks
   * The operator information.
   */
  operator?: ContactForIncidentView;
  /**
   * @remarks
   * The list of owners.
   */
  owners?: ContactForIncidentView[];
  /**
   * @remarks
   * The list of participants.
   */
  participants?: ContactForIncidentView[];
  /**
   * @remarks
   * The response plan.
   */
  plan?: IncidentResponsePlanForView;
  /**
   * @remarks
   * The list of associated resources.
   */
  relatedResources?: EventResourceForIncidentView[];
  /**
   * @remarks
   * The root cause category.
   * 
   * @example
   * "Network"
   */
  rootCauseCategory?: string;
  /**
   * @remarks
   * The severity level of the incident.
   * 
   * @example
   * "Critical"
   */
  severity?: string;
  /**
   * @remarks
   * The solution description.
   * 
   * @example
   * "Recovered to normal after restarting the ECS instance"
   */
  solution?: string;
  /**
   * @remarks
   * The current state of the incident.
   * 
   * @example
   * "Open"
   */
  state?: string;
  /**
   * @remarks
   * The subscription policy name.
   * 
   * @example
   * "P1-Alert-Notification"
   */
  subscriptionName?: string;
  /**
   * @remarks
   * The UUID of the subscription policy.
   * 
   * @example
   * "subscription-abc"
   */
  subscriptionUuid?: string;
  /**
   * @remarks
   * The array of tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The timestamp when the incident was created.
   * 
   * @example
   * 1743876000000
   */
  time?: number;
  /**
   * @remarks
   * The title of the incident.
   * 
   * @example
   * "Payment service unavailable"
   */
  title?: string;
  /**
   * @remarks
   * The ID of the user who created the incident.
   * 
   * @example
   * "user-abc123"
   */
  userId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * "ws-xyz789"
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      blockingExpireTimestamp: 'blockingExpireTimestamp',
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
      tags: 'tags',
      time: 'time',
      title: 'title',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockingExpireTimestamp: 'number',
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
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

