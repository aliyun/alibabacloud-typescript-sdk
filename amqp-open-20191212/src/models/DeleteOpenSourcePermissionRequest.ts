// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOpenSourcePermissionRequest extends $dara.Model {
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
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * myName
   */
  userName?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * This parameter is required.
   * 
   * @example
   * production
   */
  vhost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userName: 'UserName',
      vhost: 'Vhost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userName: 'string',
      vhost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

