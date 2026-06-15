// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePublicIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * hide
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ``121.40.**.**``
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * @example
   * cn-hangzhou
   */
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

