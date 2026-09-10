// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaDataComponentPageRequest extends $dara.Model {
  /**
   * @remarks
   * The category type of the data source. Valid values: DATASET, WORKFLOW, and ENGINE. For scheduling scenarios, this parameter is set to WORKFLOW.
   * 
   * @example
   * WORKFLOW
   */
  categoryType?: string;
  /**
   * @remarks
   * The entry component type. In some operations, this parameter is used as a backward compatible field for version 1.1.0. Valid values:
   * - 0: source
   * - 1: destination
   * 
   * @example
   * 0
   */
  componentType?: number;
  /**
   * @remarks
   * The data source name. Exact match and fuzzy match are supported.
   * 
   * @example
   * test_ds318_hangzhou_0428
   */
  dsName?: string;
  /**
   * @remarks
   * The connectivity status of the data source. Valid values:
   * - 0: Not tested.
   * - 1: Connected.
   * - 2: Connection failed.
   * - -1: Connectivity test not supported.
   */
  dsStatus?: number[];
  /**
   * @remarks
   * The data source type, such as Hive or MaxCompute.
   * 
   * @example
   * Hive
   */
  dsType?: string;
  /**
   * @remarks
   * The list of data source types.
   */
  dsTypeList?: string[];
  /**
   * @remarks
   * The grouping field (GROUP BY condition). Set this parameter as needed.
   * 
   * @example
   * order_date
   */
  groupBy?: string;
  /**
   * @remarks
   * Specifies whether to return the total number of records in the paginated result.
   * 
   * @example
   * true
   */
  needTotalCount?: string;
  /**
   * @remarks
   * The sort field. Set this parameter as needed.
   * 
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * - ASC: ascending order
   * - DESC: descending order
   * 
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size, which is the number of records returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source component ID, which is the primary key of the source data source component.
   * 
   * @example
   * 12345
   */
  srcComponentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'categoryType',
      componentType: 'componentType',
      dsName: 'dsName',
      dsStatus: 'dsStatus',
      dsType: 'dsType',
      dsTypeList: 'dsTypeList',
      groupBy: 'groupBy',
      needTotalCount: 'needTotalCount',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      srcComponentId: 'srcComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      componentType: 'number',
      dsName: 'string',
      dsStatus: { 'type': 'array', 'itemType': 'number' },
      dsType: 'string',
      dsTypeList: { 'type': 'array', 'itemType': 'string' },
      groupBy: 'string',
      needTotalCount: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      srcComponentId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dsStatus)) {
      $dara.Model.validateArray(this.dsStatus);
    }
    if(Array.isArray(this.dsTypeList)) {
      $dara.Model.validateArray(this.dsTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

