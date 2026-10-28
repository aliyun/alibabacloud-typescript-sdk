// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertActionRequestEbParam extends $dara.Model {
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

export class UpdateAlertActionRequestEssParam extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic scaling group.
   * 
   * @example
   * testId
   */
  essGroupId?: string;
  /**
   * @remarks
   * The ID of the elastic scaling rule.
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

export class UpdateAlertActionRequestFc3Param extends $dara.Model {
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
   * cn-heyuan
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

export class UpdateAlertActionRequestFcParam extends $dara.Model {
  /**
   * @remarks
   * The name of the function in Function Compute.
   * 
   * @example
   * testName
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
   * The service name in Function Compute.
   * 
   * @example
   * testService
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

export class UpdateAlertActionRequestMnsParam extends $dara.Model {
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
   * - If the resource type is queue, the resource name is the queue name.
   * - If the resource type is topic, the resource name is the topic name.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
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

export class UpdateAlertActionRequestPagerDutyParam extends $dara.Model {
  /**
   * @remarks
   * The integration key of PagerDuty.
   * 
   * @example
   * fwe4rwr543t543t43t43t43
   */
  key?: string;
  /**
   * @remarks
   * The integration webhook of PagerDuty. V1 and V2 are supported.
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

export class UpdateAlertActionRequestSlsParam extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * testLogstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * testProject
   */
  project?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
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

export class UpdateAlertActionRequestWebhookParam extends $dara.Model {
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
   * The request headers.
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
   * The alert callback URL.
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

export class UpdateAlertActionRequest extends $dara.Model {
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
   * The event bus.
   */
  ebParam?: UpdateAlertActionRequestEbParam;
  /**
   * @remarks
   * The elastic scaling parameters.
   */
  essParam?: UpdateAlertActionRequestEssParam;
  /**
   * @remarks
   * The Function Compute 3.0 parameters.
   */
  fc3Param?: UpdateAlertActionRequestFc3Param;
  /**
   * @remarks
   * The Function Compute parameters.
   */
  fcParam?: UpdateAlertActionRequestFcParam;
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) parameters.
   */
  mnsParam?: UpdateAlertActionRequestMnsParam;
  /**
   * @remarks
   * The PagerDuty parameters.
   */
  pagerDutyParam?: UpdateAlertActionRequestPagerDutyParam;
  /**
   * @remarks
   * The Simple Log Service parameters.
   */
  slsParam?: UpdateAlertActionRequestSlsParam;
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
  webhookParam?: UpdateAlertActionRequestWebhookParam;
  static names(): { [key: string]: string } {
    return {
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
      alertActionName: 'string',
      ebParam: UpdateAlertActionRequestEbParam,
      essParam: UpdateAlertActionRequestEssParam,
      fc3Param: UpdateAlertActionRequestFc3Param,
      fcParam: UpdateAlertActionRequestFcParam,
      mnsParam: UpdateAlertActionRequestMnsParam,
      pagerDutyParam: UpdateAlertActionRequestPagerDutyParam,
      slsParam: UpdateAlertActionRequestSlsParam,
      type: 'string',
      webhookParam: UpdateAlertActionRequestWebhookParam,
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

