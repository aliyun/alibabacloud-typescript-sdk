// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafTemplateRulesRequestQueryArgs extends $dara.Model {
  kinds?: string[];
  /**
   * @remarks
   * Rule type.
   * 
   * @example
   * http_directory_traversal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      kinds: 'Kinds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kinds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kinds)) {
      $dara.Model.validateArray(this.kinds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

