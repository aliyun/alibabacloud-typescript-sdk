// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAuthPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow or deny access.
   * 
   * This parameter is required.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * Username or Client ID.
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
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * ID of the Cloud Message Queue MQTT version instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The permissions that you want to grant.
   * 
   * This parameter is required.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
  /**
   * @remarks
   * Authorized Topic, supporting multi-level MQTT topics and wildcards.
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

