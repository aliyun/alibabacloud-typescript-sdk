// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource } from "./DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource";


export class DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources extends $dara.Model {
  supportResource?: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource },
    };
  }

  validate() {
    if(Array.isArray(this.supportResource)) {
      $dara.Model.validateArray(this.supportResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

