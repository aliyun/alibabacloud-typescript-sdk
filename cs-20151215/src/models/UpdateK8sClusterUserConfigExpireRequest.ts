// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sClusterUserConfigExpireRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the expiration time of the kubeconfig file. Unit: hours.
   * 
   * Valid values: [1, 1876000]. The maximum value is 100 years.
   * 
   * This parameter is required.
   * 
   * @example
   * 720
   */
  expireHour?: number;
  /**
   * @remarks
   * The RAM user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * The ID of the Resource Access Management (RAM) user that you use.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      expireHour: 'expire_hour',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireHour: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

