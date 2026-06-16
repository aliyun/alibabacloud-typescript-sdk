// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvanceSearchPageListResponseBodyResultObjectHeader extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * 年龄
   */
  fieldTitle?: string;
  /**
   * @remarks
   * Indicates whether the field is displayed by default. This field is included in the response only and is not used as a request parameter. Valid values:
   * - true: The field is displayed by default.
   * - false: The field is not displayed by default.
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

export class DescribeAdvanceSearchPageListResponseBodyResultObject extends $dara.Model {
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
   * The returned data object.
   */
  data?: { [key: string]: any }[];
  /**
   * @remarks
   * The table header.
   */
  header?: DescribeAdvanceSearchPageListResponseBodyResultObjectHeader[];
  /**
   * @remarks
   * The number of entries per page in the response. Default value: 20. Minimum value: 1. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 37
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 4
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
      header: { 'type': 'array', 'itemType': DescribeAdvanceSearchPageListResponseBodyResultObjectHeader },
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

export class DescribeAdvanceSearchPageListResponseBody extends $dara.Model {
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
   * The returned object.
   */
  resultObject?: DescribeAdvanceSearchPageListResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeAdvanceSearchPageListResponseBodyResultObject,
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

