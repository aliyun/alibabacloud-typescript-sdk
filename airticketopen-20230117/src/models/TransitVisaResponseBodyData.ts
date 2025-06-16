// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransitVisaResponseBodyData extends $dara.Model {
  /**
   * @example
   * HGH
   */
  cityCode?: string;
  /**
   * @example
   * 1
   */
  visaType?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      visaType: 'visa_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      visaType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

