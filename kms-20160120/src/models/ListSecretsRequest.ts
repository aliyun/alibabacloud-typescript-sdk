// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * false
   */
  fetchTags?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * [{"Key":"SecretName", "Values":["Val1","Val2"]}]
   */
  filters?: string;
  /**
   * @remarks
   * The secret filter. The filter consists of one or more key-value pairs. You can specify one key-value pair or leave this parameter empty. If you use one tag key or tag value to filter resources, up to 4,000 resources can be queried. If you want to query more than 4,000 resources, call the [ListResourceTags](https://help.aliyun.com/document_detail/120090.html) operation.
   * 
   * *   Key
   * 
   *     *   Description: the property that you want to filter.
   * 
   *     *   Type: string.
   * 
   *     *   Valid values:
   * 
   *         *   SecretName: the secret name.
   *         *   Description: the description of the secret.
   *         *   TagKey: the tag key.
   *         *   TagValue: the tag value.
   * 
   * *   Values
   * 
   *     *   Description: the value to be included after filtering.
   * 
   *     *   Type: string.
   * 
   *     *   Length: 0 to 10.
   * 
   *     *   Valid values:
   * 
   *         *   If the Key field is set to SecretName, the value must be 1 to 192 characters in length and can contain letters, digits, and special characters `_ / + = . @ -`.
   *         *   If the Key field is set to Description, the value must be 1 to 256 characters in length.
   *         *   If the Key field is set to TagKey, the value must be 1 to 256 characters in length and can contain letters, digits, and special characters `/ _ - . + = @ :`.
   *         *   If the Key field is set to TagValue, the value must be 1 to 256 characters in length and can contain letters, numbers, and special characters `/ _ - . + = @ :`.
   * 
   * The logical relationship between values of the Values field in a key-value pair is OR. Example: `[ {"Key":"SecretName", "Values":["sec1","sec2"]}]`. In this example, the semantics are `SecretName=sec 1 OR SecretName=sec 2`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number of the returned page.
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

