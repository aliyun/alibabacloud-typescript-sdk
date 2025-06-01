// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrivateAccessTagsResponseBodyTags } from "./ListPrivateAccessTagsResponseBodyTags";


export class ListPrivateAccessTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54C1D236-CDB9-586C-B44D-AFDCEA195545
   */
  requestId?: string;
  /**
   * @remarks
   * The internal access tags.
   */
  tags?: ListPrivateAccessTagsResponseBodyTags[];
  /**
   * @remarks
   * The total number of internal access tags.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListPrivateAccessTagsResponseBodyTags },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

