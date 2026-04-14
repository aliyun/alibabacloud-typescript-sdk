// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackConfigsResponseBodyConfigsComponentConfigComponent extends $dara.Model {
  /**
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
   * @example
   * the name of sls project
   */
  description?: string;
  /**
   * @example
   * project_name
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
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
   * @example
   * ap-southeast-3
   */
  default?: string;
  /**
   * @example
   * region of sls project
   */
  description?: string;
  /**
   * @example
   * region
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      description: 'description',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'string',
      description: 'string',
      name: 'string',
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
  component?: ListStackConfigsResponseBodyConfigsComponentConfigComponent[];
  output?: ListStackConfigsResponseBodyConfigsComponentConfigOutput[];
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
   * @example
   * the name of sls project
   */
  description?: string;
  /**
   * @example
   * project_name
   */
  name?: string;
  /**
   * @example
   * log-test
   */
  result?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
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
   * @example
   * network
   */
  name?: string;
  /**
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
  deployment?: ListStackConfigsResponseBodyConfigsDeploymentConfigDeployment[];
  publishOutput?: ListStackConfigsResponseBodyConfigsDeploymentConfigPublishOutput[];
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
  componentConfig?: ListStackConfigsResponseBodyConfigsComponentConfig;
  /**
   * @example
   * format_version: IaCService/2021-08-06\\ndescription: create ALB \\nvariable:\\n  - name: region\\n    type: string\\n ...
   */
  componentContent?: string;
  /**
   * @example
   * 2025-08-15T16:14:06Z
   */
  createTime?: string;
  deploymentConfig?: ListStackConfigsResponseBodyConfigsDeploymentConfig;
  /**
   * @example
   * format_version: IaCService/2021-08-06\\ndescription: create ALB\\nupstream_input:\\n  - name: stack_network\\n ...
   */
  deploymentContent?: string;
  /**
   * @example
   * Deployed
   */
  status?: string;
  /**
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
  configs?: ListStackConfigsResponseBodyConfigs[];
  /**
   * @example
   * 24
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jIFUaFVhy2VD6whh5GaY854dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * 9BEDBCF8-03BE-5A59-AC93-9263942B37E8
   */
  requestId?: string;
  /**
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

