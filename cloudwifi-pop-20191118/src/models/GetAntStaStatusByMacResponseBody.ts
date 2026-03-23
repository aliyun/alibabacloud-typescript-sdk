// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAntStaStatusByMacResponseBody extends $dara.Model {
  /**
   * @example
   * {
   * "status": 1
   * }
   */
  data?: { [key: string]: any };
  /**
   * @example
   * 111
   */
  errorCode?: number;
  /**
   * @example
   * the status of ap is not online
   */
  errorMessage?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 76F569F1-078E-5A08-881D-810B97C502A5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      errorMessage: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
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

