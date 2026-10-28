// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDedicatedClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The sort field when the response contains multiple DTS dedicated cluster instances. Valid values:
   * 
   * - **gmtCreated**: Creation time.
   * - **orderCount**: Number of nodes.
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc**: Ascending order. This is the default value.
   * - **desc**: Descending order.
   * 
   * @example
   * asc
   */
  orderDirection?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be an integer greater than 0 and less than or equal to the maximum value of the Integer data type. Default value: **1**.
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
   * The specific content of the query condition.
   * 
   * > You must specify **Type** to define the query key.
   * 
   * @example
   * dtspk3f13r731m****
   */
  params?: string;
  /**
   * @remarks
   * The region ID.
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
   * - **init**: Initializing.
   * - **schedule**: Pending scheduling.
   * - **running**: Running.
   * - **upgrade**: Upgrading.
   * - **downgrade**: Downgrading.
   * - **locked**: Locked.
   * - **releasing**: Releasing.
   * - **released**: Released.
   * 
   * @example
   * init
   */
  state?: string;
  /**
   * @remarks
   * The query key. Valid values:
   * 
   * - **NAME**: The cluster name.
   * - **INSTANCE**: The cluster instance ID.
   * - **DEDICATEDCLUSTERID**: The dedicated cluster ID.
   * 
   * > You must specify **Params** to define the query condition.
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

