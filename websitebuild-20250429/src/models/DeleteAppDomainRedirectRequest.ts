// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppDomainRedirectRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * 803858889404426240
   */
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      recordId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

