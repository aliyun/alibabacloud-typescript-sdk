// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Quota Id
   * 
   * @example
   * quota-20210126170216-mtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @example
   * 96496E6E-00B4-5F55-80F6-1844FA9E92DC
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

