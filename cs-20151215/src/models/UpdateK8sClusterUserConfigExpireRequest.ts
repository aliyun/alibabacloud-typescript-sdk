// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sClusterUserConfigExpireRequest extends $dara.Model {
  /**
   * @remarks
   * The custom expiration time. Unit: hours.
   * 
   * Valid values: [1, 876000]. The maximum value is equivalent to 100 years.
   * 
   * This parameter is required.
   * 
   * @example
   * 720
   */
  expireHour?: number;
  /**
   * @remarks
   * The Resource Access Management (RAM) user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 206945240368******
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

