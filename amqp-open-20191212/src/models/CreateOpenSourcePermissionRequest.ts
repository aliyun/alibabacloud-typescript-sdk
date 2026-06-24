// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenSourcePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * f6af6bb123988d191bfe01c9a9b
   */
  clientToken?: string;
  /**
   * @remarks
   * The regular expression for the configure permission.
   * 
   * @example
   * ^$
   */
  configure?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * The regular expression for the read permission.
   * 
   * @example
   * ^$
   */
  read?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * myName
   */
  userName?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * @example
   * vhostName
   */
  vhost?: string;
  /**
   * @remarks
   * The regular expression for the write permission.
   * 
   * @example
   * order_exchange
   */
  write?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configure: 'Configure',
      instanceId: 'InstanceId',
      read: 'Read',
      userName: 'UserName',
      vhost: 'Vhost',
      write: 'Write',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configure: 'string',
      instanceId: 'string',
      read: 'string',
      userName: 'string',
      vhost: 'string',
      write: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

