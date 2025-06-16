// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen } from "./DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen";


export class DescribeVpcAttributeResponseBodyAssociatedCens extends $dara.Model {
  associatedCen?: DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen[];
  static names(): { [key: string]: string } {
    return {
      associatedCen: 'AssociatedCen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCen: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen },
    };
  }

  validate() {
    if(Array.isArray(this.associatedCen)) {
      $dara.Model.validateArray(this.associatedCen);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

