// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Chart } from "./Chart";


export class Dashboard extends $dara.Model {
  attribute?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  charts?: Chart[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dashboard-1609294922657-434834
   */
  dashboardName?: string;
  /**
   * @example
   * 这是一个仪表盘。
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-alert
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      charts: 'charts',
      dashboardName: 'dashboardName',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      charts: { 'type': 'array', 'itemType': Chart },
      dashboardName: 'string',
      description: 'string',
      displayName: 'string',
    };
  }

  validate() {
    if(this.attribute) {
      $dara.Model.validateMap(this.attribute);
    }
    if(Array.isArray(this.charts)) {
      $dara.Model.validateArray(this.charts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

