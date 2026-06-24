// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOpenSourceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent repeated submissions.
   * 
   * @example
   * f6af6bb123988d191bfe01c9a9b
   */
  clientToken?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-20p****04
   */
  instanceId?: string;
  /**
   * @remarks
   * The account password.
   * 
   * @example
   * 123456Aa
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * myname
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

