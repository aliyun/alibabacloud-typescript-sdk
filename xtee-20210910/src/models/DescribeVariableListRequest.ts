// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableListRequest extends $dara.Model {
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
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the associated event.
   * 
   * @example
   * de_avypfd8253
   */
  refObjId?: string;
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
   * The source type.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * IDENTIFY_SERVICE
   */
  type?: string;
  /**
   * @remarks
   * The type JSON array string.
   * 
   * @example
   * [\\"coupon_abuse_detection\\"]
   */
  typesStr?: string;
  /**
   * @remarks
   * The value for fuzzy match.
   * 
   * @example
   * 注册
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      refObjId: 'refObjId',
      regId: 'regId',
      sourceType: 'sourceType',
      type: 'type',
      typesStr: 'typesStr',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      currentPage: 'string',
      pageSize: 'string',
      refObjId: 'string',
      regId: 'string',
      sourceType: 'string',
      type: 'string',
      typesStr: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

