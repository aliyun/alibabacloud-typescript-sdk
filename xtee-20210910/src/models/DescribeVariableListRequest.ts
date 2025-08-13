// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableListRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and responses, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Associated event ID.
   * 
   * @example
   * de_avypfd8253
   */
  refObjId?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Source type.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * Type.
   * 
   * @example
   * IDENTIFY_SERVICE
   */
  type?: string;
  /**
   * @remarks
   * JSON array string of types.
   * 
   * @example
   * [\\"coupon_abuse_detection\\"]
   */
  typesStr?: string;
  /**
   * @remarks
   * Value for fuzzy search.
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

