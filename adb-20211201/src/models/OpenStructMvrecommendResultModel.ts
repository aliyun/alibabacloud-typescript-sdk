// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructMvBaseTableDetailModel } from "./OpenStructMvBaseTableDetailModel";


export class OpenStructMVRecommendResultModel extends $dara.Model {
  /**
   * @remarks
   * The number of accelerated queries.
   * 
   * @example
   * 32
   */
  acceleratedQueriesCount?: number;
  /**
   * @remarks
   * The base table associated with the subquery.
   */
  baseTables?: OpenStructMvBaseTableDetailModel[];
  /**
   * @remarks
   * Estimated bytes scanned reduction by current materialized view from correlated parent queries (posterior calculation).
   * 
   * @example
   * 321321223
   */
  savedScanbytes?: number;
  /**
   * @remarks
   * The extracted public subquery.
   * 
   * @example
   * SELECT * FROM demo.tbl
   */
  subquery?: string;
  /**
   * @remarks
   * The ID of the subquery.
   * 
   * @example
   * 1
   */
  subqueryId?: number;
  /**
   * @remarks
   * Whether the current subquery supports incremental refresh.
   * 
   * @example
   * true
   */
  supportIncrementalRefresh?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceleratedQueriesCount: 'AcceleratedQueriesCount',
      baseTables: 'BaseTables',
      savedScanbytes: 'SavedScanbytes',
      subquery: 'Subquery',
      subqueryId: 'SubqueryId',
      supportIncrementalRefresh: 'SupportIncrementalRefresh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratedQueriesCount: 'number',
      baseTables: { 'type': 'array', 'itemType': OpenStructMvBaseTableDetailModel },
      savedScanbytes: 'number',
      subquery: 'string',
      subqueryId: 'number',
      supportIncrementalRefresh: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.baseTables)) {
      $dara.Model.validateArray(this.baseTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

