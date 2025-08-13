// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableMarketListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Charging mode
   * 
   * @example
   * FREE
   */
  chargingMode?: string;
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
   * Page size, with a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Paging indicator, default is true.
   * 
   * @example
   * true
   */
  paging?: string;
  /**
   * @remarks
   * Query content, supports fuzzy search.
   * 
   *  Title/Description
   * 
   * @example
   * 手机号
   */
  queryContent?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Scenario
   * 
   * @example
   * [\\"coupon_abuse_detection\\"]
   */
  scenesStr?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * SAF
   */
  source?: string;
  /**
   * @remarks
   * Title.
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

