// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTemplateResponseBodyOutputs extends $dara.Model {
  /**
   * @remarks
   * The description of the template output.
   * 
   * @example
   * The instance ID of my ECS.
   */
  description?: string;
  /**
   * @remarks
   * The alias of the template output.
   * 
   * @example
   * Instance ID
   */
  label?: string;
  /**
   * @remarks
   * The name of the template output.
   * 
   * @example
   * instance_id
   */
  outputKey?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      outputKey: 'OutputKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      outputKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The list of data source resource types. Duplicates are removed.
   */
  dataSources?: string[];
  /**
   * @remarks
   * The list of regular resource types. Duplicates are removed.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': 'string' },
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The string pattern for the logical ID of the regular resource.
   * 
   * For ROS templates, the following two cases exist:
   * 
   * - The resource definition does not contain the `Count` field: If the resource name defined in the template is `server`, the value of this parameter is `server`, and the value of `ResourcePath` is `server`.
   * 
   * - The resource definition contains the `Count` field: If the resource name defined in the template is `server`, the value of this parameter is `server[*]`, and the value of `ResourcePath` is `server`.
   * 
   * For resources and [modules](https://www.terraform.io/language/modules) in Terraform templates, the following two cases exist:
   * 
   * - The definition does not contain [`count`](https://www.terraform.io/language/meta-arguments/count) or [`for_each`](https://www.terraform.io/language/meta-arguments/for_each): If the name is `server`, the value of this parameter is `server`, and the value of `ResourcePath` is `server`.
   * 
   * - The definition contains [`count`](https://www.terraform.io/language/meta-arguments/count) or [`for_each`](https://www.terraform.io/language/meta-arguments/for_each): If the name is `server`, the value of this parameter is `server[*]`, and the value of `ResourcePath` is `server`.
   * 
   * The following examples show the values for Terraform templates:
   * 
   * - Resources in the root module:
   * 
   *   - `server`: `count` and `for_each` are not used. The value of `ResourcePath` is `server`.
   * 
   *   - `server[*]`: `count` or `for_each` is used. The value of `ResourcePath` is `server`.
   * 
   * - Resources in a child module:
   * 
   *   - `app.server`: The `app` module does not use `count` or `for_each`, and the `server` resource does not use `count` or `for_each`. The value of `ResourcePath` is `app.server`.
   * 
   *   - `app.server[*]`: The `app` module does not use `count` or `for_each`, but the `server` resource uses `count` or `for_each`. The value of `ResourcePath` is `app.server`.
   * 
   *   - `app[*].server`: The `app` module uses `count` or `for_each`, but the `server` resource does not use `count` or `for_each`. The value of `ResourcePath` is `app.server`.
   * 
   *   - `app[*].server[*]`: The `app` module uses `count` or `for_each`, and the `server` resource uses `count` or `for_each`. The value of `ResourcePath` is `app.server`.
   * 
   *   - `app.app_group[*].server`: The `app` module does not use `count` or `for_each`, the `app_group` module uses `count` or `for_each` (the `app_group` module is a child module of the `app` module), and the `server` resource does not use `count` or `for_each`. The value of `ResourcePath` is `app.app_group.server`.
   * 
   * @example
   * server
   */
  logicalResourceIdPattern?: string;
  /**
   * @remarks
   * The path of the regular resource. The path is usually the same as the resource name.
   * 
   * @example
   * server
   */
  resourcePath?: string;
  /**
   * @remarks
   * The regular resource type.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceIdPattern: 'LogicalResourceIdPattern',
      resourcePath: 'ResourcePath',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceIdPattern: 'string',
      resourcePath: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyUpdateInfo extends $dara.Model {
  /**
   * @remarks
   * The list of parameters that can be modified.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The list of parameters that cause resource interruptions if they are modified.
   * 
   * > - This parameter is supported for only a few resource types.
   * >
   * > - This parameter is applicable only to ROS stacks.
   */
  parametersCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The list of parameters that cause replacement updates if they are modified.
   * 
   * > - This parameter is returned only if EnableReplacement is specified for UpdateInfoOptions.
   * >
   * > - This parameter is applicable only to ROS stacks.
   */
  parametersCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The list of parameters that may be allowed to be modified.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The list of parameters that may cause resource interruptions if they are modified.
   * 
   * > - This parameter is supported for only a few resource types.
   * >
   * > - This parameter is applicable only to ROS stacks.
   */
  parametersConditionallyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The list of parameters that may cause replacement updates if they are modified.
   * 
   * > - This parameter is returned only if EnableReplacement is specified for UpdateInfoOptions.
   * >
   * > - This parameter is applicable only to ROS stacks.
   */
  parametersConditionallyCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The list of parameters that cannot be modified.
   */
  parametersNotAllowedToBeModified?: string[];
  /**
   * @remarks
   * The list of parameters whose modification permissions are uncertain.
   */
  parametersUncertainlyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The list of parameters that cause resource interruptions under uncertain conditions if they are modified.
   * 
   * > - This parameter is supported for only a few resource types.
   * >
   * > - This parameter is applicable only to ROS stacks.
   */
  parametersUncertainlyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The list of parameters that cause replacement updates under uncertain conditions if they are modified.
   * 
   * > - This parameter is returned only if EnableReplacement is specified for UpdateInfoOptions.
   * >
   * > - This parameter is applicable only to ROS stacks.
   */
  parametersUncertainlyCauseReplacementIfModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersCauseInterruptionIfModified: 'ParametersCauseInterruptionIfModified',
      parametersCauseReplacementIfModified: 'ParametersCauseReplacementIfModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersConditionallyCauseInterruptionIfModified: 'ParametersConditionallyCauseInterruptionIfModified',
      parametersConditionallyCauseReplacementIfModified: 'ParametersConditionallyCauseReplacementIfModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
      parametersUncertainlyAllowedToBeModified: 'ParametersUncertainlyAllowedToBeModified',
      parametersUncertainlyCauseInterruptionIfModified: 'ParametersUncertainlyCauseInterruptionIfModified',
      parametersUncertainlyCauseReplacementIfModified: 'ParametersUncertainlyCauseReplacementIfModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parametersAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersAllowedToBeModified);
    }
    if(Array.isArray(this.parametersCauseInterruptionIfModified)) {
      $dara.Model.validateArray(this.parametersCauseInterruptionIfModified);
    }
    if(Array.isArray(this.parametersCauseReplacementIfModified)) {
      $dara.Model.validateArray(this.parametersCauseReplacementIfModified);
    }
    if(Array.isArray(this.parametersConditionallyAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersConditionallyAllowedToBeModified);
    }
    if(Array.isArray(this.parametersConditionallyCauseInterruptionIfModified)) {
      $dara.Model.validateArray(this.parametersConditionallyCauseInterruptionIfModified);
    }
    if(Array.isArray(this.parametersConditionallyCauseReplacementIfModified)) {
      $dara.Model.validateArray(this.parametersConditionallyCauseReplacementIfModified);
    }
    if(Array.isArray(this.parametersNotAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersNotAllowedToBeModified);
    }
    if(Array.isArray(this.parametersUncertainlyAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersUncertainlyAllowedToBeModified);
    }
    if(Array.isArray(this.parametersUncertainlyCauseInterruptionIfModified)) {
      $dara.Model.validateArray(this.parametersUncertainlyCauseInterruptionIfModified);
    }
    if(Array.isArray(this.parametersUncertainlyCauseReplacementIfModified)) {
      $dara.Model.validateArray(this.parametersUncertainlyCauseReplacementIfModified);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the stack template.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The list of template outputs.
   */
  outputs?: ValidateTemplateResponseBodyOutputs[];
  /**
   * @remarks
   * The list of input parameters.
   */
  parameters?: { [key: string]: any }[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource types that are used in the template.
   */
  resourceTypes?: ValidateTemplateResponseBodyResourceTypes;
  /**
   * @remarks
   * The list of regular resources that are defined in the template.
   * 
   * > - For ROS templates, resources whose definitions contain the `Count` field are not expanded.
   * >
   * > - For Terraform templates, resources whose definitions contain `count` or `for_each` are not expanded.
   */
  resources?: ValidateTemplateResponseBodyResources[];
  /**
   * @remarks
   * The information about the stack update. This parameter is not returned if Disabled is specified for UpdateInfoOptions.
   */
  updateInfo?: ValidateTemplateResponseBodyUpdateInfo;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputs: 'Outputs',
      parameters: 'Parameters',
      requestId: 'RequestId',
      resourceTypes: 'ResourceTypes',
      resources: 'Resources',
      updateInfo: 'UpdateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputs: { 'type': 'array', 'itemType': ValidateTemplateResponseBodyOutputs },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      resourceTypes: ValidateTemplateResponseBodyResourceTypes,
      resources: { 'type': 'array', 'itemType': ValidateTemplateResponseBodyResources },
      updateInfo: ValidateTemplateResponseBodyUpdateInfo,
    };
  }

  validate() {
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(this.resourceTypes && typeof (this.resourceTypes as any).validate === 'function') {
      (this.resourceTypes as any).validate();
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    if(this.updateInfo && typeof (this.updateInfo as any).validate === 'function') {
      (this.updateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

