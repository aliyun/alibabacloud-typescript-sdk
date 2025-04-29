// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResources } from "./DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResources";
import { DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources } from "./DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources";


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource extends $dara.Model {
  /**
   * @remarks
   * The resource types that resources can be changed to after the resources meet specified conditions. If the conditions are met, you can change the current resource to a resource in the list.
   */
  conditionSupportedResources?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResources;
  /**
   * @remarks
   * The information about the supported resources.
   */
  supportedResources?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   InstanceType
   * *   SystemDisk
   * 
   * @example
   * InstanceType
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditionSupportedResources: 'ConditionSupportedResources',
      supportedResources: 'SupportedResources',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionSupportedResources: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResources,
      supportedResources: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources,
      type: 'string',
    };
  }

  validate() {
    if(this.conditionSupportedResources && typeof (this.conditionSupportedResources as any).validate === 'function') {
      (this.conditionSupportedResources as any).validate();
    }
    if(this.supportedResources && typeof (this.supportedResources as any).validate === 'function') {
      (this.supportedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

