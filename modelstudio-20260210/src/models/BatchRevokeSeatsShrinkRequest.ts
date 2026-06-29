// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRevokeSeatsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of revocation items. This parameter is required.
   */
  itemsShrink?: string;
  /**
   * @remarks
   * The language. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  static names(): { [key: string]: string } {
    return {
      itemsShrink: 'Items',
      locale: 'Locale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemsShrink: 'string',
      locale: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

