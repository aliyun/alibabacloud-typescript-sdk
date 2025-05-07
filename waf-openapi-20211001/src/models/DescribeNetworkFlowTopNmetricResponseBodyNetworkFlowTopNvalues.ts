// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues extends $dara.Model {
  /**
   * @remarks
   * Returns additional information, such as the country, province, or city to which an IP address belongs.
   * 
   * @example
   * ""
   */
  attribute?: string;
  /**
   * @remarks
   * The value of this field varies depending on the queried Metric.
   * 
   * @example
   * 127.0.0.1
   */
  name?: string;
  /**
   * @remarks
   * Counts for top ranking.
   * 
   * @example
   * 1123
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

