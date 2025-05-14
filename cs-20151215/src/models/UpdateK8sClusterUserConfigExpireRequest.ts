// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sClusterUserConfigExpireRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the kubeconfig file. Unit: hours.
   * 
   * > The value of expire_hour must be greater than 0 and equal to or smaller than 876000 (100 years).
   * 
   * This parameter is required.
   * 
   * @example
   * 720
   */
  expireHour?: number;
  /**
   * @remarks
   * The user ID.
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

