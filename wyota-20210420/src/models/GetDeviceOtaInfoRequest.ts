// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOtaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baseVersion?: string;
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  model?: string;
  networkType?: string;
  osVersion?: string;
  region?: string;
  regionId?: string;
  targetVersionType?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      channel: 'Channel',
      deviceId: 'DeviceId',
      model: 'Model',
      networkType: 'NetworkType',
      osVersion: 'OsVersion',
      region: 'Region',
      regionId: 'RegionId',
      targetVersionType: 'TargetVersionType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      channel: 'string',
      deviceId: 'string',
      model: 'string',
      networkType: 'string',
      osVersion: 'string',
      region: 'string',
      regionId: 'string',
      targetVersionType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

