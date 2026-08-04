// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags extends $dara.Model {
  /**
   * @remarks
   * Creation time of the private network access tag.
   * 
   * @example
   * 2022-07-01 16:05:26
   */
  createTime?: string;
  /**
   * @remarks
   * Description of the private network access tag.
   * 
   * @example
   * 这是一条内网访问标签
   */
  description?: string;
  /**
   * @remarks
   * Name of the internal network access tag.
   * 
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @remarks
   * Private network access tag ID.
   * 
   * @example
   * tag-c0cb77857a99****
   */
  tagId?: string;
  /**
   * @remarks
   * Private network access tag type. Values:
   * 
   * - **Default**: Default.
   * 
   * - **Custom**: Custom.
   * 
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
   * @remarks
   * Private network access application ID.
   * 
   * @example
   * pa-application-7a4445897856****
   */
  applicationId?: string;
  /**
   * @remarks
   * Collection of private network access tags.
   */
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
  /**
   * @remarks
   * List of private network access applications.
   */
  applications?: ListTagsForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @remarks
   * The ID of this request.
   * 
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

