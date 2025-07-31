// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * newKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The values of the tags.
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * >  If not all results are returned in the first query, this parameter is returned. You can pass in the value of this parameter in the next query.
   * 
   * @example
   * 212db86****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EEDBE38F-5CF5-4316-AAC2-35817BA60D68
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the tags.
   */
  tags?: DescribeTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
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

