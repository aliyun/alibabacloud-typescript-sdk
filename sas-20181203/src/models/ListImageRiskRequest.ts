// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRiskRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * e****
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c80f79959fd724a888e1187779b13****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * container-***:****
   */
  imageName?: string;
  /**
   * @remarks
   * The image namespace.
   * 
   * @example
   * kube-sy****
   */
  namespace?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Default value: 20.
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

