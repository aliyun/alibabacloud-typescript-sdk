// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the created component configuration.
   * 
   * @example
   * 4d5ecf02-3d01-11f0-8c90-00163e1029af
   */
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'configId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code` is `Success`, the authorization is successful.
   * - Other status codes indicate that the authorization failed. If the authorization failed, check the `message` field for the detailed fault message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAgentConfigResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code` is `Success`, this field is empty.
   * - Otherwise, this field contains the error message of the request.
   * 
   * @example
   * Requests for llm service failed
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAgentConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

