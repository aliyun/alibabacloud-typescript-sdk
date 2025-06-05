// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources } from "./DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources";


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource extends $dara.Model {
  /**
   * @remarks
   * The information about the resources that are available in the zones.
   */
  supportedResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   InstanceTypeFamily: instance families.
   * *   InstanceType: instance types.
   * 
   * @example
   * InstanceTypeFamily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      supportedResources: 'SupportedResources',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources,
      type: 'string',
    };
  }

  validate() {
    if(this.supportedResources && typeof (this.supportedResources as any).validate === 'function') {
      (this.supportedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

