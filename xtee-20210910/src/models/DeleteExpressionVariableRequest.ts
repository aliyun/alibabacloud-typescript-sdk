// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExpressionVariableRequest extends $dara.Model {
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
   * The data version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataVersion?: number;
  /**
   * @remarks
   * The variable ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2556
   */
  id?: number;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      dataVersion: 'dataVersion',
      id: 'id',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      dataVersion: 'number',
      id: 'number',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

