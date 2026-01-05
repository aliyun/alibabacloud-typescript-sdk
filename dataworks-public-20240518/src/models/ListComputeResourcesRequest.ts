// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The environment type of the computing resource. Valid values:
   * 
   * *   Dev
   * *   Prod
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The name of the computing resource.
   * 
   * @example
   * category name
   */
  name?: string;
  /**
   * @remarks
   * The sort direction of the computing resource list. Valid values:
   * 
   * *   Desc: descending order.
   * *   Asc: ascending order.
   * 
   * Default value: Desc
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number to query. The default value is 1, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 10, and the maximum value is 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @remarks
   * The field to sort the computing resource list by. Supported fields include name, creation time, and computing resource ID.
   * 
   * *   CreateTime: Sorts by creation time
   * *   Id: Sorts by computing resource ID
   * *   Name: Sorts by computing resource name.
   * *   CreateTimeWithDefaultFirst: Sorts based on whether it is the default resource and by creation time, with the default computing resource listed first.
   * 
   * Default value: CreateTime
   * 
   * @example
   * CreateTimeWithDefaultFirst
   */
  sortBy?: string;
  /**
   * @remarks
   * The filter for computing resource types. You can configure multiple types for filtering.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

