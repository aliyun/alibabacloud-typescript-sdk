// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesResponseBodyTagResources } from "./ListTagResourcesResponseBodyTagResources";


export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token of the first page to query.
   * 
   * @example
   * abcfeg368547ccdef
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C78D9B61-69D8-5655-A312-A15DA5EA5D5E
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that are added to specified one or more resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

