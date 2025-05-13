// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUmodelRequestCommonSchemaRef extends $dara.Model {
  /**
   * @example
   * test-bmp-123123
   */
  group?: string;
  items?: string[];
  /**
   * @example
   * 2.5.
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      items: 'items',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
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

