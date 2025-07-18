// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsForPrivateAccessPolicyResponseBodyPolicesTags extends $dara.Model {
  /**
   * @remarks
   * 内网访问标签创建时间。
   * 
   * @example
   * 2023-02-21 14:10:16
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponseBodyPolices extends $dara.Model {
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  tags?: ListTagsForPrivateAccessPolicyResponseBodyPolicesTags[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsForPrivateAccessPolicyResponseBodyPolicesTags },
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

export class ListTagsForPrivateAccessPolicyResponseBody extends $dara.Model {
  polices?: ListTagsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 9EE61139-A6A8-5E13-80AF-83435C21B26B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListTagsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

