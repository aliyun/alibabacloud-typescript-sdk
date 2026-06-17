// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventRuleTargetsRequestContactParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group. Valid values of N: 1 to 5.
   * 
   * @example
   * Default alert contact group
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The unique identifier of the rule target. Valid values of N: 1 to 5.
   * 
   * @example
   * 2
   */
  id?: string;
  /**
   * @remarks
   * The alert notification level. Valid values of N: 1 to 5. Valid values:
   * 
   * <props="china">- 2: phone call, text message, DingTalk, and email
   * 
   * <props="china">- 3: text message, DingTalk, and email
   * 
   * <props="china">- 4: DingTalk and email
   * 
   * <props="intl">4: DingTalk and email
   * 
   * <props="partner">4: DingTalk and email.
   * 
   * @example
   * 4
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      id: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestFcParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the function. Valid values of N: 1 to 5.
   * 
   * @example
   * fc-test
   */
  functionName?: string;
  /**
   * @remarks
   * The unique identifier of the rule target. Valid values of N: 1 to 5.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The region where the Function Compute service resides. Valid values of N: 1 to 5.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The service name of the Function Compute service. Valid values of N: 1 to 5.
   * 
   * @example
   * fc-test
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      id: 'string',
      region: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestMnsParameters extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the rule target. Valid values of N: 1 to 5.
   * 
   * @example
   * 3
   */
  id?: string;
  /**
   * @remarks
   * The name of the queue. Valid values of N: 1 to 5.
   * 
   * @example
   * queue1
   */
  queue?: string;
  /**
   * @remarks
   * The region where Simple Message Queue (formerly MNS) resides. Valid values of N: 1 to 5.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The topic of Simple Message Queue (formerly MNS).
   * 
   * @example
   * topic_sample
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      queue: 'string',
      region: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestOpenApiParameters extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * PutLogs
   */
  action?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource. Valid values of N: 1 to 5.
   * Format: `arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`. The fields are described as follows:
   *   - Service: the Alibaba Cloud service.
   *   - Region: the region ID.
   *   - Account: the Alibaba Cloud account ID.
   *   - ResourceType: the resource type.
   *   - ResourceId: the resource ID.
   */
  arn?: string;
  /**
   * @remarks
   * The unique identifier of the API callback notification method.
   * 
   * @example
   * 3
   */
  id?: string;
  /**
   * @remarks
   * The JSON-formatted parameters of the alert callback.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParams?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service to which the API belongs.
   * 
   * @example
   * log
   */
  product?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * MyRole
   */
  role?: string;
  /**
   * @remarks
   * The API version.
   * 
   * @example
   * 2019-01-01
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      product: 'Product',
      region: 'Region',
      role: 'Role',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      product: 'string',
      region: 'string',
      role: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestSlsParameters extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the rule target. Valid values of N: 1 to 5.
   * 
   * @example
   * 5
   */
  id?: string;
  /**
   * @remarks
   * The Logstore of Simple Log Service. Valid values of N: 1 to 5.
   * 
   * @example
   * testlogstore
   */
  logStore?: string;
  /**
   * @remarks
   * The project of Simple Log Service. Valid values of N: 1 to 5.
   * 
   * @example
   * testproject
   */
  project?: string;
  /**
   * @remarks
   * The region where Simple Log Service resides. Valid values of N: 1 to 5.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      logStore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestWebhookParameters extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the rule target. Valid values of N: 1 to 5.
   * 
   * @example
   * 4
   */
  id?: string;
  /**
   * @remarks
   * The request method of the HTTP callback. Valid values of N: 1 to 5.
   * 
   * Only GET and POST are supported.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The protocol name. Valid values of N: 1 to 5. Valid values:
   * 
   * - http
   * - telnet
   * - ping.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The callback URL. Valid values of N: 1 to 5.
   * 
   * @example
   * http://www.aliyun.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      method: 'Method',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      method: 'string',
      protocol: 'string',
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

export class PutEventRuleTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact group notification method.
   */
  contactParameters?: PutEventRuleTargetsRequestContactParameters[];
  /**
   * @remarks
   * The Function Compute notification method.
   */
  fcParameters?: PutEventRuleTargetsRequestFcParameters[];
  /**
   * @remarks
   * The Simple Message Queue (formerly MNS) notification method.
   */
  mnsParameters?: PutEventRuleTargetsRequestMnsParameters[];
  /**
   * @remarks
   * The list of API callback notification parameters.
   */
  openApiParameters?: PutEventRuleTargetsRequestOpenApiParameters[];
  regionId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * testEventRule
   */
  ruleName?: string;
  /**
   * @remarks
   * The Simple Log Service notification method.
   */
  slsParameters?: PutEventRuleTargetsRequestSlsParameters[];
  /**
   * @remarks
   * The URL callback notification method.
   */
  webhookParameters?: PutEventRuleTargetsRequestWebhookParameters[];
  static names(): { [key: string]: string } {
    return {
      contactParameters: 'ContactParameters',
      fcParameters: 'FcParameters',
      mnsParameters: 'MnsParameters',
      openApiParameters: 'OpenApiParameters',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      slsParameters: 'SlsParameters',
      webhookParameters: 'WebhookParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestContactParameters },
      fcParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestFcParameters },
      mnsParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestMnsParameters },
      openApiParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestOpenApiParameters },
      regionId: 'string',
      ruleName: 'string',
      slsParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestSlsParameters },
      webhookParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestWebhookParameters },
    };
  }

  validate() {
    if(Array.isArray(this.contactParameters)) {
      $dara.Model.validateArray(this.contactParameters);
    }
    if(Array.isArray(this.fcParameters)) {
      $dara.Model.validateArray(this.fcParameters);
    }
    if(Array.isArray(this.mnsParameters)) {
      $dara.Model.validateArray(this.mnsParameters);
    }
    if(Array.isArray(this.openApiParameters)) {
      $dara.Model.validateArray(this.openApiParameters);
    }
    if(Array.isArray(this.slsParameters)) {
      $dara.Model.validateArray(this.slsParameters);
    }
    if(Array.isArray(this.webhookParameters)) {
      $dara.Model.validateArray(this.webhookParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

