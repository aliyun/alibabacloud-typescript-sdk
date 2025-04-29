// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute } from "./DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute";


export class DescribeApiGroupsResponseBodyApiGroupAttributes extends $dara.Model {
  apiGroupAttribute?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute[];
  static names(): { [key: string]: string } {
    return {
      apiGroupAttribute: 'ApiGroupAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGroupAttribute: { 'type': 'array', 'itemType': DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.apiGroupAttribute)) {
      $dara.Model.validateArray(this.apiGroupAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

