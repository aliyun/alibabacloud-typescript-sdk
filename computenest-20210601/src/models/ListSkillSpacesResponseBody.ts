// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillSpacesResponseBodySkillSpaces extends $dara.Model {
  /**
   * @example
   * 2025-11-03T22:58:52Z
   */
  createTime?: string;
  /**
   * @example
   * 1111
   */
  skillSpaceDescription?: string;
  /**
   * @remarks
   * SkillSpace ID
   * 
   * @example
   * ss-111111
   */
  skillSpaceId?: string;
  /**
   * @example
   * 1111
   */
  skillSpaceName?: string;
  /**
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
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
  skillSpaces?: ListSkillSpacesResponseBodySkillSpaces[];
  /**
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

