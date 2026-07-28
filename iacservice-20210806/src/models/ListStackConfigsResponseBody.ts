// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackConfigsResponseBodyConfigsComponentConfigComponent extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * log
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackConfigsResponseBodyConfigsComponentConfigOutput extends $dara.Model {
  /**
   * @remarks
   * The output description.
   * 
   * @example
   * the name of sls project
   */
  description?: string;
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * project_name
   */
  name?: string;
  /**
   * @remarks
   * The output type.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The output value.
   * 
   * @example
   * log-test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'string',
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

export class ListStackConfigsResponseBodyConfigsComponentConfigVariable extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * ap-southeast-3
   */
  default?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * region of sls project
   */
  description?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * region
   */
  name?: string;
  sensitive?: boolean;
  /**
   * @remarks
   * The variable type, such as:
   * - string
   * - list(string)
   * - map(string).
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      description: 'description',
      name: 'name',
      sensitive: 'sensitive',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'string',
      description: 'string',
      name: 'string',
      sensitive: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackConfigsResponseBodyConfigsComponentConfig extends $dara.Model {
  /**
   * @remarks
   * The list of components.
   */
  component?: ListStackConfigsResponseBodyConfigsComponentConfigComponent[];
  /**
   * @remarks
   * The list of component outputs.
   */
  output?: ListStackConfigsResponseBodyConfigsComponentConfigOutput[];
  /**
   * @remarks
   * The list of component variables.
   */
  variable?: ListStackConfigsResponseBodyConfigsComponentConfigVariable[];
  static names(): { [key: string]: string } {
    return {
      component: 'component',
      output: 'output',
      variable: 'variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': ListStackConfigsResponseBodyConfigsComponentConfigComponent },
      output: { 'type': 'array', 'itemType': ListStackConfigsResponseBodyConfigsComponentConfigOutput },
      variable: { 'type': 'array', 'itemType': ListStackConfigsResponseBodyConfigsComponentConfigVariable },
    };
  }

  validate() {
    if(Array.isArray(this.component)) {
      $dara.Model.validateArray(this.component);
    }
    if(Array.isArray(this.output)) {
      $dara.Model.validateArray(this.output);
    }
    if(Array.isArray(this.variable)) {
      $dara.Model.validateArray(this.variable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackConfigsResponseBodyConfigsDeploymentConfigDeployment extends $dara.Model {
  /**
   * @remarks
   * The deployment name.
   * 
   * @example
   * production
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackConfigsResponseBodyConfigsDeploymentConfigPublishOutput extends $dara.Model {
  /**
   * @remarks
   * The output description.
   * 
   * @example
   * the name of sls project
   */
  description?: string;
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * project_name
   */
  name?: string;
  /**
   * @remarks
   * The actual output value after the stack deployment is complete.
   * 
   * @example
   * log-test
   */
  result?: string;
  /**
   * @remarks
   * The output type, such as string or list(string).
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The original definition of the output value. Currently, string or list(string) is supported. You can reference a deployment output in the format: deployment.{deploymentName}.{deploymentOutputName}.
   * 
   * @example
   * deployment.production.project_name
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      result: 'result',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      result: 'string',
      type: 'string',
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

export class ListStackConfigsResponseBodyConfigsDeploymentConfigUpstreamInput extends $dara.Model {
  /**
   * @remarks
   * The input name.
   * 
   * @example
   * network
   */
  name?: string;
  /**
   * @remarks
   * The input source. Currently, only an upstream stack can be specified. The format is {iacEndpoint}/{accountId}/{upstreamStackName}.
   * 
   * @example
   * IacEndpoint/156718871222312/stack_network
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackConfigsResponseBodyConfigsDeploymentConfig extends $dara.Model {
  /**
   * @remarks
   * The list of deployments.
   */
  deployment?: ListStackConfigsResponseBodyConfigsDeploymentConfigDeployment[];
  /**
   * @remarks
   * The list of outputs.
   */
  publishOutput?: ListStackConfigsResponseBodyConfigsDeploymentConfigPublishOutput[];
  /**
   * @remarks
   * The list of upstream inputs.
   */
  upstreamInput?: ListStackConfigsResponseBodyConfigsDeploymentConfigUpstreamInput[];
  static names(): { [key: string]: string } {
    return {
      deployment: 'deployment',
      publishOutput: 'publishOutput',
      upstreamInput: 'upstreamInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployment: { 'type': 'array', 'itemType': ListStackConfigsResponseBodyConfigsDeploymentConfigDeployment },
      publishOutput: { 'type': 'array', 'itemType': ListStackConfigsResponseBodyConfigsDeploymentConfigPublishOutput },
      upstreamInput: { 'type': 'array', 'itemType': ListStackConfigsResponseBodyConfigsDeploymentConfigUpstreamInput },
    };
  }

  validate() {
    if(Array.isArray(this.deployment)) {
      $dara.Model.validateArray(this.deployment);
    }
    if(Array.isArray(this.publishOutput)) {
      $dara.Model.validateArray(this.publishOutput);
    }
    if(Array.isArray(this.upstreamInput)) {
      $dara.Model.validateArray(this.upstreamInput);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The component configuration.
   */
  componentConfig?: ListStackConfigsResponseBodyConfigsComponentConfig;
  /**
   * @remarks
   * The content of the component configuration.
   * 
   * @example
   * format_version: IaCService/2021-08-06\\ndescription: create ALB \\nvariable:\\n  - name: region\\n    type: string\\n ...
   */
  componentContent?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-08-15T16:14:06Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deployment configuration.
   */
  deploymentConfig?: ListStackConfigsResponseBodyConfigsDeploymentConfig;
  /**
   * @remarks
   * The content of the deployment configuration.
   * 
   * @example
   * format_version: IaCService/2021-08-06\\ndescription: create ALB\\nupstream_input:\\n  - name: stack_network\\n ...
   */
  deploymentContent?: string;
  failedReason?: string;
  /**
   * @remarks
   * The status of the stack configuration.
   * | Name | Description |
   * |------|------|
   * | Creating | Being created. |
   * | Created | Created. |
   * | Waiting | Waiting for deployment. |
   * | Deploying | Being deployed. |
   * | Deployed | Deployed. |
   * | Errored | Deployment failed. |
   * | Deleting | Being deleted. |
   * | Deleted | Deleted. |
   * | DeleteFailed | Deletion failed. |
   * | DetectTriggered | Drift detection triggered. |.
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The configuration version number, such as v1. The initial value is v1. The version number increments each time the stack is updated or refreshed and the configuration changes.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentConfig: 'componentConfig',
      componentContent: 'componentContent',
      createTime: 'createTime',
      deploymentConfig: 'deploymentConfig',
      deploymentContent: 'deploymentContent',
      failedReason: 'failedReason',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentConfig: ListStackConfigsResponseBodyConfigsComponentConfig,
      componentContent: 'string',
      createTime: 'string',
      deploymentConfig: ListStackConfigsResponseBodyConfigsDeploymentConfig,
      deploymentContent: 'string',
      failedReason: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.componentConfig && typeof (this.componentConfig as any).validate === 'function') {
      (this.componentConfig as any).validate();
    }
    if(this.deploymentConfig && typeof (this.deploymentConfig as any).validate === 'function') {
      (this.deploymentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of stack configurations.
   */
  configs?: ListStackConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 24
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the current call starts reading. An empty value indicates that all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * jIFUaFVhy2VD6whh5GaY854dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9BEDBCF8-03BE-5A59-AC93-9263942B37E8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the request conditions. This parameter is optional and may not be returned by default.
   * 
   * @example
   * 43
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListStackConfigsResponseBodyConfigs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

