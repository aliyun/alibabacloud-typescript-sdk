// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafTagListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Tag description.
   * 
   * @example
   * 依赖IP画像模型识别输出风险高、中高、中的判定\\n数据来源主要基于IP的网络属性数据和对黑产行为轨迹的情报监控数据，涵盖可识别检测IP网络属性特征、恶意属性等特征\\n而模型评分的高中低主要是根据当前IP号段命中风险行为的恶意程度和种类来判定的\\n备注：以下rn0311、rn0312、rn0313、rn0314、rn0315属于IP画像模型针对当前请求IP识别出的风险类别
   */
  tagDesc?: string;
  /**
   * @remarks
   * Tag meaning.
   * 
   * @example
   * IP风险评分高
   */
  tagMean?: string;
  /**
   * @remarks
   * Tag name.
   * 
   * @example
   * rn0301
   */
  tagName?: string;
  /**
   * @remarks
   * Tag identifier.
   * 
   * @example
   * rn0301
   */
  tagState?: string;
  /**
   * @remarks
   * Tag type.
   * 
   * @example
   * IP风险类
   */
  tagType?: string;
  /**
   * @remarks
   * Unique identifier of the tag key.
   * 
   * @example
   * rn0301
   */
  tagUid?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 1684744034000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      tagDesc: 'tagDesc',
      tagMean: 'tagMean',
      tagName: 'tagName',
      tagState: 'tagState',
      tagType: 'tagType',
      tagUid: 'tagUid',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDesc: 'string',
      tagMean: 'string',
      tagName: 'string',
      tagState: 'string',
      tagType: 'string',
      tagUid: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSafTagListResponseBody extends $dara.Model {
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
  resultObject?: DescribeSafTagListResponseBodyResultObject[];
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
      resultObject: { 'type': 'array', 'itemType': DescribeSafTagListResponseBodyResultObject },
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

