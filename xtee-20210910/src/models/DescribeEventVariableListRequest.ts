// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
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
   * The filter object.
   * 
   * @example
   * {
   *     "type": "EXPRESSION",
   *     "name": "ex_NgR6nDVD821c"
   * }
   */
  filterDTO?: string;
  /**
   * @remarks
   * The associated event code (eventCode).
   * 
   * This parameter is required.
   * 
   * @example
   * de_awkhwh0314
   */
  refObjId?: string;
  /**
   * @remarks
   * The association type.
   * 
   * This parameter is required.
   * 
   * @example
   * EVENT
   */
  refObjType?: string;
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
   * The type.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      filterDTO: 'filterDTO',
      refObjId: 'refObjId',
      refObjType: 'refObjType',
      regId: 'regId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      filterDTO: 'string',
      refObjId: 'string',
      refObjType: 'string',
      regId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

