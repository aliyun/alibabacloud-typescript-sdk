// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet extends $dara.Model {
  /**
   * @remarks
   * The path to which the system sends an HTTP GET request for a health check.
   * 
   * @example
   * /usr/nginx/
   */
  path?: string;
  /**
   * @remarks
   * The port to which the system sends an HTTP GET request for a health check.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol type supported by the method. Valid values: HTTP and HTTPS.
   * 
   * @example
   * HTTP
   */
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

