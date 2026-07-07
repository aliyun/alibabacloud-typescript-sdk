// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaString } from "./WafQuotaString";


export class QuotaListItemsValue extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the corresponding custom list item type is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The format restriction for the corresponding item type in custom lists.
   */
  value?: WafQuotaString;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      value: WafQuotaString,
    };
  }

  validate() {
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

