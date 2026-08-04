// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaIdName extends $dara.Model {
  /**
   * @remarks
   * Resource quota ID
   * 
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @remarks
   * Resource quota name
   * 
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

