// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Resource } from "./Resource";


export class ListTaggedResourcesOutput extends $dara.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  resources?: Resource[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resources: { 'type': 'array', 'itemType': Resource },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

