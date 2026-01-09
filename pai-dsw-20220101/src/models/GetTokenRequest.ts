// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenRequest extends $dara.Model {
  /**
   * @example
   * Aliyun
   */
  audience?: string;
  /**
   * @remarks
   * The validity period. Unit: seconds.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * Access
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      audience: 'Audience',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audience: 'string',
      expireTime: 'number',
      instanceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

