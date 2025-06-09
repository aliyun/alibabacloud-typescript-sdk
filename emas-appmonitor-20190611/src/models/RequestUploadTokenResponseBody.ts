// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RequestUploadTokenResponseBodyModel } from "./RequestUploadTokenResponseBodyModel";


export class RequestUploadTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  model?: RequestUploadTokenResponseBodyModel;
  /**
   * @example
   * AB8AB5EC-9636-421D-AE7C-BB227DFC95B0
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
      model: RequestUploadTokenResponseBodyModel,
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

