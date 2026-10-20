// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionWithScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workflow definition ID.
   * 
   * @example
   * 160************
   */
  code?: number;
  /**
   * @remarks
   * The workflow definition number.
   * 
   * @example
   * 12342
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API return code.
   * 
   * @example
   * 1400009
   */
  code?: number;
  /**
   * @remarks
   * The returned result.
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
   * The detailed description corresponding to the request code.
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
   * Indicates whether the request is successful.
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

