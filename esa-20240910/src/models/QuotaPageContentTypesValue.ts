// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";


export class QuotaPageContentTypesValue extends $dara.Model {
  /**
   * @remarks
   * Whether the Content-Type is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The maximum content length for this Content-Type.
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

