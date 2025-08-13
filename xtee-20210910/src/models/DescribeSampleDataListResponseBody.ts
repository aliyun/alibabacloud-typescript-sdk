// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleDataListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Classification type, binary or multi-class.
   * 
   * @example
   * 二分类
   */
  classificationType?: string;
  /**
   * @remarks
   * Criterion value for sample data calculation
   * 
   * @example
   * {"正样本":"1"，"负样本":"1"}
   */
  dataDistributed?: string;
  /**
   * @remarks
   * First row of sample data. Used to define the values of each column.
   * 
   * @example
   * 17700000000
   */
  dataTitle?: string;
  /**
   * @remarks
   * Deletion tag.
   * 
   * @example
   * DELETE
   */
  deleteTag?: string;
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
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Name
   * 
   * @example
   * 注册样本
   */
  name?: string;
  /**
   * @remarks
   * Number of normal samples
   * 
   * @example
   * 999
   */
  normalSize?: number;
  /**
   * @remarks
   * Recall configuration
   * 
   * @example
   * {"variables":"a,b,c"}
   */
  recallConfig?: string;
  /**
   * @remarks
   * Number of risk samples
   * 
   * @example
   * 1
   */
  riskSize?: number;
  /**
   * @remarks
   * Specified risk value
   * 
   * @example
   * black
   */
  riskValue?: string;
  /**
   * @remarks
   * Sample label details
   * 
   * @example
   * [{"type":"positive","size":"2000","value":1},{"type":"negative","size":1900,"value":0}]
   */
  sampleLabelDetail?: string;
  /**
   * @remarks
   * Sample size
   * 
   * @example
   * 1000
   */
  sampleSize?: number;
  /**
   * @remarks
   * Scene code
   * 
   * @example
   * account_abuse_detection
   */
  scene?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * CREATE
   */
  status?: string;
  /**
   * @remarks
   * Storage path
   * 
   * @example
   * saf/de/sample/3dc2spspHKq4G3YI9d08
   */
  storePath?: string;
  /**
   * @remarks
   * Storage type
   * 
   * @example
   * OSS
   */
  storeType?: string;
  /**
   * @remarks
   * Whether recall is supported
   * 
   * @example
   * true
   */
  supportRecall?: string;
  /**
   * @remarks
   * User UID
   * 
   * @example
   * 1519714049632764
   */
  userId?: number;
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
      classificationType: 'classificationType',
      dataDistributed: 'dataDistributed',
      dataTitle: 'dataTitle',
      deleteTag: 'deleteTag',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      name: 'name',
      normalSize: 'normalSize',
      recallConfig: 'recallConfig',
      riskSize: 'riskSize',
      riskValue: 'riskValue',
      sampleLabelDetail: 'sampleLabelDetail',
      sampleSize: 'sampleSize',
      scene: 'scene',
      status: 'status',
      storePath: 'storePath',
      storeType: 'storeType',
      supportRecall: 'supportRecall',
      userId: 'userId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationType: 'string',
      dataDistributed: 'string',
      dataTitle: 'string',
      deleteTag: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      name: 'string',
      normalSize: 'number',
      recallConfig: 'string',
      riskSize: 'number',
      riskValue: 'string',
      sampleLabelDetail: 'string',
      sampleSize: 'number',
      scene: 'string',
      status: 'string',
      storePath: 'string',
      storeType: 'string',
      supportRecall: 'string',
      userId: 'number',
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

export class DescribeSampleDataListResponseBody extends $dara.Model {
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
   * Returned object
   */
  resultObject?: DescribeSampleDataListResponseBodyResultObject[];
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
      resultObject: { 'type': 'array', 'itemType': DescribeSampleDataListResponseBodyResultObject },
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

