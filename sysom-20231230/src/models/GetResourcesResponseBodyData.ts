// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2354
   */
  total?: number;
  /**
   * @example
   * Kbytes
   */
  unit?: string;
  /**
   * @example
   * 100
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      total: 'total',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

