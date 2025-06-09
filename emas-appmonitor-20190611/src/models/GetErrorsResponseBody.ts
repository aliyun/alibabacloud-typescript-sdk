// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetErrorsResponseBodyModel } from "./GetErrorsResponseBodyModel";


export class GetErrorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 500
   */
  errorCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  model?: GetErrorsResponseBodyModel;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * B3AD0FE4-36EF-1641-90B1-77618166F2ff
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      errorCode: 'ErrorCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      message: 'string',
      model: GetErrorsResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

