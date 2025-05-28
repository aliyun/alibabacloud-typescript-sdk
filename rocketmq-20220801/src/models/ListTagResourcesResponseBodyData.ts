// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesResponseBodyDataTagResources } from "./ListTagResourcesResponseBodyDataTagResources";


export class ListTagResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The position from which the next query starts.
   * 
   * @example
   * d09e2b63e1b12d905b7080ff70
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F00C6A70-C782-5DD6-9D11-0CFC710100C7
   */
  requestId?: string;
  /**
   * @remarks
   * Resource tag relationships.
   */
  tagResources?: ListTagResourcesResponseBodyDataTagResources[];
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
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyDataTagResources },
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

