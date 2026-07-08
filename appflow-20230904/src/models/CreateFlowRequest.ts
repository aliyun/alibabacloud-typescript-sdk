// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateFlowRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of a parameter defined in the template. If no parameter name or value is specified, ROS uses the default value defined in the template.
   * 
   * The maximum value of N is 200.<br>
   * The name must be 1 to 128 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * > Parameters is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * dingdingAuthId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value for the parameter.
   * 
   * @example
   * uac-xxxxxxx
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
  /**
   * @remarks
   * The tag key. You can filter the cluster list by tag. You can specify up to 20 tag pairs. The number N in each tag pair must be unique and a consecutive integer starting from 1. The value corresponding to `Tag.N.Key` is `Tag.N.Value`.
   * 
   * > The tag key can be up to 64 characters long and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * CreateBy
   */
  key?: string;
  /**
   * @remarks
   * The authentication content.
   * 
   * @example
   * zhangsan
   */
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
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * 在钉钉中使用OpenClaw(MoltBot、MoltBot)
   */
  flowDesc?: string;
  /**
   * @remarks
   * The ID of the flow. This parameter is required when you update a flow or create a new flow version.
   * 
   * @example
   * flow-647da8e366a74d1cab6e
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * This parameter is required.
   * 
   * @example
   * 企业微信自建应用大模型自动回复
   */
  flowName?: string;
  /**
   * @remarks
   * The content of the template.
   * 
   * @example
   * {
   *   "FormatVersion": "appflow-2025-07-01",
   *   "Nodes": [
   * 
   *      ]
   * }
   */
  flowTemplate?: string;
  /**
   * @remarks
   * The publication status of the flow: True for published, False for unpublished.
   * 
   * @example
   * true
   */
  launchStatus?: boolean;
  /**
   * @remarks
   * The parameters for the template.
   * 
   * You can specify up to 200 parameters.
   * 
   * > This parameter is optional. If you use this parameter, you must specify both ParameterKey and ParameterValue for each entry.
   */
  parameters?: CreateFlowRequestParameters[];
  /**
   * @remarks
   * The object tags to which the rule applies. You can specify multiple tags.
   */
  tag?: CreateFlowRequestTag[];
  /**
   * @remarks
   * The ID of the template. Specify this parameter when you create a flow from a template in the Template Center.
   * 
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

