// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkAgentRunParametersBody extends $dara.Model {
  /**
   * @remarks
   * The transformation format. Default value: CONSTANT. Valid values: ORIGINAL, TEMPLATE. Example: `ORIGINAL`.
   * 
   * @example
   * ORIGINAL
   */
  form?: string;
  /**
   * @remarks
   * The template pattern. This parameter is required only when Form is set to TEMPLATE. It supports ${variable} placeholder replacement. Example: `The value of ${key} is ${value}!`.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The parameter value. In ORIGINAL mode, the value is $. In TEMPLATE mode, the value is a key-value mapping in JSON format, where the value is a JSONPath expression or a constant. Example: `$`.
   * 
   * @example
   * $
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkAgentRunParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentRun agent runtime. You can obtain it from the Alibaba Cloud AgentRun console.
   * 
   * @example
   * agent-demo-example
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * The triplet configuration for the Body parameter template. It defines the data transformation method and supports two modes: ORIGINAL (pass-through) and TEMPLATE (template replacement).
   */
  body?: SinkAgentRunParametersBody;
  /**
   * @remarks
   * The endpoint name of the AgentRun agent runtime, which is used to construct the invocation URL.
   * 
   * @example
   * default
   */
  endpointName?: string;
  /**
   * @remarks
   * The name of the AgentRun agent role.
   * 
   * @example
   * example-agent-role
   */
  roleName?: string;
  /**
   * @remarks
   * The HTTP request timeout period in milliseconds. Default value: 30000.
   * 
   * @example
   * 30000
   */
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'AgentRuntimeName',
      body: 'Body',
      endpointName: 'EndpointName',
      roleName: 'RoleName',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeName: 'string',
      body: SinkAgentRunParametersBody,
      endpointName: 'string',
      roleName: 'string',
      timeout: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

