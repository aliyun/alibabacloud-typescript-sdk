// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword that you use for query. Exact match is supported by instance ID or instance name.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language in which you want the values of some response parameters to be returned. These response parameters support multiple languages.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether additional information is required. Default value: **false**.
   * 
   * @example
   * false
   */
  needDetailAttributes?: boolean;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

