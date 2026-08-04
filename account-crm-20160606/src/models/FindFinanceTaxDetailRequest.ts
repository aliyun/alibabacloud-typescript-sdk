// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindFinanceTaxDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  kpId?: number;
  static names(): { [key: string]: string } {
    return {
      kpId: 'KpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kpId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

