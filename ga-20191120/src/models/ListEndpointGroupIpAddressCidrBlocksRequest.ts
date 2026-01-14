// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointGroupIpAddressCidrBlocksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp17frjjh0udz4q****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The region ID of the endpoint group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
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
      endpointGroupRegion: 'EndpointGroupRegion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointGroupRegion: 'string',
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

