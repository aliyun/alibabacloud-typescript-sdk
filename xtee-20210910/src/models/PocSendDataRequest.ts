// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PocSendDataRequest extends $dara.Model {
  /**
   * @remarks
   * Starting position for batch operations, starting from 0.
   * 
   * This parameter is required.
   * 
   * @example
   * d0
   */
  batchNo?: number;
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Return parameters, in JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * c222460c
   */
  paramsList?: string;
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
   * Task token.
   * 
   * This parameter is required.
   * 
   * @example
   * a471aa421752633438
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      batchNo: 'BatchNo',
      lang: 'Lang',
      paramsList: 'ParamsList',
      regId: 'RegId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchNo: 'number',
      lang: 'string',
      paramsList: 'string',
      regId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

