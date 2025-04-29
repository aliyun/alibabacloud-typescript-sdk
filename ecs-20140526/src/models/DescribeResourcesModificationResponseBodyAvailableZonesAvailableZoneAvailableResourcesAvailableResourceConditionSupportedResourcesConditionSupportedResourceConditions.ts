// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditionsCondition } from "./DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditionsCondition";


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditions extends $dara.Model {
  condition?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditionsCondition[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditionsCondition },
    };
  }

  validate() {
    if(Array.isArray(this.condition)) {
      $dara.Model.validateArray(this.condition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

