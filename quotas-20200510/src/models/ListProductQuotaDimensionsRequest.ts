// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductQuotaDimensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   FlowControl: API rate limit.
   * *   CommonQuota: general quota. This is the default value.
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

