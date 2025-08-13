// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleDataPageResponseBodyResultObject extends $dara.Model {
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
   * Content of the list entered in the text box
   * 
   * @example
   * 1770000000
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
   * Modifier
   * 
   * @example
   * 1519714049632764
   */
  updator?: string;
  /**
   * @remarks
   * UUID of the sample batch
   * 
   * @example
   * 48653f1372444c078f7b3d1c317d37dc
   */
  uuid?: string;
  /**
   * @remarks
   * Version number
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      dataTagType: 'dataTagType',
      dataValue: 'dataValue',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      lastSourceType: 'lastSourceType',
      updator: 'updator',
      uuid: 'uuid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      dataTagType: 'string',
      dataValue: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      lastSourceType: 'string',
      updator: 'string',
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

export class DescribeSampleDataPageResponseBody extends $dara.Model {
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
   * Number of items per page, default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeSampleDataPageResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 3
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
      resultObject: { 'type': 'array', 'itemType': DescribeSampleDataPageResponseBodyResultObject },
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

