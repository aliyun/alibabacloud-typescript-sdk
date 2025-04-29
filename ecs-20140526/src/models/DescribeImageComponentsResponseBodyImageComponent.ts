// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageComponentsResponseBodyImageComponentImageComponentSet } from "./DescribeImageComponentsResponseBodyImageComponentImageComponentSet";


export class DescribeImageComponentsResponseBodyImageComponent extends $dara.Model {
  imageComponentSet?: DescribeImageComponentsResponseBodyImageComponentImageComponentSet[];
  static names(): { [key: string]: string } {
    return {
      imageComponentSet: 'ImageComponentSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageComponentSet: { 'type': 'array', 'itemType': DescribeImageComponentsResponseBodyImageComponentImageComponentSet },
    };
  }

  validate() {
    if(Array.isArray(this.imageComponentSet)) {
      $dara.Model.validateArray(this.imageComponentSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

