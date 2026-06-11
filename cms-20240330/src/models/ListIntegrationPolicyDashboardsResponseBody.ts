// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyDashboardsResponseBodyDashboards extends $dara.Model {
  /**
   * @remarks
   * The dashboard engine. Valid values:
   * grafana: shared Grafana.
   * cms: the self-developed dashboard engine of CloudMonitor.
   * 
   * @example
   * grafana
   */
  engine?: string;
  /**
   * @remarks
   * The UID of the dashboard folder.
   * 
   * @example
   * Env-AAA
   */
  folderUid?: string;
  /**
   * @remarks
   * The dashboard name.
   * 
   * @example
   * k8s-pod
   */
  name?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hongkong
   */
  region?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The title of the UI module. This is different from the name parameter.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The ID of the current Alibaba Cloud account. This parameter is read-only.
   * 
   * @example
   * 1258199346721590
   */
  uid?: string;
  /**
   * @remarks
   * The webhook URL for PagerDuty integration. V1 and V2 are supported.
   * 
   * @example
   * https://agi.alicdn.com/user/0/0_0_5255362686.png?x-oss-process=image/quality,q_75/format,jpg&file=1734574878007.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'engine',
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
      engine: 'string',
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
  /**
   * @remarks
   * The list of dashboards.
   */
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
   * @remarks
   * The number of components.
   * 
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

