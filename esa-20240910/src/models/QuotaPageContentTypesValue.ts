// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";


export class QuotaPageContentTypesValue extends $dara.Model {
  /**
   * @remarks
   * The switch for the Content-Type type in custom response pages.
   */
  enable?: boolean;
  /**
   * @remarks
   * The content length quota for the Content-Type in custom response pages.
   */
  contentLength?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      contentLength: 'ContentLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      contentLength: WafQuotaInteger,
    };
  }

  validate() {
    if(this.contentLength && typeof (this.contentLength as any).validate === 'function') {
      (this.contentLength as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

