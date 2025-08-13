// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourcePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Creator of the data source.
   * 
   * @example
   * xxxx
   */
  creator?: string;
  /**
   * @remarks
   * Data source description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Time when the data source was created.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Time when the data source was last modified.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Last modifier.
   * 
   * @example
   * xxxxx
   */
  modifier?: string;
  /**
   * @remarks
   * Data source name.
   * 
   * @example
   * data_source
   */
  name?: string;
  /**
   * @remarks
   * Total pages.
   * 
   * @example
   * 4
   */
  total?: number;
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * FILE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      modifier: 'modifier',
      name: 'name',
      total: 'total',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modifier: 'string',
      name: 'string',
      total: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourcePageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeDataSourcePageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total items
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * Total pages
   * 
   * @example
   * 9
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeDataSourcePageListResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

