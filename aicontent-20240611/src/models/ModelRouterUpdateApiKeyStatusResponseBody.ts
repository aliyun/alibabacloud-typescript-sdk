// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateApiKeyStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 3220
   */
  id?: number;
  /**
   * @remarks
   * The status of the API key. Valid values:
   * 
   * - active: The API key is valid.
   * - disabled: The API key is invalid.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterUpdateApiKeyStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data object.
   */
  data?: ModelRouterUpdateApiKeyStatusResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ModelRouterUpdateApiKeyStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

