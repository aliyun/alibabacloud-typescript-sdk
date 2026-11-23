// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserMetricsEndpoint extends $dara.Model {
  /**
   * @remarks
   * The HTTP path of the metric collection API.
   * 
   * @example
   * /metrics
   */
  path?: string;
  /**
   * @remarks
   * The port number on which the metric collection service listens.
   * 
   * @example
   * 40002
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

