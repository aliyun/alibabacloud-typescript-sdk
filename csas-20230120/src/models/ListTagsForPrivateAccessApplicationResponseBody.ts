// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags extends $dara.Model {
  /**
   * @example
   * 2022-07-01 16:05:26
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
   * tag-c0cb77857a99****
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

export class ListTagsForPrivateAccessApplicationResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * pa-application-7a4445897856****
   */
  applicationId?: string;
  tags?: ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags },
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

export class ListTagsForPrivateAccessApplicationResponseBody extends $dara.Model {
  applications?: ListTagsForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @example
   * 7241F45B-E8D3-5BA3-8172-8A58AC2AB0FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListTagsForPrivateAccessApplicationResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

