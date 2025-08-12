// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventRuleTargetsRequestContactParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group. Valid values of N: 1 to 5.
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The ID of the recipient that receives alert notifications. Valid values of N: 1 to 5.
   * 
   * @example
   * 2
   */
  id?: string;
  /**
   * @remarks
   * The alert notification methods. Valid values of N: 1 to 5. Valid values:
   * 
   * 4: Alert notifications are sent by using DingTalk and emails.
   * 
   * @example
   * 3
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
   * The ID of the recipient that receives alert notifications. Valid values of N: 1 to 5.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The region where Function Compute is deployed. Valid values of N: 1 to 5.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the Function Compute service. Valid values of N: 1 to 5.
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
   * The ID of the recipient that receives alert notifications. Valid values of N: 1 to 5.
   * 
   * @example
   * 3
   */
  id?: string;
  /**
   * @remarks
   * The name of the SMQ queue. Valid values of N: 1 to 5.
   * 
   * @example
   * queue1
   */
  queue?: string;
  /**
   * @remarks
   * The region for SMQ. Valid values of N: 1 to 5.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The SMQ topic.
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
   * The Alibaba Cloud Resource Name (ARN) of the resource. Valid values of N: 1 to 5. Format: `arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`. Fields:
   * 
   * *   Service: the code of a cloud service
   * *   Region: the region ID
   * *   Account: the ID of an Alibaba Cloud account
   * *   ResourceType: the resource type
   * *   ResourceId: the resource ID
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the recipient that receives alert notifications sent by an API callback.
   * 
   * @example
   * 3
   */
  id?: string;
  /**
   * @remarks
   * The parameters of the alert callback. Specify the parameters in the JSON format.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParams?: string;
  /**
   * @remarks
   * The ID of the cloud service to which the API operation belongs.
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
   * The name of the role.
   * 
   * @example
   * MyRole
   */
  role?: string;
  /**
   * @remarks
   * The version of the API.
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
   * The ID of the recipient that receives alert notifications. Valid values of N: 1 to 5.
   * 
   * @example
   * 5
   */
  id?: string;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore. Valid values of N: 1 to 5.
   * 
   * @example
   * testlogstore
   */
  logStore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project. Valid values of N: 1 to 5.
   * 
   * @example
   * testproject
   */
  project?: string;
  /**
   * @remarks
   * The region where Simple Log Service is deployed. Valid values of N: 1 to 5.
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
   * The ID of the recipient that receives alert notifications. Valid values of N: 1 to 5.
   * 
   * @example
   * 4
   */
  id?: string;
  /**
   * @remarks
   * The HTTP request method. Valid values of N: 1 to 5.
   * 
   * Valid values: GET and POST.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The name of the protocol. Valid values of N: 1 to 5. Valid values:
   * 
   * *   http
   * *   telnet
   * *   ping
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
   * The information about the alert contact groups that receive alert notifications.
   */
  contactParameters?: PutEventRuleTargetsRequestContactParameters[];
  /**
   * @remarks
   * The information about the recipients in Function Compute.
   */
  fcParameters?: PutEventRuleTargetsRequestFcParameters[];
  /**
   * @remarks
   * The notifications of Simple Message Queue (formerly MNS) (SMQ).
   */
  mnsParameters?: PutEventRuleTargetsRequestMnsParameters[];
  /**
   * @remarks
   * The parameters of API callback notification.
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
   * The information about the recipients in Simple Log Service.
   */
  slsParameters?: PutEventRuleTargetsRequestSlsParameters[];
  /**
   * @remarks
   * The information about the callback URLs that are used to receive alert notifications.
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

