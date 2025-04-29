// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources } from "./DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources";


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource extends $dara.Model {
  /**
   * @remarks
   * The information about the resources.
   */
  supportedResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   Zone: zone
   * *   IoOptimized: I/O optimized resource
   * *   InstanceType: instance type
   * *   SystemDisk: system disk
   * *   DataDisk: data disk
   * *   Network: network type
   * *   ddh: dedicated host
   * 
   * @example
   * InstanceType
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

