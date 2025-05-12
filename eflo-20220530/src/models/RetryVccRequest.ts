// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryVccRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

