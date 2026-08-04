// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Quota ID.
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F2D0392B-D749-5C48-A98A-3FAE5C9444A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

