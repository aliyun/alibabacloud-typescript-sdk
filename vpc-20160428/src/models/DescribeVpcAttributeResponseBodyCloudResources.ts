// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType } from "./DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType";


export class DescribeVpcAttributeResponseBodyCloudResources extends $dara.Model {
  cloudResourceSetType?: DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType[];
  static names(): { [key: string]: string } {
    return {
      cloudResourceSetType: 'CloudResourceSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceSetType: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType },
    };
  }

  validate() {
    if(Array.isArray(this.cloudResourceSetType)) {
      $dara.Model.validateArray(this.cloudResourceSetType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

