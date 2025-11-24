// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards extends $dara.Model {
  /**
   * @remarks
   * The title of the dashboard.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The URL of a dashboard.
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

export class DescribeGuestClusterAccessLogDashboardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access log dashboards of the cluster on the data plane.
   */
  dashboards?: DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards[];
  /**
   * @remarks
   * The ID of the cluster on the data plane.
   * 
   * @example
   * ce3c25e247da24f3aab9b7edfae83****
   */
  k8sClusterId?: string;
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
      k8sClusterId: 'K8sClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboards: { 'type': 'array', 'itemType': DescribeGuestClusterAccessLogDashboardsResponseBodyDashboards },
      k8sClusterId: 'string',
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

