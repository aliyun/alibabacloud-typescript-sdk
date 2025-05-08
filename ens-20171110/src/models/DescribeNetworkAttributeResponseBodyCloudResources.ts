// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType } from "./DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType";


export class DescribeNetworkAttributeResponseBodyCloudResources extends $dara.Model {
  cloudResourceSetType?: DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType[];
  static names(): { [key: string]: string } {
    return {
      cloudResourceSetType: 'CloudResourceSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceSetType: { 'type': 'array', 'itemType': DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType },
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

