// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database instance. You can call the [ListInstances](https://www.alibabacloud.com/help/en/data-management-service/latest/listinstances) or [GetInstance](https://www.alibabacloud.com/help/en/data-management-service/latest/getinstance) operation to query the database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 183****
   */
  instanceId?: number;
  /**
   * @remarks
   * The password of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://www.alibabacloud.com/help/en/data-management-service/latest/getuseractivetenant) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The username of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * username
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      tid: 'Tid',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      password: 'string',
      tid: 'number',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

