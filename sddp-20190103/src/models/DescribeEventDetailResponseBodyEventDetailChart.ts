// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventDetailResponseBodyEventDetailChartData } from "./DescribeEventDetailResponseBodyEventDetailChartData";


export class DescribeEventDetailResponseBodyEventDetailChart extends $dara.Model {
  /**
   * @remarks
   * The type of the chart. Valid values:
   * 
   * *   **1**: column chart
   * *   **2**: line chart
   * 
   * >This field will be returned only when NewAlarm is true.
   * 
   * @example
   * 1
   */
  chatType?: number;
  /**
   * @remarks
   * The data in the baseline behavior profile of the anomalous event.
   */
  data?: DescribeEventDetailResponseBodyEventDetailChartData;
  /**
   * @remarks
   * The name of the baseline behavior chart of the anomalous event.
   * 
   * @example
   * Baseline behavior chart
   */
  label?: string;
  /**
   * @remarks
   * Icon title.
   * 
   * >This field will be returned only when NewAlarm is true.
   * 
   * @example
   * misskingm
   */
  name?: string;
  /**
   * @remarks
   * The type of the chart. Valid values:
   * 
   * *   **1**: column chart
   * *   **2**: line chart
   * 
   * @example
   * 1
   */
  type?: string;
  /**
   * @remarks
   * The descriptive label of data items on the X axis.
   * 
   * @example
   * Number of days
   */
  XLabel?: string;
  /**
   * @remarks
   * The descriptive label of data items on the Y axis.
   * 
   * @example
   * Value
   */
  YLabel?: string;
  /**
   * @remarks
   * The descriptive label of data items on the Z axis.
   * 
   * >This field will be returned only when NewAlarm is true.
   * 
   * @example
   * chart description
   */
  ZLabel?: string;
  static names(): { [key: string]: string } {
    return {
      chatType: 'ChatType',
      data: 'Data',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      XLabel: 'XLabel',
      YLabel: 'YLabel',
      ZLabel: 'ZLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatType: 'number',
      data: DescribeEventDetailResponseBodyEventDetailChartData,
      label: 'string',
      name: 'string',
      type: 'string',
      XLabel: 'string',
      YLabel: 'string',
      ZLabel: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

