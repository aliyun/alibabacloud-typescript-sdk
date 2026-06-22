// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPodRiskRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * nginx1
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/182997.html) operation to obtain this parameter.
   * 
   * @example
   * c314aa5b2f208461dad821cdfed82****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the current page when paging is used.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The Kubernetes cluster namespace.
   * 
   * @example
   * taas
   */
  namespace?: string;
  /**
   * @remarks
   * The number of entries per page when paging is used. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The pod name.
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

