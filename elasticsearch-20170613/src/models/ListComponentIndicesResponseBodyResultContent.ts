// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComponentIndicesResponseBodyResultContentTemplate } from "./ListComponentIndicesResponseBodyResultContentTemplate";


export class ListComponentIndicesResponseBodyResultContent extends $dara.Model {
  /**
   * @example
   * { "description": "set number of shards to one" }
   */
  meta?: { [key: string]: any };
  template?: ListComponentIndicesResponseBodyResultContentTemplate;
  /**
   * @example
   * 0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      meta: '_meta',
      template: 'template',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      template: ListComponentIndicesResponseBodyResultContentTemplate,
      version: 'number',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

