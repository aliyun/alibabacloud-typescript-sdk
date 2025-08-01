// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversionDataRequest extends $dara.Model {
  /**
   * @remarks
   * Conversion rate monitoring return value.
   * 
   * >  The value of this parameter is of type double, and the value is between [0,1].
   * 
   * This parameter is required.
   * 
   * @example
   * 0.53
   */
  conversionRate?: string;
  /**
   * @remarks
   * Timestamp of the conversion rate observation should be a Unix timestamp, a millisecond-level long integer.
   * 
   * >  If this field is not specified: the current timestamp is the default.
   * 
   * @example
   * 1349055900000
   */
  reportTime?: number;
  static names(): { [key: string]: string } {
    return {
      conversionRate: 'ConversionRate',
      reportTime: 'ReportTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionRate: 'string',
      reportTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

