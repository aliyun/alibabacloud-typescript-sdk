// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource } from "./DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource";


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResources extends $dara.Model {
  availableResource?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource },
    };
  }

  validate() {
    if(Array.isArray(this.availableResource)) {
      $dara.Model.validateArray(this.availableResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

