// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesOfUserResponseBodyDataListAdminList } from "./ListInstancesOfUserResponseBodyDataListAdminList";
import { ListInstancesOfUserResponseBodyDataListNumberList } from "./ListInstancesOfUserResponseBodyDataListNumberList";


export class ListInstancesOfUserResponseBodyDataList extends $dara.Model {
  adminList?: ListInstancesOfUserResponseBodyDataListAdminList[];
  /**
   * @example
   * 157123456789****
   */
  aliyunUid?: string;
  /**
   * @example
   * https://ccc-v2.aliyun.com/#/workbench/ccc-test
   */
  consoleUrl?: string;
  description?: string;
  /**
   * @example
   * ccc-test
   */
  domainName?: string;
  /**
   * @example
   * ccc-test
   */
  id?: string;
  name?: string;
  numberList?: ListInstancesOfUserResponseBodyDataListNumberList[];
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      aliyunUid: 'AliyunUid',
      consoleUrl: 'ConsoleUrl',
      description: 'Description',
      domainName: 'DomainName',
      id: 'Id',
      name: 'Name',
      numberList: 'NumberList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminList: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListAdminList },
      aliyunUid: 'string',
      consoleUrl: 'string',
      description: 'string',
      domainName: 'string',
      id: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListNumberList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminList)) {
      $dara.Model.validateArray(this.adminList);
    }
    if(Array.isArray(this.numberList)) {
      $dara.Model.validateArray(this.numberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

