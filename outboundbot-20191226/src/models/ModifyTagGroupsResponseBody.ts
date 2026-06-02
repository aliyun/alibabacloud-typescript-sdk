// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTagGroupsResponseBodyTagGroups extends $dara.Model {
  /**
   * @example
   * 365b955d-6f4d-4ab5-a6e1-9a301307f4b1
   */
  scriptId?: string;
  tagGroup?: string;
  /**
   * @example
   * 54629be9-0746-464a-ab59-4830242cf644
   */
  tagGroupId?: string;
  /**
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
   * @example
   * 365b955d-6f4d-4ab5-a6e1-9a301307f4b1
   */
  scriptId?: string;
  tagGroup?: string;
  /**
   * @example
   * 19b23e92-4ee3-4129-8c2e-e1968670d887
   */
  tagId?: string;
  /**
   * @example
   * 1
   */
  tagIndex?: number;
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 5a865b03-d2b9-4ef9-be98-f21fa0d93744
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tagGroups?: ModifyTagGroupsResponseBodyTagGroups[];
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

