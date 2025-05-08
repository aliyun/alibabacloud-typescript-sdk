// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTopDataResponseBodyDataDetailData extends $dara.Model {
  /**
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
   * @example
   * 123
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      dimensionValue: 'DimensionValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionValue: 'string',
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

