// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOASResponseBodyFailedApisFailedApi extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid Api Definition.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP method configured when you created the API.
   * 
   * @example
   * POST
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request path configured when you created the API.
   * 
   * @example
   * /st1
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      httpMethod: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

