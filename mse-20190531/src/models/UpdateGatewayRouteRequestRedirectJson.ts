// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteRequestRedirectJSON extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 302
   */
  code?: number;
  /**
   * @remarks
   * The hostname to be redirected to.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The path to be redirected to.
   * 
   * @example
   * /test
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      host: 'Host',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      host: 'string',
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

