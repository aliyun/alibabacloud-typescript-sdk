// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomAuthPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization effect.
   * 
   * This parameter is required.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
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
   * The ID of the MSMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The authorized action.
   * 
   * This parameter is required.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
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
      effect: 'Effect',
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      permitAction: 'PermitAction',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      permitAction: 'string',
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

