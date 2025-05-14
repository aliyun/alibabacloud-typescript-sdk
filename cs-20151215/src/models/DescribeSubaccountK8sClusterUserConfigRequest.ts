// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubaccountK8sClusterUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to obtain the kubeconfig file used to connect to the cluster over the internal network. Valid values:
   * 
   * *   `true`: Obtain the kubeconfig file used to connect to the cluster over the internal network.
   * *   `false`: Obtain the kubeconfig file used to connect to the cluster over the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  privateIpAddress?: boolean;
  /**
   * @remarks
   * The validity period of the temporary kubeconfig file. Unit: minutes.
   * 
   * Valid values: 15 to 4320 (three days).
   * 
   * > If you leave this parameter empty, the system sets a longer validity period and returns the value in the expiration parameter of the response.
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

