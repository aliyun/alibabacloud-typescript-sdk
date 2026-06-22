// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyClusterListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The page number of the current page to display in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to display on each page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      currentPage: 'number',
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

