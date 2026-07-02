// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return resource tags for each secret. Valid values:
   * 
   * - `true`: Resource tags are returned.
   * 
   * - `false` (default): Resource tags are not returned.
   * 
   * @example
   * false
   */
  fetchTags?: string;
  /**
   * @remarks
   * Filters secrets based on specified conditions. The value is a list of up to 10 key-value pairs. When you filter by tag, the query returns a maximum of 4,000 resources. If more than 4,000 resources match the filter, call the [ListResourceTags](https://help.aliyun.com/document_detail/120090.html) operation.
   * 
   * - Key
   * 
   *   - Description: The filter property.
   * 
   *   - Type: String.
   * 
   * - Values
   * 
   *   - Description: The filter value.
   * 
   *   - Type: String.
   * 
   *   - You can specify up to 10 items.
   * 
   * Valid values for Key:
   * 
   * - Set `Key` to **SecretName** to filter by secret name.
   * 
   * - Set `Key` to **Description** to filter by secret description.
   * 
   * - Set `Key` to **TagKey** to filter by tag key.
   * 
   * - Set `Key` to **TagValue** to filter by tag value.
   * 
   * - Set `Key` to **DKMSInstanceId** to filter by KMS instance ID.
   * 
   * - Set Key to **SecretType** to filter by secret type. `Values` can be `Generic`, `RDS`, `Redis`, `RAMCredentials`, `ECS`, or `PolarDB`.
   * 
   * - Set `Key` to **Creator** to filter by the creator of the secret.
   * 
   * If you specify multiple values for a key, the filter applies a logical OR. For example, if you enter `[ {"Key":"SecretName", "Values":["sec1","sec2"]} ]`, this means: `(SecretName=sec1 OR SecretName=sec2)`.
   * 
   * @example
   * [{"Key":"SecretName", "Values":["Val1","Val2"]}]
   */
  filters?: string;
  /**
   * @remarks
   * The page number.<br>
   * The value must be greater than 0.<br>
   * Default: 1.<br><br>
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.<br>
   * The value must be between 1 and 100.<br>
   * Default: 10.<br><br>
   * 
   * @example
   * 2
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fetchTags: 'FetchTags',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchTags: 'string',
      filters: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

