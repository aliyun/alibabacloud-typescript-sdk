// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaPageContentTypesValue } from "./QuotaPageContentTypesValue";
import { WafQuotaInteger } from "./WafQuotaInteger";


export class GetWafQuotaResponseBodyQuotaPage extends $dara.Model {
  /**
   * @remarks
   * An object containing quota information for each Content-Type in custom response pages.
   */
  contentTypes?: { [key: string]: QuotaPageContentTypesValue };
  /**
   * @remarks
   * Indicates whether the custom response page is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The total number quota allowed for custom response pages.
   */
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      contentTypes: 'ContentTypes',
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypes: { 'type': 'map', 'keyType': 'string', 'valueType': QuotaPageContentTypesValue },
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.contentTypes) {
      $dara.Model.validateMap(this.contentTypes);
    }
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

