// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDashboardResponseBodyDashboardItems extends $dara.Model {
  /**
   * @remarks
   * The dashboard ID. The ID must be unique in a project. Fuzzy search is supported. For example, if you enter da, all dashboards whose IDs start with da are queried.
   * 
   * @example
   * dashboard-1609294922657-434834
   */
  dashboardName?: string;
  description?: string;
  /**
   * @remarks
   * The display name of the dashboard.
   * 
   * @example
   * data-ingest
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardName: 'dashboardName',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardName: 'string',
      description: 'string',
      displayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

