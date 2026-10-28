// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductQuotaDimensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for this query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that specifies the starting position of the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviated name of the cloud service.
   * 
   * > For more information about how to obtain the abbreviated name of a cloud service, see `ProductCode` in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
   * 
   * This parameter is required.
   * 
   * @example
   * disk
   */
  productCode?: string;
  /**
   * @remarks
   * The quota category. Valid values:
   * 
   * - FlowControl: API rate limits.
   * 
   * - CommonQuota: general quotas. This is the default value.
   * 
   * > Privileges (WhiteListLabel) do not have quota dimensions.
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

