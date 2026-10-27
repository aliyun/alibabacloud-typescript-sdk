// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubaccountK8sClusterUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the internal network connection configuration is obtained. Valid values:
   * - `true`: Obtains only the KubeConfig credentials for the internal network connection.
   * - `false`: Obtains only the KubeConfig credentials for the public network connection.
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
   * Valid values: 15 to 4320, which indicates a maximum of 3 days.
   * > If you do not specify this parameter, the system automatically determines a longer validity period. The specific expiration time is determined by the value of the returned expiration field.
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

