// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancePatchesResponseBodyPatches } from "./ListInstancePatchesResponseBodyPatches";


export class ListInstancePatchesResponseBody extends $dara.Model {
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
   * The information about the patch.
   */
  patches?: ListInstancePatchesResponseBodyPatches[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A615755-9C86-5EA6-BF9E-6E8F1AFF9403
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patches: 'Patches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patches: { 'type': 'array', 'itemType': ListInstancePatchesResponseBodyPatches },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.patches)) {
      $dara.Model.validateArray(this.patches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

