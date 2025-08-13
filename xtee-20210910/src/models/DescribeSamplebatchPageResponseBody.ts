// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSamplebatchPageResponseBodyResultObject extends $dara.Model {
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
   * Creator.
   * 
   * @example
   * 1519714049632764
   */
  creator?: string;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * mobile
   */
  dataType?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 描述
   */
  description?: string;
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
   * Valid sample content data
   * 
   * @example
   * 2
   */
  initValidFileRow?: number;
  /**
   * @remarks
   * Specific type of the sample list
   * 
   * @example
   * pass
   */
  sampleBatchType?: string;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * account_abuse
   */
  services?: string;
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
   * Sample batch UUID
   * 
   * @example
   * 203f1ae65c0a41a49dc4f8a47946caa2
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      batchName: 'batchName',
      creator: 'creator',
      dataType: 'dataType',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      initValidFileRow: 'initValidFileRow',
      sampleBatchType: 'sampleBatchType',
      services: 'services',
      updator: 'updator',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchName: 'string',
      creator: 'string',
      dataType: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      initValidFileRow: 'number',
      sampleBatchType: 'string',
      services: 'string',
      updator: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSamplebatchPageResponseBody extends $dara.Model {
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
  resultObject?: DescribeSamplebatchPageResponseBodyResultObject[];
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
   * Total number of pages
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
      resultObject: { 'type': 'array', 'itemType': DescribeSamplebatchPageResponseBodyResultObject },
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

