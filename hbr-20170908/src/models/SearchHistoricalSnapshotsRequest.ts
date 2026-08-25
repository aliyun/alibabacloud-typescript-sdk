// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchHistoricalSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The edition. Valid values are BASIC and STANDARD. The default value is STANDARD.
   * 
   * @example
   * BASIC
   */
  edition?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * To retrieve only the number of rows without any data, set Limit to `0`.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token that is required to obtain the next page of snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. The default value is ASC.
   * 
   * - ASC: ascending
   * 
   * - DESC: descending
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The query conditions. For example:
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
   *   - VaultId: This parameter is required. The ID of the backup vault.
   * 
   *   - InstanceId: This parameter is required only when SourceType is set to ECS_FILE. The ID of the ECS instance.
   * 
   *   - Bucket: This parameter is required only when SourceType is set to OSS. The name of the OSS bucket.
   * 
   *   - FileSystemId: This parameter is required only when SourceType is set to NAS. The ID of the NAS file system.
   * 
   *   - CreateTime: This parameter is required only when SourceType is set to NAS. The time when the NAS file system was created.
   * 
   *   - CompleteTime: The time when the snapshot was completed.
   * 
   *   - PlanId: The ID of the backup plan.
   * 
   * - Supported operations:
   * 
   *   - MATCH_TERM: exact match.
   * 
   *   - GREATER_THAN: greater than.
   * 
   *   - GREATER_THAN_OR_EQUAL: greater than or equal to.
   * 
   *   - LESS_THAN: less than.
   * 
   *   - LESS_THAN_OR_EQUAL: less than or equal to.
   * 
   *   - BETWEEN: a range. The value is a JSON array in the `[lower bound,upper bound]` format.
   * 
   *   - IN: in a collection. The value is an array.
   * 
   *   - NOT_IN: not in a collection. The value is an array.
   * 
   * @example
   * [   {     "field": "VaultId",     "value": "v-0003rf9m17pap3ltpqx5",     "operation": "MATCH_TERM"   },   {     "field": "InstanceId",     "value": "i-bp1i20zq2wuzdie9368m",     "operation": "MATCH_TERM"   },   {     "field": "PlanId",     "value": "plan-0005vkqhpesqgkd1iu4f",     "operation": "MATCH_TERM"   },   {     "field": "CompleteTime",     "value": 1626769913,     "operation": "GREATER_THAN_OR_EQUAL"   } ]
   */
  query?: any[];
  /**
   * @remarks
   * The field to sort by.
   * 
   * @example
   * CreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **ECS_FILE**: a backup snapshot of ECS files.
   * 
   * - **OSS**: a backup snapshot of Alibaba Cloud OSS.
   * 
   * - **NAS**: a backup snapshot of Alibaba Cloud NAS.
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

