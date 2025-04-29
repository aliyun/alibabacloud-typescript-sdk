// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DryRunSwaggerResponseBodyFailedApiImportSwaggerFailed extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the API is created.
   * 
   * @example
   * api already exists : apiUid ===> 8e274ec61cf6468e83b68371956831cb
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP method configured when the API is created.
   * 
   * @example
   * post
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request path configured when the API is created.
   * 
   * @example
   * /http/get/mapping
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

