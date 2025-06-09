// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDashboardResponseBodyDashboardItems } from "./ListDashboardResponseBodyDashboardItems";


export class ListDashboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the dashboard.
   */
  dashboardItems?: ListDashboardResponseBodyDashboardItems[];
  /**
   * @remarks
   * The queried dashboards. Each dashboard in the array is specified by dashboardName.
   */
  dashboards?: string[];
  static names(): { [key: string]: string } {
    return {
      dashboardItems: 'dashboardItems',
      dashboards: 'dashboards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardItems: { 'type': 'array', 'itemType': ListDashboardResponseBodyDashboardItems },
      dashboards: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dashboardItems)) {
      $dara.Model.validateArray(this.dashboardItems);
    }
    if(Array.isArray(this.dashboards)) {
      $dara.Model.validateArray(this.dashboards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

