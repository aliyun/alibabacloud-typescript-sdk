// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDedicatedClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The sort column when the response contains multiple DTS dedicated cluster instances. Valid values:
   * 
   * - **gmtCreated**: creation time.
   * - **orderCount**: number of nodes.
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc**: ascending order. This is the default value.
   * - **desc**: descending order.
   * 
   * @example
   * asc
   */
  orderDirection?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of clusters to display per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The specific content of the query condition.
   * 
   * > You must first specify the **Type** parameter to define the query key.
   * 
   * @example
   * dtspk3f13r731m****
   */
  params?: string;
  /**
   * @remarks
   * The region ID. This parameter is used as a query condition.
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
   * The cluster status. Valid values:
   * 
   * - **init**: initializing.
   * - **schedule**: pending scheduling.
   * - **running**: running.
   * - **upgrade**: upgrading.
   * - **downgrade**: downgrading.
   * - **locked**: locked.
   * - **releasing**: being released.
   * - **released**: released.
   * 
   * @example
   * init
   */
  state?: string;
  /**
   * @remarks
   * The query key. Valid values:
   * 
   * - **NAME**: cluster name.
   * - **INSTANCE**: cluster instance ID.
   * - **DEDICATEDCLUSTERID**: dedicated cluster ID.
   * 
   * > You must also specify the **Params** parameter to provide the specific content of the query condition.
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

