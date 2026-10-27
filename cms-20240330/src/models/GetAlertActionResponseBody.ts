// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertActionResponseBodyAlertActionsEbParam extends $dara.Model {
  /**
   * @example
   * test
   */
  ebSource?: string;
  /**
   * @example
   * test
   */
  eventBusName?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
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
   * @example
   * test
   */
  essGroupId?: string;
  /**
   * @example
   * test
   */
  essRuleId?: string;
  /**
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
   * @example
   * test
   */
  function?: string;
  /**
   * @example
   * test
   */
  qualifier?: string;
  /**
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
   * @example
   * test
   */
  function?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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
   * @example
   * queue
   */
  mnsType?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
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
   * @example
   * EWR4WR4T4GREG4ET453T5Y
   */
  key?: string;
  /**
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
   * @example
   * test
   */
  logstore?: string;
  /**
   * @example
   * test
   */
  project?: string;
  /**
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
   * @example
   * JSON
   */
  contentType?: string;
  headers?: { [key: string]: string };
  /**
   * @example
   * POST
   */
  method?: string;
  /**
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
   * @example
   * testId
   */
  alertActionId?: string;
  /**
   * @example
   * testName
   */
  alertActionName?: string;
  ebParam?: GetAlertActionResponseBodyAlertActionsEbParam;
  essParam?: GetAlertActionResponseBodyAlertActionsEssParam;
  fc3Param?: GetAlertActionResponseBodyAlertActionsFc3Param;
  fcParam?: GetAlertActionResponseBodyAlertActionsFcParam;
  mnsParam?: GetAlertActionResponseBodyAlertActionsMnsParam;
  pagerDutyParam?: GetAlertActionResponseBodyAlertActionsPagerDutyParam;
  slsParam?: GetAlertActionResponseBodyAlertActionsSlsParam;
  /**
   * @example
   * FC
   */
  type?: string;
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
  alertActions?: GetAlertActionResponseBodyAlertActions;
  /**
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

