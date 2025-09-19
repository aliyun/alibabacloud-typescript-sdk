// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. The values are: - **zh**: Chinese - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Create Type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Filter object.
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
   * Associated event eventCode.
   * 
   * This parameter is required.
   * 
   * @example
   * de_awkhwh0314
   */
  refObjId?: string;
  /**
   * @remarks
   * Association Type.
   * 
   * This parameter is required.
   * 
   * @example
   * EVENT
   */
  refObjType?: string;
  /**
   * @remarks
   * Region Code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * type.
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

