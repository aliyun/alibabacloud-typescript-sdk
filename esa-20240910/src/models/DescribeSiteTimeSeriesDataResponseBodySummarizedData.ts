// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTimeSeriesDataResponseBodySummarizedData extends $dara.Model {
  /**
   * @example
   * sum
   */
  aggMethod?: string;
  /**
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
   * @example
   * Traffic
   */
  fieldName?: string;
  /**
   * @example
   * 12345
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      aggMethod: 'AggMethod',
      dimensionName: 'DimensionName',
      dimensionValue: 'DimensionValue',
      fieldName: 'FieldName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggMethod: 'string',
      dimensionName: 'string',
      dimensionValue: 'string',
      fieldName: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

