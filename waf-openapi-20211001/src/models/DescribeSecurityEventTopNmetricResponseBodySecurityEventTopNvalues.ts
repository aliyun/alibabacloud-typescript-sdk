// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues extends $dara.Model {
  /**
   * @remarks
   * The additional information, such as the protection module for a protection rule whose ID is returned.
   * 
   * @example
   * waf_base
   */
  attribute?: string;
  /**
   * @remarks
   * The field value, which varies based on the metric.
   * 
   * @example
   * 10000
   */
  name?: string;
  /**
   * @remarks
   * The count for the data entry.
   * 
   * @example
   * 1111
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      name: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

