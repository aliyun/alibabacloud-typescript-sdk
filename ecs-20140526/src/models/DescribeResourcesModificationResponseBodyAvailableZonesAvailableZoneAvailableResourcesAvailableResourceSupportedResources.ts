// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource } from "./DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource";


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources extends $dara.Model {
  supportedResource?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      supportedResource: 'SupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResource: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource },
    };
  }

  validate() {
    if(Array.isArray(this.supportedResource)) {
      $dara.Model.validateArray(this.supportedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

