// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfo } from "./DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfo";


export class DescribeZonesResponseBodyZonesZoneAvailableResources extends $dara.Model {
  resourcesInfo?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcesInfo: 'ResourcesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcesInfo: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resourcesInfo)) {
      $dara.Model.validateArray(this.resourcesInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

