// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMscpRiskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Code
   * 
   * @example
   * Code
   */
  code?: string;
  /**
   * @remarks
   * Data
   * 
   * @example
   * Data
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * Msg
   * 
   * @example
   * Msg
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * RequestId
   */
  requestId?: string;
  /**
   * @remarks
   * Success
   * 
   * @example
   * Success
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

