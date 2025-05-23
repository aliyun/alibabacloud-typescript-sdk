// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUserKubeconfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to obtain the kubeconfig file that is used to connect to the cluster over the internal network. You can obtain the terminal ID by calling one of the following operations:
   * 
   * *   `true`: obtains the kubeconfig file that is used to connect to the master instance over the internal network.
   * *   `false`: obtains the kubeconfig file that is used to connect to the master instance over the Internet.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  privateIpAddress?: boolean;
  /**
   * @remarks
   * The validity period of the temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320 (3 days).
   * 
   * **
   * 
   * **Usage notes** If you do not specify this parameter, the system specifies a longer validity period. The validity period is returned in the `expiration` parameter.
   * 
   * @example
   * 15
   */
  temporaryDurationMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      temporaryDurationMinutes: 'TemporaryDurationMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'boolean',
      temporaryDurationMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

