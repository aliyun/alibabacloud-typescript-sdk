// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMarkPageResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * mobile
   */
  fieldName?: string;
  /**
   * @remarks
   * Field value.
   * 
   * @example
   * 18000000000
   */
  fieldValue?: string;
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 2793
   */
  id?: number;
  /**
   * @remarks
   * Mark (0 No / 1 Yes).
   * 
   * @example
   * 1
   */
  markType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
      id: 'id',
      markType: 'markType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      id: 'number',
      markType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMarkPageResponseBody extends $dara.Model {
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
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribeMarkPageResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 6
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
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
      resultObject: { 'type': 'array', 'itemType': DescribeMarkPageResponseBodyResultObject },
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

