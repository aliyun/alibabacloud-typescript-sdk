// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodeGroupsResponseBodyGroups } from "./ListNodeGroupsResponseBodyGroups";


export class ListNodeGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node groups.
   */
  groups?: ListNodeGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListNodeGroupsResponseBodyGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

