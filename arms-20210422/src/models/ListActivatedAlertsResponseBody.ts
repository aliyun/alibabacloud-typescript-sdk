// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActivatedAlertsResponseBodyPageAlertsDispatchRules extends $dara.Model {
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBodyPageAlerts extends $dara.Model {
  alertId?: string;
  alertName?: string;
  alertType?: string;
  count?: number;
  createTime?: number;
  dispatchRules?: ListActivatedAlertsResponseBodyPageAlertsDispatchRules[];
  endsAt?: number;
  expandFields?: { [key: string]: any };
  integrationName?: string;
  integrationType?: string;
  involvedObjectKind?: string;
  involvedObjectName?: string;
  message?: string;
  severity?: string;
  startsAt?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertType: 'AlertType',
      count: 'Count',
      createTime: 'CreateTime',
      dispatchRules: 'DispatchRules',
      endsAt: 'EndsAt',
      expandFields: 'ExpandFields',
      integrationName: 'IntegrationName',
      integrationType: 'IntegrationType',
      involvedObjectKind: 'InvolvedObjectKind',
      involvedObjectName: 'InvolvedObjectName',
      message: 'Message',
      severity: 'Severity',
      startsAt: 'StartsAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      alertName: 'string',
      alertType: 'string',
      count: 'number',
      createTime: 'number',
      dispatchRules: { 'type': 'array', 'itemType': ListActivatedAlertsResponseBodyPageAlertsDispatchRules },
      endsAt: 'number',
      expandFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrationName: 'string',
      integrationType: 'string',
      involvedObjectKind: 'string',
      involvedObjectName: 'string',
      message: 'string',
      severity: 'string',
      startsAt: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dispatchRules)) {
      $dara.Model.validateArray(this.dispatchRules);
    }
    if(this.expandFields) {
      $dara.Model.validateMap(this.expandFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBodyPage extends $dara.Model {
  alerts?: ListActivatedAlertsResponseBodyPageAlerts[];
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alerts: 'Alerts',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alerts: { 'type': 'array', 'itemType': ListActivatedAlertsResponseBodyPageAlerts },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alerts)) {
      $dara.Model.validateArray(this.alerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBody extends $dara.Model {
  page?: ListActivatedAlertsResponseBodyPage;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListActivatedAlertsResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

