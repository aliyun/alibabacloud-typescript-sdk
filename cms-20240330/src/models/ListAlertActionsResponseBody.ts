// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsResponseBodyAlertActionsEbParam extends $dara.Model {
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

export class ListAlertActionsResponseBodyAlertActionsEssParam extends $dara.Model {
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

export class ListAlertActionsResponseBodyAlertActionsFc3Param extends $dara.Model {
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

export class ListAlertActionsResponseBodyAlertActionsFcParam extends $dara.Model {
  /**
   * @example
   * test
   */
  function?: string;
  /**
   * @example
   * cn-beijing
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

export class ListAlertActionsResponseBodyAlertActionsMnsParam extends $dara.Model {
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
   * @example
   * fsfer4543t5t65g4t4
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

export class ListAlertActionsResponseBodyAlertActionsSlsParam extends $dara.Model {
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
   * @example
   * JSON
   */
  contentType?: string;
  headers?: { [key: string]: string };
  /**
   * @example
   * GET
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

export class ListAlertActionsResponseBodyAlertActions extends $dara.Model {
  /**
   * @example
   * test
   */
  alertActionId?: string;
  /**
   * @example
   * testName
   */
  alertActionName?: string;
  ebParam?: ListAlertActionsResponseBodyAlertActionsEbParam;
  essParam?: ListAlertActionsResponseBodyAlertActionsEssParam;
  fc3Param?: ListAlertActionsResponseBodyAlertActionsFc3Param;
  fcParam?: ListAlertActionsResponseBodyAlertActionsFcParam;
  mnsParam?: ListAlertActionsResponseBodyAlertActionsMnsParam;
  pagerDutyParam?: ListAlertActionsResponseBodyAlertActionsPagerDutyParam;
  slsParam?: ListAlertActionsResponseBodyAlertActionsSlsParam;
  /**
   * @example
   * FC
   */
  type?: string;
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
  alertActions?: ListAlertActionsResponseBodyAlertActions[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
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

