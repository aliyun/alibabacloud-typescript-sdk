// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProcessDefinitionResponseBodyOwnersMasterDataDepartments } from "./GetProcessDefinitionResponseBodyOwnersMasterDataDepartments";


export class GetProcessDefinitionResponseBodyOwners extends $dara.Model {
  /**
   * @example
   * 开发部成立于2000年
   */
  departmentDescription?: string;
  /**
   * @example
   * ZhangSan
   */
  displayEnName?: string;
  /**
   * @example
   * 测试应用
   */
  displayName?: string;
  masterDataDepartments?: GetProcessDefinitionResponseBodyOwnersMasterDataDepartments[];
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
   * running
   */
  status?: string;
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
  /**
   * @example
   * 张三
   */
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      departmentDescription: 'DepartmentDescription',
      displayEnName: 'DisplayEnName',
      displayName: 'DisplayName',
      masterDataDepartments: 'MasterDataDepartments',
      orderNumber: 'OrderNumber',
      personalPhoto: 'PersonalPhoto',
      status: 'Status',
      tbWang: 'TbWang',
      userId: 'UserId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentDescription: 'string',
      displayEnName: 'string',
      displayName: 'string',
      masterDataDepartments: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyOwnersMasterDataDepartments },
      orderNumber: 'string',
      personalPhoto: 'string',
      status: 'string',
      tbWang: 'string',
      userId: 'string',
      userInfo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.masterDataDepartments)) {
      $dara.Model.validateArray(this.masterDataDepartments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

