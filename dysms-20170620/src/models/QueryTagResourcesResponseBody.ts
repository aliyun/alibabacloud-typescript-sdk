// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTagResourcesResponseBodyTagResources } from "./QueryTagResourcesResponseBodyTagResources";


export class QueryTagResourcesResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  nextToken?: string;
  requestId?: string;
  tagResources?: QueryTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': QueryTagResourcesResponseBodyTagResources },
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

