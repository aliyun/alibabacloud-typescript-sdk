// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateFavoriteVariableRequest extends $dara.Model {
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
   * The variable ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * The favorite operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ADD
   */
  operate?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'id',
      operate: 'operate',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      operate: 'string',
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

