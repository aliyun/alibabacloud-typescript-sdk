// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems extends $dara.Model {
  /**
   * @remarks
   * Carbon emissions.
   * 
   * @example
   * 20.22
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The month.
   * 
   * @example
   * 11
   */
  month?: number;
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      month: 'month',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      month: 'number',
      year: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

