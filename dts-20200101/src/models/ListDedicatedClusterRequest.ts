// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDedicatedClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The basis on which the retrieved entries are sorted if multiple DTS dedicated clusters are returned. Valid values:
   * 
   * *   **gmtCreated**: the time when a cluster was created.
   * *   **orderCount**: the number of nodes in a cluster.
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * The order in which you want to sort the retrieved entries. Valid values:
   * 
   * *   asc: sorts the retrieved entries in ascending order. This is the default value.
   * *   desc: sorts the retrieved entries in descending order.
   * 
   * @example
   * asc
   */
  orderDirection?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of the page to return. The value of this parameter must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of clusters to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The content of the query condition.
   * 
   * >  You must set the **Type parameter** to specify the type of the query condition.
   * 
   * @example
   * dtspk3f13r731m****
   */
  params?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfntftbiobqyky
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **init**: The cluster is being initialized.
   * *   **schedule**: The cluster is pending scheduling.
   * *   **running**: The cluster is running.
   * *   **upgrade**: The cluster is being upgraded.
   * *   **downgrade**: The cluster is being downgraded.
   * *   **locked**: The cluster is locked.
   * *   **releasing**: The cluster is being released.
   * *   **released**: The cluster is released.
   * 
   * @example
   * init
   */
  state?: string;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * *   **NAME**: the name of the cluster.
   * *   **INSTANCE**: the ID of a cluster instance.
   * *   **DEDICAETEDCLUSTERID**: the ID of a dedicated cluster.
   * 
   * >  You must specify the query condition by using the **Params** parameter.
   * 
   * @example
   * NAME
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      orderColumn: 'OrderColumn',
      orderDirection: 'OrderDirection',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      params: 'Params',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderColumn: 'string',
      orderDirection: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      params: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

