// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesResponseBodyTagResources } from "./ListTagResourcesResponseBodyTagResources";


export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * b56*******de4a7eca
   */
  nextToken?: string;
  /**
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      tagResources: 'tagResources',
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

