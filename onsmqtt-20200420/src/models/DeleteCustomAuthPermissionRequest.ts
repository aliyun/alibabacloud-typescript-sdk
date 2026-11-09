// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomAuthPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The username or client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * - USER: username only.
   * - CLIENT: specific client.
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the Micro MSMQ MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The authorized topic. Multi-level MQTT topics and wildcards are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test/t1
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

