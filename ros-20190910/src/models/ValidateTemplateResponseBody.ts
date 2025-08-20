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
   * The DataSource resource types that are used in the template. The value is deduplicated.
   */
  dataSources?: string[];
  /**
   * @remarks
   * The regular resource types that are used in the template. The value is deduplicated.
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
   * The pattern in which the logical IDs of regular resources are formed.
   * 
   * If resources are defined in a ROS template, the following rules apply:
   * 
   * *   Resource whose definition does not contain `Count`: If the resource name defined in the template is `server`, the values of LogicalResourceIdPattern and `ResourcePath` are both `server`.``
   * *   Resource whose definition contains `Count`: If the resource name defined in the template is `server`, the value of LogicalResourceIdPattern is `server[*]`, and the value of `ResourcePath` is `server`.
   * 
   * If resources and [modules](https://www.terraform.io/language/modules) are defined in a Terraform template, the following rules apply:
   * 
   * *   Resource and module whose definitions do not contain [`count`](https://www.terraform.io/language/meta-arguments/count) or [`for_each`](https://www.terraform.io/language/meta-arguments/for_each): If the resource name defined in the template is `server`, the values of LogicalResourceIdPattern and `ResourcePath` are both `server`.``
   * *   Resource and module whose definitions contain [`count`](https://www.terraform.io/language/meta-arguments/count) or [`for_each`](https://www.terraform.io/language/meta-arguments/for_each): If the resource name defined in the template is `server`, the value of LogicalResourceIdPattern is `server[*]`, and the value of `ResourcePath` is `server`.
   * 
   * Examples of LogicalResourceIdPattern for resources in a Terraform template:
   * 
   * *   Valid values of LogicalResourceIdPattern if a resource belongs to the root module:
   * 
   *     *   `server`: In this case, `count` and `for_each` are not contained in the resource. The value of `ResourcePath` is `server`.
   *     *   `server[*]`: In this case, `count` or `for_each` is contained in the resource. The value of `ResourcePath` is `server`.
   * 
   * *   Valid values of LogicalResourceIdPattern if a resource belongs to a child module:
   * 
   *     *   `app.server`: In this case, `count` and `for_each` are not contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.server`.````
   *     *   `app.server[*]`: In this case, `count` or `for_each` is contained in the `server` resource, but `count` and `for_each` are not contained in the `app` module. The value of `ResourcePath` is `app.server`.
   *     *   `app[*].server`: In this case, `count` or `for_each` is contained in the `app` module, but `count` and `for_each` are not contained in the `server` resource. The value of `ResourcePath` is `app.server`.
   *     *   `app[*].server[*]`: In this case, `count` or `for_each` is contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.server`.````
   *     *   `app.app_group[*].server`: In this case, `count` or `for_each` is contained in the `app_group` module, but `count` and `for_each` are not contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.app_group.server`. The `app_group` module is a child module of the `app` module.````
   * 
   * @example
   * server
   */
  logicalResourceIdPattern?: string;
  /**
   * @remarks
   * The path of the regular resource. In most cases, the path of a regular resource is the same as the resource name.
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
   * The parameters that can be modified.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources.
   * 
   * > -  This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > -  This parameter is valid only for updates on ROS stacks.
   */
  parametersCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions under specific conditions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersConditionallyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources under specific conditions.
   * 
   * > - This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersConditionallyCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified.
   */
  parametersNotAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under uncertain conditions.
   */
  parametersUncertainlyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions under uncertain conditions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersUncertainlyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources under uncertain conditions.
   * 
   * > -  This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > -  This parameter is valid only for updates on ROS stacks.
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
   * The description of the template.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The outputs of the template.
   */
  outputs?: ValidateTemplateResponseBodyOutputs[];
  /**
   * @remarks
   * The parameters that are defined in the Parameters section of the template.
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
   * The resource types that are used in the template.
   */
  resourceTypes?: ValidateTemplateResponseBodyResourceTypes;
  /**
   * @remarks
   * The regular resources that are defined in the template.
   * 
   * > - For a Resource Orchestration Service (ROS) template, the resource whose definition contains `Count` is not displayed as a list.
   * > -  For a Terraform template, the resource whose definition contains `count` or `for_each` is not displayed as a list.
   */
  resources?: ValidateTemplateResponseBodyResources[];
  /**
   * @remarks
   * The information about the stack update. This parameter cannot be returned if the value of UpdateInfoOptions contains Disabled.
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

