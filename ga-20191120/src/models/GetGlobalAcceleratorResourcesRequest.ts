// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGlobalAcceleratorResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Global Accelerator (GA).
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the linked peripheral resource.
   * 
   * @example
   * waf_v2_public_cn-x0r****gr1i
   */
  associatedResourceId?: string;
  /**
   * @remarks
   * The Region ID where the linked instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  associatedResourceRegionId?: string;
  /**
   * @remarks
   * The resource type of the linked peripheral resource.
   * 
   * @example
   * WAF
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * The Region ID where the Alibaba Cloud Global Accelerator (GA) instance is located. The only valid value is cn-hangzhou.
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
      associatedResourceId: 'AssociatedResourceId',
      associatedResourceRegionId: 'AssociatedResourceRegionId',
      associatedResourceType: 'AssociatedResourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      associatedResourceId: 'string',
      associatedResourceRegionId: 'string',
      associatedResourceType: 'string',
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

