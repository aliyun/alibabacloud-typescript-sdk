// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBasicSearchPageListResponseBodyResultObjectHeader extends $dara.Model {
  /**
   * @remarks
   * Field name
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * Field title.
   * 
   * @example
   * 年龄
   */
  fieldTitle?: string;
  /**
   * @remarks
   * Whether it is a default display field (displayed in the response, not used as a parameter)
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldTitle: 'fieldTitle',
      isDefault: 'isDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldTitle: 'string',
      isDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBasicSearchPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Returned data object
   */
  data?: { [key: string]: any }[];
  /**
   * @remarks
   * Table header
   */
  header?: DescribeBasicSearchPageListResponseBodyResultObjectHeader[];
  /**
   * @remarks
   * Page size, with a default value of 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 6
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      data: 'data',
      header: 'header',
      pageSize: 'pageSize',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      header: { 'type': 'array', 'itemType': DescribeBasicSearchPageListResponseBodyResultObjectHeader },
      pageSize: 'number',
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.header)) {
      $dara.Model.validateArray(this.header);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBasicSearchPageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeBasicSearchPageListResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeBasicSearchPageListResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

