// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallMonitoringAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the host.
   * 
   * This parameter is required.
   * 
   * @example
   * host-****
   */
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

