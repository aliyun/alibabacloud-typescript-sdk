// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodySupportResourcesSupportResource } from "./DescribeAvailableResourceResponseBodySupportResourcesSupportResource";


export class DescribeAvailableResourceResponseBodySupportResources extends $dara.Model {
  supportResource?: DescribeAvailableResourceResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportResourcesSupportResource },
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

