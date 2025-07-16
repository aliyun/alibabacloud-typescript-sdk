// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamsResponseBodyTeamsIcon extends $dara.Model {
  /**
   * @example
   * URL
   */
  type?: string;
  /**
   * @example
   * https://example/file-manage-files/zh-CN/202***13/ldet/avatar3.jpg
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamsResponseBodyTeams extends $dara.Model {
  /**
   * @example
   * ding16b241fd05********288
   */
  corpId?: string;
  /**
   * @example
   * https://example/file-manage-files/zh-CN/202***13/ldet/XXXX.jpg
   */
  cover?: string;
  /**
   * @example
   * 01472825524039877041
   */
  createTime?: string;
  /**
   * @example
   * 012345
   */
  creatorId?: string;
  /**
   * @example
   * team_description
   */
  description?: string;
  icon?: ListTeamsResponseBodyTeamsIcon;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 012345
   */
  modifierId?: string;
  /**
   * @example
   * team_name
   */
  name?: string;
  /**
   * @example
   * lHiicjNFM2iSFYSdz2iPuI8ZwiEiE
   */
  teamId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      cover: 'Cover',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      description: 'Description',
      icon: 'Icon',
      modifiedTime: 'ModifiedTime',
      modifierId: 'ModifierId',
      name: 'Name',
      teamId: 'TeamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      cover: 'string',
      createTime: 'string',
      creatorId: 'string',
      description: 'string',
      icon: ListTeamsResponseBodyTeamsIcon,
      modifiedTime: 'string',
      modifierId: 'string',
      name: 'string',
      teamId: 'string',
    };
  }

  validate() {
    if(this.icon && typeof (this.icon as any).validate === 'function') {
      (this.icon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamsResponseBody extends $dara.Model {
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  nextToken?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  teams?: ListTeamsResponseBodyTeams[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      teams: 'teams',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      teams: { 'type': 'array', 'itemType': ListTeamsResponseBodyTeams },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.teams)) {
      $dara.Model.validateArray(this.teams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

