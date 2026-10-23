// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePublicIpAddressRequest extends $dara.Model {
  dryRun?: boolean;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  publicIpAddress?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: 'string',
      publicIpAddress: 'string',
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

