// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  renderTemplate?: boolean;
  values?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      renderTemplate: 'RenderTemplate',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderTemplate: 'boolean',
      values: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.values) {
      $dara.Model.validateMap(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

