// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HTTPHeader } from "./Httpheader";


export class HTTPGetAction extends $dara.Model {
  /**
   * @remarks
   * The hostname to which you want to connect. The default value is the IP address of the pod. You may need to specify Host in HttpHeaders.
   * 
   * @example
   * 172.22.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The custom headers that you need to specify in the request. Duplicate headers are allowed in an HTTP request.
   */
  httpHeaders?: HTTPHeader[];
  /**
   * @remarks
   * The path of a URL.
   * 
   * @example
   * /path1
   */
  path?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The scheme that you want to use to connect to the host. Default value: http.
   * 
   * @example
   * http
   */
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpHeaders: 'HttpHeaders',
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpHeaders: { 'type': 'array', 'itemType': HTTPHeader },
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.httpHeaders)) {
      $dara.Model.validateArray(this.httpHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

