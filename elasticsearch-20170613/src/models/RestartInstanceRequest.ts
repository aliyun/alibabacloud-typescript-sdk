// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The restart parameters.
   * 
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
   * The client token that is used to ensure the idempotence of the request. You can generate the value of this parameter on the client side. Ensure that the value is unique across different requests and contains a maximum of 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to ignore the cluster state and force a restart. Valid values:
   * - true: Ignores the cluster state.
   * - false: Does not ignore the cluster state. This is the default value.
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

