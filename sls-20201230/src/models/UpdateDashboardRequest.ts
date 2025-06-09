// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Chart } from "./Chart";


export class UpdateDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute values of the dashboard.
   */
  attribute?: { [key: string]: string };
  /**
   * @remarks
   * The charts on the dashboard.
   * 
   * This parameter is required.
   */
  charts?: Chart[];
  /**
   * @remarks
   * The name of the dashboard.
   * 
   * This parameter is required.
   * 
   * @example
   * dashboard-1609294922657-434834
   */
  dashboardName?: string;
  /**
   * @remarks
   * The description of the dashboard.
   * 
   * @example
   * test dashboard.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the dashboard.
   * 
   * This parameter is required.
   * 
   * @example
   * Method pv
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

