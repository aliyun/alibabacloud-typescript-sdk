// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchHistoricalSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The edition type. Valid values: BASIC and STANDARD. Default value: STANDARD.
   * 
   * @example
   * BASIC
   */
  edition?: string;
  /**
   * @remarks
   * The maximum number of results to return for this query.
   * If you only want to obtain the row count without actual data, set `limit=0` to return no rows.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token required to retrieve the next page of snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Default value: ASC.
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The query conditions. Example of Query:
   * 
   * ```
   * [
   *   {
   *     "field": "VaultId",
   *     "value": "v-0003rf9m*****qx5",
   *     "operation": "MATCH_TERM"
   *   },
   *   {
   *     "field": "InstanceId",
   *     "value": "i-bp1i20zq2*****e9368m",
   *     "operation": "MATCH_TERM"
   *   },
   *   {
   *     "field": "PlanId",
   *     "value": "plan-0005vk*****gkd1iu4f",
   *     "operation": "MATCH_TERM"
   *   },
   *   {
   *     "field": "CompleteTime",
   *     "value": "1626769913",
   *     "operation": "GREATER_THAN_OR_EQUAL"
   *   }
   * ]
   * ```
   * 
   * - Supported fields:
   * 
   *     - VaultId: required. The vault ID.
   *     - InstanceId: required only when SourceType=ECS_FILE. The ECS instance ID.
   *     - Bucket: required only when SourceType=OSS. The OSS bucket name.
   *     - FileSystemId: required only when SourceType=NAS. The NAS file system ID.
   *     - CreateTime: required only when SourceType=NAS. The creation time of the NAS file system.
   *     - CompleteTime: the time when the snapshot is completed.
   *     - PlanId: the backup plan ID.
   * 
   * - Supported operations:
   * 
   *     - MATCH_TERM: exact match.
   *     - GREATER_THAN: greater than.
   *     - GREATER_THAN_OR_EQUAL: greater than or equal to.
   *     - LESS_THAN: less than.
   *     - LESS_THAN_OR_EQUAL: less than or equal to.
   *     - BETWEEN: range. The value is a JSON array `[lower bound, upper bound]`.
   *     - IN: in the set. The value is an array.
   *     - NOT_IN: not in the set. The value is an array.
   * 
   * @example
   * [   {     "field": "VaultId",     "value": "v-0003rf9m17pap3ltpqx5",     "operation": "MATCH_TERM"   },   {     "field": "InstanceId",     "value": "i-bp1i20zq2wuzdie9368m",     "operation": "MATCH_TERM"   },   {     "field": "PlanId",     "value": "plan-0005vkqhpesqgkd1iu4f",     "operation": "MATCH_TERM"   },   {     "field": "CompleteTime",     "value": 1626769913,     "operation": "GREATER_THAN_OR_EQUAL"   } ]
   */
  query?: any[];
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * CreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * * **ECS_FILE**: backup snapshots of ECS files.
   * * **OSS**: backup snapshots of Alibaba Cloud OSS.
   * * **NAS**: backup snapshots of Alibaba Cloud NAS.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      limit: 'Limit',
      nextToken: 'NextToken',
      order: 'Order',
      query: 'Query',
      sortBy: 'SortBy',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      limit: 'number',
      nextToken: 'string',
      order: 'string',
      query: { 'type': 'array', 'itemType': 'any' },
      sortBy: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.query)) {
      $dara.Model.validateArray(this.query);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

