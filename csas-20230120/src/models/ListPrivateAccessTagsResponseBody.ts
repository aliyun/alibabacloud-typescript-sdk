// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessTagsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The IDs of the internal access applications.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The time when the internal access tag was created.
   * 
   * @example
   * 2022-10-10 11:39:34
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the internal access tag.
   */
  description?: string;
  /**
   * @remarks
   * The name of the internal access tag.
   * 
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the internal access policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the internal access tag.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @remarks
   * The type of the internal access tag. Valid values:
   * 
   * *   **Default**
   * *   **Custom**
   * 
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      policyIds: 'PolicyIds',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      tagId: 'string',
      tagType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

