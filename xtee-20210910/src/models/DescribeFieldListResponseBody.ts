// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Field classification
   * 
   * @example
   * REQUEST_PARAM
   */
  classify?: string;
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Enum data
   * 
   * @example
   * STATUS
   */
  enumData?: string;
  /**
   * @remarks
   * Field ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Field name
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Field source
   * 
   * @example
   * DEFINE
   */
  source?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * Field type
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'classify',
      description: 'description',
      enumData: 'enumData',
      id: 'id',
      name: 'name',
      source: 'source',
      status: 'status',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      description: 'string',
      enumData: 'string',
      id: 'number',
      name: 'string',
      source: 'string',
      status: 'string',
      title: 'string',
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

export class DescribeFieldListResponseBody extends $dara.Model {
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
   * Returned object
   */
  resultObject?: DescribeFieldListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 101
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages
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
      resultObject: { 'type': 'array', 'itemType': DescribeFieldListResponseBodyResultObject },
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

