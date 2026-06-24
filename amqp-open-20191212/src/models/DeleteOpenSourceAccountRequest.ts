// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOpenSourceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9n***
   */
  instanceId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * KcUt5e5TbhkwaLyLl
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

