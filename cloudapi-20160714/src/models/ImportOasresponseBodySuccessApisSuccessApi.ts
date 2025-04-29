// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOASResponseBodySuccessApisSuccessApi extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 92af1abffc2443eaa2b815fdbd9c13f1
   */
  apiId?: string;
  /**
   * @remarks
   * Indicates that the operation is CREATE or MODIFY.
   * 
   * @example
   * CREATE
   */
  apiOperation?: string;
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
      apiId: 'ApiId',
      apiOperation: 'ApiOperation',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiOperation: 'string',
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

