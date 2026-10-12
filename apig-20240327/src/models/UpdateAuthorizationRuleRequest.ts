// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The new list of authorized resources. In MCP Tool scenarios, this is a set of tool names. An empty array returns ErrInvalidParameterWithEmpty.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

