// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataTotalStatValue extends $dara.Model {
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * The proportion.
   * 
   * @example
   * 12.50%
   */
  share?: string;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      share: 'Share',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      share: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

