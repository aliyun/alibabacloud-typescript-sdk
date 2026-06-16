// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableMarketListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The billing mode.
   * 
   * @example
   * FREE
   */
  chargingMode?: string;
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
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to enable paging. Default value: true.
   * 
   * @example
   * true
   */
  paging?: string;
  /**
   * @remarks
   * The query content. Fuzzy match is supported for the title or description.
   * 
   * @example
   * 手机号
   */
  queryContent?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * [\\"coupon_abuse_detection\\"]
   */
  scenesStr?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * SAF
   */
  source?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 设备风险识别_标签
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      chargingMode: 'chargingMode',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      paging: 'paging',
      queryContent: 'queryContent',
      regId: 'regId',
      scenesStr: 'scenesStr',
      source: 'source',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      chargingMode: 'string',
      currentPage: 'number',
      pageSize: 'number',
      paging: 'string',
      queryContent: 'string',
      regId: 'string',
      scenesStr: 'string',
      source: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

