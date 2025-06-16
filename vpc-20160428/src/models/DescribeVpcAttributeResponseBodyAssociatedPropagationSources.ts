// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAttributeResponseBodyAssociatedPropagationSourcesAssociatedPropagationSources } from "./DescribeVpcAttributeResponseBodyAssociatedPropagationSourcesAssociatedPropagationSources";


export class DescribeVpcAttributeResponseBodyAssociatedPropagationSources extends $dara.Model {
  associatedPropagationSources?: DescribeVpcAttributeResponseBodyAssociatedPropagationSourcesAssociatedPropagationSources[];
  static names(): { [key: string]: string } {
    return {
      associatedPropagationSources: 'AssociatedPropagationSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPropagationSources: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyAssociatedPropagationSourcesAssociatedPropagationSources },
    };
  }

  validate() {
    if(Array.isArray(this.associatedPropagationSources)) {
      $dara.Model.validateArray(this.associatedPropagationSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

