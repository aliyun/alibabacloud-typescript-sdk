// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartComputeInstanceRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  selectedZones?: string;
  serviceVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      selectedZones: 'SelectedZones',
      serviceVersion: 'ServiceVersion',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      selectedZones: 'string',
      serviceVersion: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

