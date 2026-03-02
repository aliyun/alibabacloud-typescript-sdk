// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppConfigMapping } from "./AppConfigMapping";


export class MobiPluginConfig extends $dara.Model {
  /**
   * @example
   * {}
   */
  content?: string;
  mappings?: AppConfigMapping[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      mappings: 'mappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mappings: { 'type': 'array', 'itemType': AppConfigMapping },
    };
  }

  validate() {
    if(Array.isArray(this.mappings)) {
      $dara.Model.validateArray(this.mappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

