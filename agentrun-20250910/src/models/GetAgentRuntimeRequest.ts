// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * Agent Runtime Version
   * 
   * @example
   * v1.0.0
   */
  agentRuntimeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeVersion: 'agentRuntimeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

