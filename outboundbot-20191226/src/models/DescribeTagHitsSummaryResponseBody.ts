// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagHitsSummaryResponseBodyTagGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag group.
   * 
   * @example
   * 8bb6f8ca-85a3-49f8-86a5-3127902a2156
   */
  id?: string;
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
   * The tag group name.
   * 
   * @example
   * 标签组
   */
  tagGroup?: string;
  /**
   * @remarks
   * The index of the tag group.
   * 
   * @example
   * 0
   */
  tagGroupIndex?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagGroupIndex: 'TagGroupIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      scriptId: 'string',
      tagGroup: 'string',
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

export class DescribeTagHitsSummaryResponseBodyTagHitsList extends $dara.Model {
  /**
   * @remarks
   * The hit count for the tag.
   * 
   * @example
   * 1
   */
  hitCount?: number;
  /**
   * @remarks
   * The tag group name.
   * 
   * @example
   * 当前学历
   */
  tagGroup?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 本科
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      hitCount: 'HitCount',
      tagGroup: 'TagGroup',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitCount: 'number',
      tagGroup: 'string',
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

export class DescribeTagHitsSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. `OK` indicates a successful request.
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
   * 5391EB13-A0E7-402D-A407-B99D4ABAF22A
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
   * A list of tag groups.
   */
  tagGroups?: DescribeTagHitsSummaryResponseBodyTagGroups[];
  /**
   * @remarks
   * A list of tag hit statistics.
   */
  tagHitsList?: DescribeTagHitsSummaryResponseBodyTagHitsList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagGroups: 'TagGroups',
      tagHitsList: 'TagHitsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagGroups: { 'type': 'array', 'itemType': DescribeTagHitsSummaryResponseBodyTagGroups },
      tagHitsList: { 'type': 'array', 'itemType': DescribeTagHitsSummaryResponseBodyTagHitsList },
    };
  }

  validate() {
    if(Array.isArray(this.tagGroups)) {
      $dara.Model.validateArray(this.tagGroups);
    }
    if(Array.isArray(this.tagHitsList)) {
      $dara.Model.validateArray(this.tagHitsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

