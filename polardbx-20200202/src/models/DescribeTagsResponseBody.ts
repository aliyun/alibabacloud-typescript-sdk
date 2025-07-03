// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagsResponseBodyTagInfos } from "./DescribeTagsResponseBodyTagInfos";


export class DescribeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * requestid
   */
  requestId?: string;
  tagInfos?: DescribeTagsResponseBodyTagInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagInfos: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTagInfos },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfos)) {
      $dara.Model.validateArray(this.tagInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

