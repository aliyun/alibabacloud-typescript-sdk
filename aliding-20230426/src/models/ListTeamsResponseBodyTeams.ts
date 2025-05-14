// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTeamsResponseBodyTeamsIcon } from "./ListTeamsResponseBodyTeamsIcon";


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

