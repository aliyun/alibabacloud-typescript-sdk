// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductDimensionGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records that can be returned for the query. Valid values: 1 to 200. Default value: 30.
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
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The service code.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

