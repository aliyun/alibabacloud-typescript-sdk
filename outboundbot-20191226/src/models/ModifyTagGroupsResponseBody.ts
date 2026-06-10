// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTagGroupsResponseBodyTagGroups extends $dara.Model {
  /**
   * @remarks
   * The script ID.
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
   * 标签组
   */
  tagGroup?: string;
  /**
   * @remarks
   * The ID of the tag group.
   * 
   * @example
   * 54629be9-0746-464a-ab59-4830242cf644
   */
  tagGroupId?: string;
  /**
   * @remarks
   * The position of the tag group.
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

export class ModifyTagGroupsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The script ID.
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
   * The unique ID of the tag.
   * 
   * @example
   * 19b23e92-4ee3-4129-8c2e-e1968670d887
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

export class ModifyTagGroupsResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 5a865b03-d2b9-4ef9-be98-f21fa0d93744
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
  tagGroups?: ModifyTagGroupsResponseBodyTagGroups[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ModifyTagGroupsResponseBodyTags[];
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
      tagGroups: { 'type': 'array', 'itemType': ModifyTagGroupsResponseBodyTagGroups },
      tags: { 'type': 'array', 'itemType': ModifyTagGroupsResponseBodyTags },
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

