// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsShrinkRequestMonthDesktopSetting extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  buyerId?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  desktopId?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  useDuration?: number;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      desktopId: 'DesktopId',
      useDuration: 'UseDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'number',
      desktopId: 'string',
      useDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

