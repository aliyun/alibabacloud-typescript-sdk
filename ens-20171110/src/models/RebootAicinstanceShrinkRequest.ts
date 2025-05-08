// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootAICInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AIC instance.
   * 
   * @example
   * aic-instance****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the AIC instance groups.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * cas-instance****
   */
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceIdsShrink: 'InstanceIds',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceIdsShrink: 'string',
      serverId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

