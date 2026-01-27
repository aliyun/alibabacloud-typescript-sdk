// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoRepairPoliciesResponseBodyItemsRulesIncidentsConditions extends $dara.Model {
  /**
   * @example
   * xxx
   */
  reason?: string;
  /**
   * @example
   * False
   */
  status?: string;
  /**
   * @example
   * KubeletReady
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesIncidentsEvents extends $dara.Model {
  /**
   * @example
   * xxx
   */
  reason?: string;
  /**
   * @example
   * xxx
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesIncidents extends $dara.Model {
  conditions?: ListAutoRepairPoliciesResponseBodyItemsRulesIncidentsConditions[];
  events?: ListAutoRepairPoliciesResponseBodyItemsRulesIncidentsEvents[];
  /**
   * @example
   * Node.FaultNeedReboot.HOST
   */
  name?: string;
  /**
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      events: 'events',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItemsRulesIncidentsConditions },
      events: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItemsRulesIncidentsEvents },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionApprovedLabel extends $dara.Model {
  /**
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @example
   * approved
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionInquiringLabel extends $dara.Model {
  /**
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @example
   * inquiring
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureIntervention extends $dara.Model {
  approvedLabel?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionApprovedLabel;
  /**
   * @example
   * true
   */
  enable?: string;
  inquiringLabel?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionInquiringLabel;
  /**
   * @example
   * label
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvedLabel: 'approved_label',
      enable: 'enable',
      inquiringLabel: 'inquiring_label',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedLabel: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionApprovedLabel,
      enable: 'string',
      inquiringLabel: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionInquiringLabel,
      type: 'string',
    };
  }

  validate() {
    if(this.approvedLabel && typeof (this.approvedLabel as any).validate === 'function') {
      (this.approvedLabel as any).validate();
    }
    if(this.inquiringLabel && typeof (this.inquiringLabel as any).validate === 'function') {
      (this.inquiringLabel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedure extends $dara.Model {
  config?: { [key: string]: any };
  intervention?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureIntervention;
  /**
   * @example
   * QuarantineGPU
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      intervention: 'intervention',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      intervention: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureIntervention,
      name: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.intervention && typeof (this.intervention as any).validate === 'function') {
      (this.intervention as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRules extends $dara.Model {
  incidents?: ListAutoRepairPoliciesResponseBodyItemsRulesIncidents[];
  repairProcedure?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedure[];
  static names(): { [key: string]: string } {
    return {
      incidents: 'incidents',
      repairProcedure: 'repair_procedure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItemsRulesIncidents },
      repairProcedure: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedure },
    };
  }

  validate() {
    if(Array.isArray(this.incidents)) {
      $dara.Model.validateArray(this.incidents);
    }
    if(Array.isArray(this.repairProcedure)) {
      $dara.Model.validateArray(this.repairProcedure);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * r-xxxxx
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  resourceIds?: string[];
  /**
   * @example
   * ess
   */
  resourceSubType?: string;
  /**
   * @example
   * nodepool
   */
  resourceType?: string;
  rules?: ListAutoRepairPoliciesResponseBodyItemsRules[];
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      resourceIds: 'resource_ids',
      resourceSubType: 'resource_sub_type',
      resourceType: 'resource_type',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceSubType: 'string',
      resourceType: 'string',
      rules: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItemsRules },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBody extends $dara.Model {
  items?: ListAutoRepairPoliciesResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

