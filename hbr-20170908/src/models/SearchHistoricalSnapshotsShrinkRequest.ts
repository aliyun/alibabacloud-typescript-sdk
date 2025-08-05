// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchHistoricalSnapshotsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of rows that you want the current query to return. To query only the number of matched rows without the need to return specific data, you can set the Limit parameter to `0`. Then, the operation returns only the number of matched rows.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ordering mode. Valid values:
   * 
   * *   ASC (default): ascending order
   * *   DESC: descending order
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The query conditions. Example:
   * 
   *     [
   *       {
   *         "field": "VaultId",
   *         "value": "v-0003rf9m*****qx5",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "InstanceId",
   *         "value": "i-bp1i20zq2*****e9368m",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "PlanId",
   *         "value": "plan-0005vk*****gkd1iu4f",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "CompleteTime",
   *         "value": "1626769913",
   *         "operation": "GREATER_THAN_OR_EQUAL"
   *       }
   *     ]
   * 
   * *   The following fields are supported:
   * 
   *     *   VaultId: specifies the ID of the backup vault. This field is required.
   *     *   InstanceId: specifies the ID of the Elastic Compute Service (ECS) instance. If the SourceType parameter is set to ECS_FILE, this field is required.
   *     *   Bucket: specifies the name of the Object Storage Service (OSS) bucket. If the SourceType parameter is set to OSS, this field is required.
   *     *   FileSystemId: specifies the ID of the File Storage NAS (NAS) file system. If the SourceType parameter is set to NAS, this field is required.
   *     *   CreateTime: specifies the time when the NAS file system was created. If the SourceType parameter is set to NAS, this field is required.
   *     *   CompleteTime: specifies the time when the backup snapshot was completed.
   *     *   PlanId: the ID of a backup plan.
   * 
   * *   The following operations are supported:
   * 
   *     *   MATCH_TERM: exact match.
   *     *   GREATER_THAN: greater than.
   *     *   GREATER_THAN_OR_EQUAL: greater than or equal to.
   *     *   LESS_THAN: less than.
   *     *   LESS_THAN_OR_EQUAL: less than or equal to.
   *     *   BETWEEN: specifies a JSON array as a range. The results must fall within the range in the `[Minimum value,Maximum value]` format.
   *     *   IN: specifies an array as a collection. The results must fall within the collection.
   *     *   NOT_IN: specifies an array as a collection. The results cannot fall within the collection.
   * 
   * @example
   * [   {     "field": "VaultId",     "value": "v-0003rf9m17pap3ltpqx5",     "operation": "MATCH_TERM"   },   {     "field": "InstanceId",     "value": "i-bp1i20zq2wuzdie9368m",     "operation": "MATCH_TERM"   },   {     "field": "PlanId",     "value": "plan-0005vkqhpesqgkd1iu4f",     "operation": "MATCH_TERM"   },   {     "field": "CompleteTime",     "value": 1626769913,     "operation": "GREATER_THAN_OR_EQUAL"   } ]
   */
  queryShrink?: string;
  /**
   * @remarks
   * The field that is used to sort data.
   * 
   * @example
   * CreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for Elastic Compute Service (ECS) files
   * *   **OSS**: backup snapshots for Object Storage Service (OSS) buckets
   * *   **NAS**: backup snapshots for Apsara File Storage NAS file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      order: 'Order',
      queryShrink: 'Query',
      sortBy: 'SortBy',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      order: 'string',
      queryShrink: 'string',
      sortBy: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

