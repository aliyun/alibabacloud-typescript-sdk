// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource } from "./DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource";


export class DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources extends $dara.Model {
  availableSpotResource?: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource[];
  static names(): { [key: string]: string } {
    return {
      availableSpotResource: 'AvailableSpotResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpotResource: { 'type': 'array', 'itemType': DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource },
    };
  }

  validate() {
    if(Array.isArray(this.availableSpotResource)) {
      $dara.Model.validateArray(this.availableSpotResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

