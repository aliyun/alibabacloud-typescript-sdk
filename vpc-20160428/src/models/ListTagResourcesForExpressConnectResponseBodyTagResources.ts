// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesForExpressConnectResponseBodyTagResourcesTagResource } from "./ListTagResourcesForExpressConnectResponseBodyTagResourcesTagResource";


export class ListTagResourcesForExpressConnectResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesForExpressConnectResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesForExpressConnectResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

