// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourcePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The creator of the data source.
   * 
   * @example
   * xxxx
   */
  creator?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the data source was last modified.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The user who last modified the data source.
   * 
   * @example
   * xxxxx
   */
  modifier?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * data_source
   */
  name?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 4
   */
  total?: number;
  /**
   * @remarks
   * The data source type.
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
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeDataSourcePageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
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

