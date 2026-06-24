// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstanceRequest extends $dara.Model {
  /**
   * @example
   * 1. restart nodes example:
   * {
   *   "restartType": "nodeIp",
   *   "nodes": [
   *     "es-cn-xx-data-j-0"
   *   ],
   *   "blueGreenDep": false
   * }
   * 2. restart instance example:
   * {
   *   "restartType": "instance",
   *   "blueGreenDep": false
   * }
   */
  body?: string;
  /**
   * @remarks
   * A unique token used to ensure the idempotence of the request. The client generates this value. The value must be unique among different requests and can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcefully restart the cluster regardless of the cluster status.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientToken: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

