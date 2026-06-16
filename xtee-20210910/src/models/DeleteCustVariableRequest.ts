// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
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
   * The data version.
   * 
   * @example
   * 1
   */
  dataVersion?: number;
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
   * The variable ID.
   * 
   * @example
   * 235
   */
  variableId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      dataVersion: 'dataVersion',
      regId: 'regId',
      variableId: 'variableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      dataVersion: 'number',
      regId: 'string',
      variableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

