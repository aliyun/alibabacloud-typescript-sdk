// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillSpacesResponseBodySkillSpaces extends $dara.Model {
  /**
   * @remarks
   * The time when the SkillSpace was created. The time is in UTC.
   * 
   * @example
   * 2025-11-03T22:58:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The SkillSpace description.
   * 
   * @example
   * 1111
   */
  skillSpaceDescription?: string;
  /**
   * @remarks
   * The SkillSpace ID.
   * 
   * @example
   * ss-111111
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The SkillSpace name.
   * 
   * @example
   * 1111
   */
  skillSpaceName?: string;
  /**
   * @remarks
   * The time when the SkillSpace was last updated. The time is in UTC.
   * 
   * @example
   * 2025-11-03T22:57:29Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      skillSpaceDescription: 'SkillSpaceDescription',
      skillSpaceId: 'SkillSpaceId',
      skillSpaceName: 'SkillSpaceName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      skillSpaceDescription: 'string',
      skillSpaceId: 'string',
      skillSpaceName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillSpacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. If this parameter is not returned, no more results are available.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The list of SkillSpaces.
   */
  skillSpaces?: ListSkillSpacesResponseBodySkillSpaces[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      skillSpaces: 'SkillSpaces',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      skillSpaces: { 'type': 'array', 'itemType': ListSkillSpacesResponseBodySkillSpaces },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skillSpaces)) {
      $dara.Model.validateArray(this.skillSpaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

