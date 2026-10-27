// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertActionRequestEbParam extends $dara.Model {
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

export class UpdateAlertActionRequestEssParam extends $dara.Model {
  /**
   * @example
   * testId
   */
  essGroupId?: string;
  /**
   * @example
   * testId
   */
  essRuleId?: string;
  /**
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
   * @example
   * testName
   */
  function?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
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
   * @example
   * queue
   */
  mnsType?: string;
  /**
   * @example
   * testName
   */
  name?: string;
  /**
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
   * @example
   * fwe4rwr543t543t43t43t43
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

export class UpdateAlertActionRequestSlsParam extends $dara.Model {
  /**
   * @example
   * testLogstore
   */
  logstore?: string;
  /**
   * @example
   * testProject
   */
  project?: string;
  /**
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

export class UpdateAlertActionRequest extends $dara.Model {
  /**
   * @example
   * testName
   */
  alertActionName?: string;
  ebParam?: UpdateAlertActionRequestEbParam;
  essParam?: UpdateAlertActionRequestEssParam;
  fc3Param?: UpdateAlertActionRequestFc3Param;
  fcParam?: UpdateAlertActionRequestFcParam;
  mnsParam?: UpdateAlertActionRequestMnsParam;
  pagerDutyParam?: UpdateAlertActionRequestPagerDutyParam;
  slsParam?: UpdateAlertActionRequestSlsParam;
  /**
   * @example
   * FC
   */
  type?: string;
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

