// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserTagsResponseBodyTags } from "./DescribeUserTagsResponseBodyTags";


export class DescribeUserTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34AB41F1-04A5-496F-8C8D-634BDBE6A9FB
   */
  requestId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeUserTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeUserTagsResponseBodyTags },
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

