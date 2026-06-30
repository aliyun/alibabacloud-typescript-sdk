// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableAccelerateAreasRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator instance.
   * 
   * @example
   * ga-bp1yeeq8yfoyszmqy****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The access mode of the acceleration area. Valid values:
   * 
   * - anycast: queries the supported anycast acceleration areas.
   * 
   * - Other values: queries the supported non-anycast acceleration areas.
   * 
   * @example
   * anycast
   */
  accessMode?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessMode: 'AccessMode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessMode: 'string',
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

