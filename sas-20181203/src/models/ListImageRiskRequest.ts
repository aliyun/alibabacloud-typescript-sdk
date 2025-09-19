// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRiskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * e****
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the ID of the container cluster.
   * 
   * @example
   * c80f79959fd724a888e1187779b13****
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
   * The name of the image.
   * 
   * @example
   * container-***:****
   */
  imageName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * kube-sy****
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
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      imageName: 'ImageName',
      namespace: 'Namespace',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      currentPage: 'number',
      imageName: 'string',
      namespace: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

