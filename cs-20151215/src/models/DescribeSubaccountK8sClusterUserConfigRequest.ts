// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubaccountK8sClusterUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to obtain the internal network connection configuration. Valid values:
   * 
   * - `true`: Obtains only the KubeConfig credentials for internal network connections.
   * - `false`: Obtains only the KubeConfig credentials for public network connections.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  privateIpAddress?: boolean;
  /**
   * @remarks
   * The validity period of the temporary KubeConfig. Unit: minutes.
   * 
   * Valid values: [15, 4320], which is up to 3 days.
   * > If this parameter is not set, the system automatically determines a longer validity period. The specific expiration time is indicated by the value of the expiration field in the response.
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

