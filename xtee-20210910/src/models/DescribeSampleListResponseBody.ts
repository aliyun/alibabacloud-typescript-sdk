// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Database ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Sample tags.
   * 
   * @example
   * rm0102
   */
  sampleTags?: string;
  /**
   * @remarks
   * Sample type
   * 
   * @example
   * PHONE
   */
  sampleType?: number;
  /**
   * @remarks
   * Sample value.
   * 
   * @example
   * 1770000000
   */
  sampleValue?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 1699450018265
   */
  updateTime?: number;
  /**
   * @remarks
   * Version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      sampleTags: 'sampleTags',
      sampleType: 'sampleType',
      sampleValue: 'sampleValue',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      sampleTags: 'string',
      sampleType: 'number',
      sampleValue: 'string',
      updateTime: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleListResponseBody extends $dara.Model {
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
   * Page size, with a default value of 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeSampleListResponseBodyResultObject[];
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 6
   */
  totalItem?: number;
  /**
   * @remarks
   * Total pages
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
      resultObject: { 'type': 'array', 'itemType': DescribeSampleListResponseBodyResultObject },
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

