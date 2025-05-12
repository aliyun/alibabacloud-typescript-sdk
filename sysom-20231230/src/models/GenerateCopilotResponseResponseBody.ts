// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCopilotResponseResponseBody extends $dara.Model {
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
  massage?: string;
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
      massage: 'massage',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      massage: 'string',
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

