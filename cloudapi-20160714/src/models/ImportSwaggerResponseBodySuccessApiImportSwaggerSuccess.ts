// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportSwaggerResponseBodySuccessApiImportSwaggerSuccess extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the operation is CREATE or MODIFY.
   * 
   * @example
   * CREATE
   */
  apiOperation?: string;
  /**
   * @remarks
   * The UID of the successfully imported API.
   * 
   * @example
   * 8e274ec61cf6468e83b68371956831cb
   */
  apiUid?: string;
  /**
   * @remarks
   * The HTTP method configured when the API is created.
   * 
   * @example
   * get
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
      apiOperation: 'ApiOperation',
      apiUid: 'ApiUid',
      httpMethod: 'HttpMethod',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiOperation: 'string',
      apiUid: 'string',
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

