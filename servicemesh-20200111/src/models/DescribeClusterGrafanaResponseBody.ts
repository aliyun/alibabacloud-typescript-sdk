// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterGrafanaResponseBodyDashboards extends $dara.Model {
  /**
   * @remarks
   * The title of the Grafana dashboard.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The endpoint of the Grafana dashboard.
   * 
   * @example
   * test.com
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

export class DescribeClusterGrafanaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about Grafana dashboards.
   */
  dashboards?: DescribeClusterGrafanaResponseBodyDashboards[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
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
      dashboards: { 'type': 'array', 'itemType': DescribeClusterGrafanaResponseBodyDashboards },
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

