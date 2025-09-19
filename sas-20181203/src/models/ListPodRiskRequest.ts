// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPodRiskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * nginx1
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/182997.html) operation to query the IDs of container clusters.
   * 
   * @example
   * c314aa5b2f208461dad821cdfed82****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * taas
   */
  namespace?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * abcd-84898334227-p****
   */
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      namespace: 'Namespace',
      pageSize: 'PageSize',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      currentPage: 'number',
      namespace: 'string',
      pageSize: 'number',
      podName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

