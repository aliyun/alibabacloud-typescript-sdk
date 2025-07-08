// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTagResourcesNewResponseBodyTagResources } from "./QueryTagResourcesNewResponseBodyTagResources";


export class QueryTagResourcesNewResponseBody extends $dara.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: QueryTagResourcesNewResponseBodyTagResources[];
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
      tagResources: { 'type': 'array', 'itemType': QueryTagResourcesNewResponseBodyTagResources },
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

