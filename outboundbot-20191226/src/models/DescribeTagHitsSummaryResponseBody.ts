// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagHitsSummaryResponseBodyTagGroups extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 8bb6f8ca-85a3-49f8-86a5-3127902a2156
   */
  id?: string;
  /**
   * @example
   * 84fc7c41-f918-4a47-b742-a439b35a8567
   */
  scriptId?: string;
  tagGroup?: string;
  /**
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
   * @example
   * 1
   */
  hitCount?: number;
  tagGroup?: string;
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
   * 5391EB13-A0E7-402D-A407-B99D4ABAF22A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tagGroups?: DescribeTagHitsSummaryResponseBodyTagGroups[];
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

