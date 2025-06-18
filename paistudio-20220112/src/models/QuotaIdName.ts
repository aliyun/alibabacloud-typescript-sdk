// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaIdName extends $dara.Model {
  /**
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @example
   * dlc-quota
   */
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      quotaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

