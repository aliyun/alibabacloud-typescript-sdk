// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster. You can call the ListCluster operation to query the cluster ID. For more information, see [ListCluster](https://help.aliyun.com/document_detail/154995.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 52984524-6d48-4bbd-85f2-a34b0e5b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of the page to return. If you do not specify this parameter, the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * @example
   * 1
   */
  ecsList?: string;
  /**
   * @remarks
   * The number of ECS instances to return on each page. If you do not specify this parameter, all ECS instances in the specified cluster are returned on one page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      ecsList: 'EcsList',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentPage: 'number',
      ecsList: 'string',
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

