// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataToolSpecToolsMetaValue extends $dara.Model {
  /**
   * @example
   * true
   */
  enabled?: boolean;
  templates?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      templates: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.templates) {
      $dara.Model.validateMap(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

