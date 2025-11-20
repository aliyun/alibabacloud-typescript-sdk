// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateTemplateMCPRequest extends $dara.Model {
  enabledTools?: string[];
  /**
   * @example
   * streamable-http
   */
  transport?: string;
  static names(): { [key: string]: string } {
    return {
      enabledTools: 'enabledTools',
      transport: 'transport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledTools: { 'type': 'array', 'itemType': 'string' },
      transport: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enabledTools)) {
      $dara.Model.validateArray(this.enabledTools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

