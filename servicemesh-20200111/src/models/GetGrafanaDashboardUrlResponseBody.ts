// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGrafanaDashboardUrlResponseBodyDashboards extends $dara.Model {
  /**
   * @remarks
   * The name of the dashboard.
   * 
   * @example
   * Cloud ASM Istio Http Gateway
   */
  title?: string;
  /**
   * @remarks
   * The URL of the dashboard.
   * 
   * @example
   * https://g.console.aliyun.com/d/181863583797****-14651340-200-2/alibaba-cloud-mesh-service?orgId=32****&refresh=60s
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrafanaDashboardUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the dashboard.
   */
  dashboards?: GetGrafanaDashboardUrlResponseBodyDashboards[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 76DBB8A0-5AA6-5A56-9A8A-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboards: 'Dashboards',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboards: { 'type': 'array', 'itemType': GetGrafanaDashboardUrlResponseBodyDashboards },
      requestId: 'string',
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

