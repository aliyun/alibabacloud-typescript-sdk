// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillSpacesResponseBodySkillSpaces extends $dara.Model {
  /**
   * @remarks
   * The time when the SkillSpace was created.
   * 
   * @example
   * 2025-11-03T22:58:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the SkillSpace.
   * 
   * @example
   * All-in-one office toolkit — generate reports, process data, manage files, and streamline workflows effortlessly.
   */
  skillSpaceDescription?: string;
  /**
   * @remarks
   * SkillSpace ID
   * 
   * @example
   * ss-xxxxx
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The name of the SkillSpace.
   * 
   * @example
   * office-toolkit-skills
   */
  skillSpaceName?: string;
  /**
   * @remarks
   * The time when the SkillSpace was last updated.
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
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
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

