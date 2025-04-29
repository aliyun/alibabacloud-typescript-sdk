// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResource } from "./DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResource";


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResources extends $dara.Model {
  conditionSupportedResource?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      conditionSupportedResource: 'ConditionSupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionSupportedResource: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResource },
    };
  }

  validate() {
    if(Array.isArray(this.conditionSupportedResource)) {
      $dara.Model.validateArray(this.conditionSupportedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

