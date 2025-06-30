// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag } from "./DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag";


export class DescribeZonesResponseBodyZonesZoneResourceTags extends $dara.Model {
  resourceTag?: DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag[];
  static names(): { [key: string]: string } {
    return {
      resourceTag: 'ResourceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTag: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTag)) {
      $dara.Model.validateArray(this.resourceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

