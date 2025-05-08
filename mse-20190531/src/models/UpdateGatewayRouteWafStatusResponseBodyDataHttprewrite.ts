// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteWafStatusResponseBodyDataHTTPRewrite extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The HTTP request path.
   * 
   * @example
   * /test/client
   */
  path?: string;
  /**
   * @remarks
   * The path type of the HTTP request.
   * 
   * @example
   * PRE
   */
  pathType?: string;
  /**
   * @remarks
   * The matching pattern.
   * 
   * @example
   * /test
   */
  pattern?: string;
  /**
   * @remarks
   * The HTTP status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The replacement.
   * 
   * @example
   * test
   */
  substitution?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      pathType: 'PathType',
      pattern: 'Pattern',
      status: 'Status',
      substitution: 'Substitution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      pathType: 'string',
      pattern: 'string',
      status: 'string',
      substitution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

