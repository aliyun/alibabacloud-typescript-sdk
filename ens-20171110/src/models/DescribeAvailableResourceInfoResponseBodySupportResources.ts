// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource } from "./DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource";


export class DescribeAvailableResourceInfoResponseBodySupportResources extends $dara.Model {
  supportResource?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource },
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

