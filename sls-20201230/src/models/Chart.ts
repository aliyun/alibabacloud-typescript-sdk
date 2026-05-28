// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Chart extends $dara.Model {
  /**
   * @remarks
   * The action.
   * 
   * This parameter is required.
   */
  action?: { [key: string]: any };
  /**
   * @remarks
   * The display configuration of the chart.
   * 
   * This parameter is required.
   */
  display?: { [key: string]: any };
  /**
   * @remarks
   * The query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * (*)| SELECT date_format(__time__ - __time__ % 60, \\"%H:%i:%s\\") as time, count(1) as count GROUP BY time ORDER BY time
   */
  search?: { [key: string]: any };
  /**
   * @remarks
   * The title of the chart.
   * 
   * This parameter is required.
   * 
   * @example
   * my-chart
   */
  title?: string;
  /**
   * @remarks
   * The type of the chart.
   * 
   * This parameter is required.
   * 
   * @example
   * linepro
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      display: 'display',
      search: 'search',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      display: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      search: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.action) {
      $dara.Model.validateMap(this.action);
    }
    if(this.display) {
      $dara.Model.validateMap(this.display);
    }
    if(this.search) {
      $dara.Model.validateMap(this.search);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

