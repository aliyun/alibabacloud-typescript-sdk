// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCopilotStreamResponseResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: string;
  /**
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

