// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  processId?: string;
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processId: 'ProcessId',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processId: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

