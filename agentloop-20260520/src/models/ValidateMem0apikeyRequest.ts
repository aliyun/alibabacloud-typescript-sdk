// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateMem0APIKeyRequest extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

