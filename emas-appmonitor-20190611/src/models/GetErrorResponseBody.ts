// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetErrorResponseBodyModel } from "./GetErrorResponseBodyModel";


export class GetErrorResponseBody extends $dara.Model {
  args?: { [key: string]: any };
  /**
   * @example
   * Success
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  model?: GetErrorResponseBodyModel;
  /**
   * @example
   * A8313212-EB4E-4E15-A7F9-D9C8F3FE8E94
   */
  requestId?: string;
  /**
   * @example
   * True
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
      model: GetErrorResponseBodyModel,
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

