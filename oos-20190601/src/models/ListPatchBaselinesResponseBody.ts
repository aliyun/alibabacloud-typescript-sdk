// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPatchBaselinesResponseBodyPatchBaselines } from "./ListPatchBaselinesResponseBodyPatchBaselines";


export class ListPatchBaselinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
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
   * The number of entries returned on each page.
   */
  nextToken?: string;
  /**
   * @remarks
   * The patch baselines.
   */
  patchBaselines?: ListPatchBaselinesResponseBodyPatchBaselines[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 432996A1-03C0-5C4C-A8E6-66C4110765B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patchBaselines: 'PatchBaselines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patchBaselines: { 'type': 'array', 'itemType': ListPatchBaselinesResponseBodyPatchBaselines },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.patchBaselines)) {
      $dara.Model.validateArray(this.patchBaselines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

