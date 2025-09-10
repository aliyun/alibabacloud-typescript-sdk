// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusDashboardsResponseBodyPrometheusDashboards extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * pod
   */
  name?: string;
  tags?: string[];
  /**
   * @example
   * ceshi
   */
  title?: string;
  /**
   * @example
   * 1987395500251724
   */
  uid?: string;
  /**
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
  prometheusDashboards?: ListPrometheusDashboardsResponseBodyPrometheusDashboards[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
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

