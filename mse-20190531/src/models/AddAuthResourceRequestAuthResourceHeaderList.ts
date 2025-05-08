// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuthResourceRequestAuthResourceHeaderList extends $dara.Model {
  /**
   * @remarks
   * The parameter of the HTTP header.
   * 
   * @example
   * Access-Control-Allow-Origin
   */
  headerKey?: string;
  /**
   * @remarks
   * The header matching mode.
   * 
   * Valid values:
   * 
   * *   SUFFIX
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   EXIST
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PREFIX
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   EQUAL
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   EXCLUDE
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NOT_EQUAL
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NOT_EXIST
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   REGREX
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   INCLUDE
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * EQUAL
   */
  headerMethod?: string;
  /**
   * @remarks
   * The parameter value of the HTTP header.
   * 
   * @example
   * *
   */
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      headerMethod: 'HeaderMethod',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      headerMethod: 'string',
      headerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

