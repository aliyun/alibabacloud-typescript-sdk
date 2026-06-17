// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventRuleTargetListResponseBodyContactParametersContactParameter extends $dara.Model {
  contactGroupName?: string;
  id?: string;
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

export class DescribeEventRuleTargetListResponseBodyContactParameters extends $dara.Model {
  contactParameter?: DescribeEventRuleTargetListResponseBodyContactParametersContactParameter[];
  static names(): { [key: string]: string } {
    return {
      contactParameter: 'ContactParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyContactParametersContactParameter },
    };
  }

  validate() {
    if(Array.isArray(this.contactParameter)) {
      $dara.Model.validateArray(this.contactParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyFcParametersFCParameter extends $dara.Model {
  arn?: string;
  functionName?: string;
  id?: string;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
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

export class DescribeEventRuleTargetListResponseBodyFcParameters extends $dara.Model {
  FCParameter?: DescribeEventRuleTargetListResponseBodyFcParametersFCParameter[];
  static names(): { [key: string]: string } {
    return {
      FCParameter: 'FCParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FCParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyFcParametersFCParameter },
    };
  }

  validate() {
    if(Array.isArray(this.FCParameter)) {
      $dara.Model.validateArray(this.FCParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter extends $dara.Model {
  arn?: string;
  id?: string;
  queue?: string;
  region?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
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

export class DescribeEventRuleTargetListResponseBodyMnsParameters extends $dara.Model {
  mnsParameter?: DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter[];
  static names(): { [key: string]: string } {
    return {
      mnsParameter: 'MnsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter },
    };
  }

  validate() {
    if(Array.isArray(this.mnsParameter)) {
      $dara.Model.validateArray(this.mnsParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters extends $dara.Model {
  action?: string;
  arn?: string;
  id?: string;
  product?: string;
  region?: string;
  role?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      arn: 'Arn',
      id: 'Id',
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

export class DescribeEventRuleTargetListResponseBodyOpenApiParameters extends $dara.Model {
  openApiParameters?: DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters[];
  static names(): { [key: string]: string } {
    return {
      openApiParameters: 'OpenApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openApiParameters: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters },
    };
  }

  validate() {
    if(Array.isArray(this.openApiParameters)) {
      $dara.Model.validateArray(this.openApiParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter extends $dara.Model {
  arn?: string;
  id?: string;
  logStore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
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

export class DescribeEventRuleTargetListResponseBodySlsParameters extends $dara.Model {
  slsParameter?: DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter[];
  static names(): { [key: string]: string } {
    return {
      slsParameter: 'SlsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter },
    };
  }

  validate() {
    if(Array.isArray(this.slsParameter)) {
      $dara.Model.validateArray(this.slsParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter extends $dara.Model {
  id?: string;
  method?: string;
  protocol?: string;
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

export class DescribeEventRuleTargetListResponseBodyWebhookParameters extends $dara.Model {
  webhookParameter?: DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter[];
  static names(): { [key: string]: string } {
    return {
      webhookParameter: 'WebhookParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter },
    };
  }

  validate() {
    if(Array.isArray(this.webhookParameter)) {
      $dara.Model.validateArray(this.webhookParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  contactParameters?: DescribeEventRuleTargetListResponseBodyContactParameters;
  fcParameters?: DescribeEventRuleTargetListResponseBodyFcParameters;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  mnsParameters?: DescribeEventRuleTargetListResponseBodyMnsParameters;
  openApiParameters?: DescribeEventRuleTargetListResponseBodyOpenApiParameters;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87170bc7-e28a-4c93-b9bf-90a1dbe84736
   */
  requestId?: string;
  slsParameters?: DescribeEventRuleTargetListResponseBodySlsParameters;
  webhookParameters?: DescribeEventRuleTargetListResponseBodyWebhookParameters;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactParameters: 'ContactParameters',
      fcParameters: 'FcParameters',
      message: 'Message',
      mnsParameters: 'MnsParameters',
      openApiParameters: 'OpenApiParameters',
      requestId: 'RequestId',
      slsParameters: 'SlsParameters',
      webhookParameters: 'WebhookParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactParameters: DescribeEventRuleTargetListResponseBodyContactParameters,
      fcParameters: DescribeEventRuleTargetListResponseBodyFcParameters,
      message: 'string',
      mnsParameters: DescribeEventRuleTargetListResponseBodyMnsParameters,
      openApiParameters: DescribeEventRuleTargetListResponseBodyOpenApiParameters,
      requestId: 'string',
      slsParameters: DescribeEventRuleTargetListResponseBodySlsParameters,
      webhookParameters: DescribeEventRuleTargetListResponseBodyWebhookParameters,
    };
  }

  validate() {
    if(this.contactParameters && typeof (this.contactParameters as any).validate === 'function') {
      (this.contactParameters as any).validate();
    }
    if(this.fcParameters && typeof (this.fcParameters as any).validate === 'function') {
      (this.fcParameters as any).validate();
    }
    if(this.mnsParameters && typeof (this.mnsParameters as any).validate === 'function') {
      (this.mnsParameters as any).validate();
    }
    if(this.openApiParameters && typeof (this.openApiParameters as any).validate === 'function') {
      (this.openApiParameters as any).validate();
    }
    if(this.slsParameters && typeof (this.slsParameters as any).validate === 'function') {
      (this.slsParameters as any).validate();
    }
    if(this.webhookParameters && typeof (this.webhookParameters as any).validate === 'function') {
      (this.webhookParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

