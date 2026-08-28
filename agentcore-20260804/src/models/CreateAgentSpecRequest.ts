// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSpecRequestBody extends $dara.Model {
  /**
   * @remarks
   * The unique name of the AgentSpec.
   * 
   * This parameter is required.
   * 
   * @example
   * my-worker
   */
  agentSpecName?: string;
  /**
   * @remarks
   * The draft version number. If not specified, the default value is 0.0.1.
   * 
   * @example
   * 0.0.1
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpecName: 'agentSpecName',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpecName: 'string',
      targetVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateAgentSpecRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateAgentSpecRequestBody,
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

