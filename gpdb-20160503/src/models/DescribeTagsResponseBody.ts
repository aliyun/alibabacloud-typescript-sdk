// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagsResponseBodyTags } from "./DescribeTagsResponseBodyTags";


export class DescribeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A29EC547-B392-4340-AA4F-7C0A7B626E74
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tags.
   */
  tags?: DescribeTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTags },
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

