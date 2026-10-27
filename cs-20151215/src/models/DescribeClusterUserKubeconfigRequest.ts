// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUserKubeconfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve the internal network connection configuration. Valid values:
   * - `true`: Retrieves only the internal network connection credentials.
   * - `false`: Retrieves only the public network connection credentials. 
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  privateIpAddress?: boolean;
  /**
   * @remarks
   * The validity period of the temporary kubeconfig file, in minutes. Valid values: 15 (15 minutes) to 4320 (3 days).
   * > If you do not specify this parameter, the system automatically determines a longer validity period. You can determine the specific expiration time based on the value of the `expiration` field in the response.
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

