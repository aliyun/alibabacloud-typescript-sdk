// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRenewalRateListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025Q4
   */
  fiscalYearAndQuarter?: string;
  static names(): { [key: string]: string } {
    return {
      fiscalYearAndQuarter: 'FiscalYearAndQuarter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fiscalYearAndQuarter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

