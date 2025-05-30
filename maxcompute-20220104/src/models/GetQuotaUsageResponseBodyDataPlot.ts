// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaUsageResponseBodyDataPlot extends $dara.Model {
  /**
   * @remarks
   * The title of the chart.
   * 
   * @example
   * request
   */
  title?: string;
  /**
   * @remarks
   * The type of the chart.
   * 
   * @example
   * request
   */
  type?: string;
  /**
   * @remarks
   * The data metric field.
   */
  yAxis?: string[];
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      type: 'type',
      yAxis: 'yAxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      type: 'string',
      yAxis: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.yAxis)) {
      $dara.Model.validateArray(this.yAxis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

