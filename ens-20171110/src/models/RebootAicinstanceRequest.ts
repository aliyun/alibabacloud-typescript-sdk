// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootAICInstanceRequest extends $dara.Model {
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
  instanceIds?: string[];
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
      instanceIds: 'InstanceIds',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      serverId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

