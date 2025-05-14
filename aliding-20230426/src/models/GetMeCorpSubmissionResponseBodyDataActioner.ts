// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMeCorpSubmissionResponseBodyDataActioner extends $dara.Model {
  /**
   * @example
   * 某研究部
   */
  buName?: string;
  /**
   * @example
   * abc@alimail.com
   */
  email?: string;
  /**
   * @example
   * 正式
   */
  employeeType?: string;
  /**
   * @example
   * official
   */
  employeeTypeInformation?: string;
  /**
   * @example
   * 123311221
   */
  humanResourceGroupWorkNumber?: string;
  /**
   * @example
   * true
   */
  isSystemAdmin?: boolean;
  /**
   * @example
   * P7
   */
  level?: string;
  /**
   * @example
   * 请购单
   */
  name?: string;
  /**
   * @example
   * 与心
   */
  nickName?: string;
  /**
   * @example
   * o-YDJKINSxxx
   */
  orderNumber?: string;
  /**
   * @example
   * https://abc.com/a.png
   */
  personalPhoto?: string;
  /**
   * @example
   * https://oss/zhangsan.png
   */
  personalPhotoUrl?: string;
  /**
   * @example
   * XIAOHONG
   */
  pinyinNameAll?: string;
  /**
   * @example
   * xiaohong
   */
  pinyinNickName?: string;
  /**
   * @example
   * running
   */
  state?: string;
  /**
   * @example
   * manager123
   */
  superUserId?: string;
  /**
   * @example
   * wang123
   */
  tbWang?: string;
  /**
   * @example
   * manager123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      buName: 'BuName',
      email: 'Email',
      employeeType: 'EmployeeType',
      employeeTypeInformation: 'EmployeeTypeInformation',
      humanResourceGroupWorkNumber: 'HumanResourceGroupWorkNumber',
      isSystemAdmin: 'IsSystemAdmin',
      level: 'Level',
      name: 'Name',
      nickName: 'NickName',
      orderNumber: 'OrderNumber',
      personalPhoto: 'PersonalPhoto',
      personalPhotoUrl: 'PersonalPhotoUrl',
      pinyinNameAll: 'PinyinNameAll',
      pinyinNickName: 'PinyinNickName',
      state: 'State',
      superUserId: 'SuperUserId',
      tbWang: 'TbWang',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buName: 'string',
      email: 'string',
      employeeType: 'string',
      employeeTypeInformation: 'string',
      humanResourceGroupWorkNumber: 'string',
      isSystemAdmin: 'boolean',
      level: 'string',
      name: 'string',
      nickName: 'string',
      orderNumber: 'string',
      personalPhoto: 'string',
      personalPhotoUrl: 'string',
      pinyinNameAll: 'string',
      pinyinNickName: 'string',
      state: 'string',
      superUserId: 'string',
      tbWang: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

