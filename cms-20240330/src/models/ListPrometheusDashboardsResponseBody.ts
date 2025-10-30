// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusDashboardsResponseBodyPrometheusDashboards extends $dara.Model {
  /**
   * @remarks
   * Dashboard ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Dashboard name.
   * 
   * @example
   * pod
   */
  name?: string;
  /**
   * @remarks
   * Tags.
   */
  tags?: string[];
  /**
   * @remarks
   * Dashboard title.
   * 
   * @example
   * ceshi
   */
  title?: string;
  /**
   * @remarks
   * Dashboard UID.
   * 
   * @example
   * 1987395500251724
   */
  uid?: string;
  /**
   * @remarks
   * Dashboard URL address.
   * 
   * @example
   * https://gnew.console.aliyun.com/d/xxx-17460385-807-7-6/cs-cost-application
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      tags: 'tags',
      title: 'title',
      uid: 'uid',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      uid: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusDashboardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of Prometheus instance dashboards.
   */
  prometheusDashboards?: ListPrometheusDashboardsResponseBodyPrometheusDashboards[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of instances
   * 
   * @example
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      prometheusDashboards: 'prometheusDashboards',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusDashboards: { 'type': 'array', 'itemType': ListPrometheusDashboardsResponseBodyPrometheusDashboards },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prometheusDashboards)) {
      $dara.Model.validateArray(this.prometheusDashboards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

