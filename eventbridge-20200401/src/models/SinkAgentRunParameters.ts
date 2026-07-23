// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkAgentRunParametersBody extends $dara.Model {
  form?: string;
  template?: string;
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
  agentRuntimeName?: string;
  body?: SinkAgentRunParametersBody;
  endpointName?: string;
  roleName?: string;
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

