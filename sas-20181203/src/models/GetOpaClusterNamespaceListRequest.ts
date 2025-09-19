// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpaClusterNamespaceListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to query.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * ca0faf43e33904ecbb6c695df7906****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * sit
   */
  nameSpaceName?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      nameSpaceName: 'NameSpaceName',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentPage: 'number',
      nameSpaceName: 'string',
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

