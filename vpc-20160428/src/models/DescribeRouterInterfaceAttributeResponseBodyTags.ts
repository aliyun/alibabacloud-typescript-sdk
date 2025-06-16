// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouterInterfaceAttributeResponseBodyTagsTags } from "./DescribeRouterInterfaceAttributeResponseBodyTagsTags";


export class DescribeRouterInterfaceAttributeResponseBodyTags extends $dara.Model {
  tags?: DescribeRouterInterfaceAttributeResponseBodyTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribeRouterInterfaceAttributeResponseBodyTagsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

