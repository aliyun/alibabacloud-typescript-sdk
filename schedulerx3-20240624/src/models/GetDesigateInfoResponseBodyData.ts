// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesigateInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  designateType?: number;
  /**
   * @example
   * true
   */
  transferable?: boolean;
  static names(): { [key: string]: string } {
    return {
      designateType: 'DesignateType',
      transferable: 'Transferable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateType: 'number',
      transferable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

