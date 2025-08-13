// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleDataByBatchUUidPageResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Sample batch name
   * 
   * @example
   * 白样本
   */
  batchName?: string;
  /**
   * @remarks
   * Creator
   * 
   * @example
   * 1519714049632764
   */
  creator?: string;
  /**
   * @remarks
   * Sample type
   * 
   * @example
   * pass
   */
  dataTagType?: string;
  /**
   * @remarks
   * Data content
   * 
   * @example
   * 177000001
   */
  dataValue?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Last source
   * 
   * @example
   * Console-Text
   */
  lastSourceType?: string;
  /**
   * @remarks
   * Sample batch UUID
   * 
   * @example
   * 203f1ae65c0a41a49dc4f8a47946caa2
   */
  uuid?: string;
  /**
   * @remarks
   * Version
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      batchName: 'batchName',
      creator: 'creator',
      dataTagType: 'dataTagType',
      dataValue: 'dataValue',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      lastSourceType: 'lastSourceType',
      uuid: 'uuid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchName: 'string',
      creator: 'string',
      dataTagType: 'string',
      dataValue: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      lastSourceType: 'string',
      uuid: 'string',
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

export class DescribeSampleDataByBatchUUidPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
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
  resultObject?: DescribeSampleDataByBatchUUidPageResponseBodyResultObject[];
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
      resultObject: { 'type': 'array', 'itemType': DescribeSampleDataByBatchUUidPageResponseBodyResultObject },
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

