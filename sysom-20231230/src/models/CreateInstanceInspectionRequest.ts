// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceInspectionRequest extends $dara.Model {
  /**
   * @example
   * i-2ze5ru5rjurix7f71sxv
   */
  instance?: string;
  items?: string[];
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      items: 'items',
      region: 'region',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

