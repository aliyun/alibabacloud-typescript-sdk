// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The field by which to sort the results. Default value: updatedTime.
   * 
   * @example
   * updatedTime
   */
  orderByField?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A keyword to search for in the names or descriptions of IVR flows.
   */
  searchPattern?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `ASC`: The results are sorted in ascending order.
   * 
   * - `DESC`: The results are sorted in descending order. This is the default value.
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @remarks
   * Specifies the type of IVR flow to list. If you omit this parameter, IVR flows of all types are listed.
   * 
   * @example
   * MAIN_FLOW
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderByField: 'OrderByField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      sortOrder: 'SortOrder',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderByField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      sortOrder: 'string',
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

