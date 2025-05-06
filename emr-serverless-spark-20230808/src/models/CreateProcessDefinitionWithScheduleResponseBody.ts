// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProcessDefinitionWithScheduleResponseBodyData } from "./CreateProcessDefinitionWithScheduleResponseBodyData";


export class CreateProcessDefinitionWithScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code that is returned by the backend server.
   * 
   * @example
   * 1400009
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateProcessDefinitionWithScheduleResponseBodyData;
  /**
   * @remarks
   * Indicates whether the request failed.
   * 
   * @example
   * false
   */
  failed?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the returned code.
   * 
   * @example
   * No permission for resource action
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      failed: 'failed',
      httpStatusCode: 'httpStatusCode',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateProcessDefinitionWithScheduleResponseBodyData,
      failed: 'string',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

