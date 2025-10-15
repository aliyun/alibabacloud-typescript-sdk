// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyDashboardsResponseBodyDashboards extends $dara.Model {
  folderUid?: string;
  name?: string;
  region?: string;
  tags?: string[];
  title?: string;
  uid?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      folderUid: 'folderUid',
      name: 'name',
      region: 'region',
      tags: 'tags',
      title: 'title',
      uid: 'uid',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderUid: 'string',
      name: 'string',
      region: 'string',
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

export class ListIntegrationPolicyDashboardsResponseBody extends $dara.Model {
  dashboards?: ListIntegrationPolicyDashboardsResponseBodyDashboards[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dashboards: 'dashboards',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboards: { 'type': 'array', 'itemType': ListIntegrationPolicyDashboardsResponseBodyDashboards },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dashboards)) {
      $dara.Model.validateArray(this.dashboards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

