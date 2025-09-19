// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerScanConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of container applications in the cluster.
   * 
   * @example
   * 100
   */
  allCount?: number;
  /**
   * @remarks
   * The names of the container applications.
   * 
   * @example
   * [\\"alicloud-monitor-controller\\"]
   */
  appNames?: string;
  /**
   * @remarks
   * The number of selected container applications.
   * 
   * @example
   * 10
   */
  chooseCount?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8ca91e0907d94efaba7fb0827eb9****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * hhht-cluster-02
   */
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      allCount: 'AllCount',
      appNames: 'AppNames',
      chooseCount: 'ChooseCount',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCount: 'number',
      appNames: 'string',
      chooseCount: 'number',
      clusterId: 'string',
      clusterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerScanConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeContainerScanConfigResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69BFFCDE-37D6-5A49-A8BC-BB03AC83****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeContainerScanConfigResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

