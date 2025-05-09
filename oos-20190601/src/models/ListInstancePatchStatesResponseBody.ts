// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancePatchStatesResponseBodyInstancePatchStates } from "./ListInstancePatchStatesResponseBodyInstancePatchStates";


export class ListInstancePatchStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of patches of the instance.
   */
  instancePatchStates?: ListInstancePatchStatesResponseBodyInstancePatchStates[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9A47C086-E64D-52EE-8B2C-EFD23877C55E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instancePatchStates: 'InstancePatchStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePatchStates: { 'type': 'array', 'itemType': ListInstancePatchStatesResponseBodyInstancePatchStates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instancePatchStates)) {
      $dara.Model.validateArray(this.instancePatchStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

