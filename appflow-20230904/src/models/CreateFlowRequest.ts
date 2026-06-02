// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateFlowRequestParameters extends $dara.Model {
  /**
   * @example
   * dingdingAuthId
   */
  parameterKey?: string;
  /**
   * @example
   * uac-cdd8e1cfde534b4db482
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRequest extends $dara.Model {
  flowDesc?: string;
  /**
   * @example
   * flow-647da8e366a74d1cab6e
   */
  flowId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  flowName?: string;
  flowTemplate?: string;
  launchStatus?: boolean;
  parameters?: CreateFlowRequestParameters[];
  tag?: CreateFlowRequestTag[];
  /**
   * @example
   * tl-715d93e708b546b7b464
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      flowDesc: 'FlowDesc',
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowTemplate: 'FlowTemplate',
      launchStatus: 'LaunchStatus',
      parameters: 'Parameters',
      tag: 'Tag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowDesc: 'string',
      flowId: 'string',
      flowName: 'string',
      flowTemplate: 'string',
      launchStatus: 'boolean',
      parameters: { 'type': 'array', 'itemType': CreateFlowRequestParameters },
      tag: { 'type': 'array', 'itemType': CreateFlowRequestTag },
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

