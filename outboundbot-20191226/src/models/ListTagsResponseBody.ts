// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsResponseBodyTagGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the script.
   * 
   * @example
   * 365b955d-6f4d-4ab5-a6e1-9a301307f4b1
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the tag group.
   * 
   * @example
   * 当前学历
   */
  tagGroup?: string;
  /**
   * @remarks
   * The ID of the tag group.
   * 
   * @example
   * 38c03261-9fe8-4b9b-8c3b-983a60319012
   */
  tagGroupId?: string;
  /**
   * @remarks
   * The index of the tag group.
   * 
   * @example
   * 1
   */
  tagGroupIndex?: number;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagGroupId: 'TagGroupId',
      tagGroupIndex: 'TagGroupIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
      tagGroup: 'string',
      tagGroupId: 'string',
      tagGroupIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The ID of the script.
   * 
   * @example
   * 8a4c6d3d-5ed6-44ca-b779-16c20f8862be
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the tag group.
   * 
   * @example
   * 当前学历
   */
  tagGroup?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * d62be647-6202-4b1f-9708-0baeec552635
   */
  tagId?: string;
  /**
   * @remarks
   * The index of the tag.
   * 
   * @example
   * 1
   */
  tagIndex?: number;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * 本科
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagId: 'TagId',
      tagIndex: 'TagIndex',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
      tagGroup: 'string',
      tagId: 'string',
      tagIndex: 'number',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of tag groups.
   */
  tagGroups?: ListTagsResponseBodyTagGroups[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagGroups: 'TagGroups',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagGroups: { 'type': 'array', 'itemType': ListTagsResponseBodyTagGroups },
      tags: { 'type': 'array', 'itemType': ListTagsResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.tagGroups)) {
      $dara.Model.validateArray(this.tagGroups);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

