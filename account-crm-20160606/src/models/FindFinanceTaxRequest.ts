// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindFinanceTaxRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  HId?: number;
  taxVersion?: string;
  static names(): { [key: string]: string } {
    return {
      HId: 'HId',
      taxVersion: 'TaxVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HId: 'number',
      taxVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

