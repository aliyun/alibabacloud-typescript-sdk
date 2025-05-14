// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScenegroupRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  addFriendForbidden?: number;
  /**
   * @example
   * 0
   */
  allMembersCanCreateCalendar?: number;
  /**
   * @example
   * 0
   */
  allMembersCanCreateMcsConf?: number;
  /**
   * @example
   * 0
   */
  chatBannedType?: number;
  /**
   * @example
   * 0
   */
  groupEmailDisabled?: number;
  /**
   * @example
   * 1
   */
  groupLiveSwitch?: number;
  /**
   * @example
   * @lADOADma*****QKA
   */
  icon?: string;
  /**
   * @example
   * 0
   */
  managementType?: number;
  /**
   * @example
   * 0
   */
  membersToAdminChat?: number;
  /**
   * @example
   * 0
   */
  mentionAllAuthority?: number;
  /**
   * @example
   * 0
   */
  onlyAdminCanDing?: number;
  /**
   * @example
   * 0
   */
  onlyAdminCanSetMsgTop?: number;
  /**
   * @example
   * 0
   */
  searchable?: number;
  /**
   * @example
   * 0
   */
  showHistoryType?: number;
  /**
   * @example
   * 072*****,013*****
   */
  subadminIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c354***-***-***-b4ea-6f1ab***65
   */
  templateId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试群
   */
  title?: string;
  /**
   * @example
   * 072*****,013*****
   */
  userIds?: string;
  /**
   * @example
   * axcf*-*****-*****-23da*
   */
  uuid?: string;
  /**
   * @example
   * 0
   */
  validationType?: number;
  static names(): { [key: string]: string } {
    return {
      addFriendForbidden: 'AddFriendForbidden',
      allMembersCanCreateCalendar: 'AllMembersCanCreateCalendar',
      allMembersCanCreateMcsConf: 'AllMembersCanCreateMcsConf',
      chatBannedType: 'ChatBannedType',
      groupEmailDisabled: 'GroupEmailDisabled',
      groupLiveSwitch: 'GroupLiveSwitch',
      icon: 'Icon',
      managementType: 'ManagementType',
      membersToAdminChat: 'MembersToAdminChat',
      mentionAllAuthority: 'MentionAllAuthority',
      onlyAdminCanDing: 'OnlyAdminCanDing',
      onlyAdminCanSetMsgTop: 'OnlyAdminCanSetMsgTop',
      searchable: 'Searchable',
      showHistoryType: 'ShowHistoryType',
      subadminIds: 'SubadminIds',
      templateId: 'TemplateId',
      title: 'Title',
      userIds: 'UserIds',
      uuid: 'Uuid',
      validationType: 'ValidationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addFriendForbidden: 'number',
      allMembersCanCreateCalendar: 'number',
      allMembersCanCreateMcsConf: 'number',
      chatBannedType: 'number',
      groupEmailDisabled: 'number',
      groupLiveSwitch: 'number',
      icon: 'string',
      managementType: 'number',
      membersToAdminChat: 'number',
      mentionAllAuthority: 'number',
      onlyAdminCanDing: 'number',
      onlyAdminCanSetMsgTop: 'number',
      searchable: 'number',
      showHistoryType: 'number',
      subadminIds: 'string',
      templateId: 'string',
      title: 'string',
      userIds: 'string',
      uuid: 'string',
      validationType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

