// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResource } from "./TagResource";


export class ListTagResourcesOutput extends $dara.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  requestId?: string;
  tagResources?: TagResource[];
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
      tagResources: { 'type': 'array', 'itemType': TagResource },
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

