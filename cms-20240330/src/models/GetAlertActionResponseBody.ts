// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertActionResponseBodyAlertActionsEbParam extends $dara.Model {
  /**
   * @remarks
   * The event source.
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

export class GetAlertActionResponseBodyAlertActionsEssParam extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic scaling group.
   * 
   * @example
   * test
   */
  essGroupId?: string;
  /**
   * @remarks
   * The ID of the elastic scaling rule.
   * 
   * @example
   * test
   */
  essRuleId?: string;
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

export class GetAlertActionResponseBodyAlertActionsFc3Param extends $dara.Model {
  /**
   * @remarks
   * The name of the function.
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

export class GetAlertActionResponseBodyAlertActionsFcParam extends $dara.Model {
  /**
   * @remarks
   * The name of the function in Function Compute.
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service name in Function Compute.
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

export class GetAlertActionResponseBodyAlertActionsMnsParam extends $dara.Model {
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
   * - If the resource type is queue, the resource name is the name of the queue.
   * - If the resource type is topic, the resource name is the name of the topic.
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
   * cn-beijing
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

export class GetAlertActionResponseBodyAlertActionsPagerDutyParam extends $dara.Model {
  /**
   * @remarks
   * The integration key of PagerDuty.
   * 
   * @example
   * EWR4WR4T4GREG4ET453T5Y
   */
  key?: string;
  /**
   * @remarks
   * The integration webhook URL for PagerDuty. V1 and V2 are supported.
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

export class GetAlertActionResponseBodyAlertActionsSlsParam extends $dara.Model {
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
   * cn-beijing
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

export class GetAlertActionResponseBodyAlertActionsWebhookParam extends $dara.Model {
  /**
   * @remarks
   * The data format. This parameter takes effect only when the request method is POST.
   * 
   * @example
   * JSON
   */
  contentType?: string;
  /**
   * @remarks
   * The request header information.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The webhook request method.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The URL for the alert callback.
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

export class GetAlertActionResponseBodyAlertActions extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the alert action integration.
   * 
   * @example
   * testId
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
   * The event bus parameters.
   */
  ebParam?: GetAlertActionResponseBodyAlertActionsEbParam;
  /**
   * @remarks
   * The elastic scaling parameters.
   */
  essParam?: GetAlertActionResponseBodyAlertActionsEssParam;
  /**
   * @remarks
   * The Function Compute 3.0 parameters.
   */
  fc3Param?: GetAlertActionResponseBodyAlertActionsFc3Param;
  /**
   * @remarks
   * The Function Compute parameters.
   */
  fcParam?: GetAlertActionResponseBodyAlertActionsFcParam;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) parameters.
   */
  mnsParam?: GetAlertActionResponseBodyAlertActionsMnsParam;
  /**
   * @remarks
   * The PagerDuty parameters.
   */
  pagerDutyParam?: GetAlertActionResponseBodyAlertActionsPagerDutyParam;
  /**
   * @remarks
   * The Simple Log Service parameters.
   */
  slsParam?: GetAlertActionResponseBodyAlertActionsSlsParam;
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
  webhookParam?: GetAlertActionResponseBodyAlertActionsWebhookParam;
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
      ebParam: GetAlertActionResponseBodyAlertActionsEbParam,
      essParam: GetAlertActionResponseBodyAlertActionsEssParam,
      fc3Param: GetAlertActionResponseBodyAlertActionsFc3Param,
      fcParam: GetAlertActionResponseBodyAlertActionsFcParam,
      mnsParam: GetAlertActionResponseBodyAlertActionsMnsParam,
      pagerDutyParam: GetAlertActionResponseBodyAlertActionsPagerDutyParam,
      slsParam: GetAlertActionResponseBodyAlertActionsSlsParam,
      type: 'string',
      webhookParam: GetAlertActionResponseBodyAlertActionsWebhookParam,
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

export class GetAlertActionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of alert action integration configurations.
   */
  alertActions?: GetAlertActionResponseBodyAlertActions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertActions: 'alertActions',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActions: GetAlertActionResponseBodyAlertActions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertActions && typeof (this.alertActions as any).validate === 'function') {
      (this.alertActions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

