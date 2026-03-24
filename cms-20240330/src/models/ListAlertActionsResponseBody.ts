// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsResponseBodyAlertActionsEbParam extends $dara.Model {
  /**
   * @remarks
   * The event provider.
   * 
   * @example
   * test
   */
  ebSource?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * test
   */
  eventBusName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The subject.
   * 
   * @example
   * test
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      ebSource: 'ebSource',
      eventBusName: 'eventBusName',
      regionId: 'regionId',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ebSource: 'string',
      eventBusName: 'string',
      regionId: 'string',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsEssParam extends $dara.Model {
  /**
   * @remarks
   * The ID of the Auto Scaling group.
   * 
   * @example
   * testId
   */
  essGroupId?: string;
  /**
   * @remarks
   * The ID of the scaling rule.
   * 
   * @example
   * testId
   */
  essRuleId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      essGroupId: 'essGroupId',
      essRuleId: 'essRuleId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      essGroupId: 'string',
      essRuleId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsFc3Param extends $dara.Model {
  /**
   * @remarks
   * The function name of the Function Compute service.
   * 
   * @example
   * test
   */
  function?: string;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * test
   */
  qualifier?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      qualifier: 'qualifier',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      qualifier: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsFcParam extends $dara.Model {
  /**
   * @remarks
   * The function name of the Function Compute service.
   * 
   * @example
   * test
   */
  function?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The service name of Function Compute.
   * 
   * @example
   * test
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      regionId: 'regionId',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      regionId: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsMnsParam extends $dara.Model {
  /**
   * @remarks
   * The resource type of Simple Message Queue (formerly MNS).
   * 
   * @example
   * queue
   */
  mnsType?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * - If the resource type is \\`queue\\`, this parameter specifies the queue name.
   * 
   * - If the resource type is \\`topic\\`, this parameter specifies the topic name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mnsType: 'mnsType',
      name: 'name',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsType: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsPagerDutyParam extends $dara.Model {
  /**
   * @remarks
   * The integration key of PagerDuty.
   * 
   * @example
   * fsfer4543t5t65g4t4
   */
  key?: string;
  /**
   * @remarks
   * The integration webhook of PagerDuty. Versions 1 and 2 are supported.
   * 
   * @example
   * https://events.pagerduty.com/v2/enqueue
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsSlsParam extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * test
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * test
   */
  project?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsWebhookParam extends $dara.Model {
  /**
   * @remarks
   * The data format. This parameter is valid only when the request method is POST.
   * 
   * @example
   * JSON
   */
  contentType?: string;
  /**
   * @remarks
   * The request headers.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The request method of the webhook.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The callback URL for alerts.
   * 
   * @example
   * http://www.test.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      headers: 'headers',
      method: 'method',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      method: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActions extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the alert action integration.
   * 
   * @example
   * test
   */
  alertActionId?: string;
  /**
   * @remarks
   * The name of the alert action integration.
   * 
   * @example
   * testName
   */
  alertActionName?: string;
  /**
   * @remarks
   * Specifies the event bus.
   */
  ebParam?: ListAlertActionsResponseBodyAlertActionsEbParam;
  /**
   * @remarks
   * The parameters of Auto Scaling.
   */
  essParam?: ListAlertActionsResponseBodyAlertActionsEssParam;
  /**
   * @remarks
   * The parameters of Function Compute 3.0.
   */
  fc3Param?: ListAlertActionsResponseBodyAlertActionsFc3Param;
  /**
   * @remarks
   * The parameters of Function Compute.
   */
  fcParam?: ListAlertActionsResponseBodyAlertActionsFcParam;
  /**
   * @remarks
   * The parameters of Simple Message Queue (formerly MNS).
   */
  mnsParam?: ListAlertActionsResponseBodyAlertActionsMnsParam;
  /**
   * @remarks
   * The PagerDuty parameters.
   */
  pagerDutyParam?: ListAlertActionsResponseBodyAlertActionsPagerDutyParam;
  /**
   * @remarks
   * The parameters of Simple Log Service.
   */
  slsParam?: ListAlertActionsResponseBodyAlertActionsSlsParam;
  /**
   * @remarks
   * The type of the alert action integration.
   * 
   * @example
   * FC
   */
  type?: string;
  /**
   * @remarks
   * The webhook parameters.
   */
  webhookParam?: ListAlertActionsResponseBodyAlertActionsWebhookParam;
  static names(): { [key: string]: string } {
    return {
      alertActionId: 'alertActionId',
      alertActionName: 'alertActionName',
      ebParam: 'ebParam',
      essParam: 'essParam',
      fc3Param: 'fc3Param',
      fcParam: 'fcParam',
      mnsParam: 'mnsParam',
      pagerDutyParam: 'pagerDutyParam',
      slsParam: 'slsParam',
      type: 'type',
      webhookParam: 'webhookParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionId: 'string',
      alertActionName: 'string',
      ebParam: ListAlertActionsResponseBodyAlertActionsEbParam,
      essParam: ListAlertActionsResponseBodyAlertActionsEssParam,
      fc3Param: ListAlertActionsResponseBodyAlertActionsFc3Param,
      fcParam: ListAlertActionsResponseBodyAlertActionsFcParam,
      mnsParam: ListAlertActionsResponseBodyAlertActionsMnsParam,
      pagerDutyParam: ListAlertActionsResponseBodyAlertActionsPagerDutyParam,
      slsParam: ListAlertActionsResponseBodyAlertActionsSlsParam,
      type: 'string',
      webhookParam: ListAlertActionsResponseBodyAlertActionsWebhookParam,
    };
  }

  validate() {
    if(this.ebParam && typeof (this.ebParam as any).validate === 'function') {
      (this.ebParam as any).validate();
    }
    if(this.essParam && typeof (this.essParam as any).validate === 'function') {
      (this.essParam as any).validate();
    }
    if(this.fc3Param && typeof (this.fc3Param as any).validate === 'function') {
      (this.fc3Param as any).validate();
    }
    if(this.fcParam && typeof (this.fcParam as any).validate === 'function') {
      (this.fcParam as any).validate();
    }
    if(this.mnsParam && typeof (this.mnsParam as any).validate === 'function') {
      (this.mnsParam as any).validate();
    }
    if(this.pagerDutyParam && typeof (this.pagerDutyParam as any).validate === 'function') {
      (this.pagerDutyParam as any).validate();
    }
    if(this.slsParam && typeof (this.slsParam as any).validate === 'function') {
      (this.slsParam as any).validate();
    }
    if(this.webhookParam && typeof (this.webhookParam as any).validate === 'function') {
      (this.webhookParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of alert action integration configurations.
   */
  alertActions?: ListAlertActionsResponseBodyAlertActions[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 9
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertActions: 'alertActions',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActions: { 'type': 'array', 'itemType': ListAlertActionsResponseBodyAlertActions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertActions)) {
      $dara.Model.validateArray(this.alertActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

