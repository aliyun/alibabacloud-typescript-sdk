// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyDataListAdminList } from "./ListInstancesResponseBodyDataListAdminList";
import { ListInstancesResponseBodyDataListNumberList } from "./ListInstancesResponseBodyDataListNumberList";


export class ListInstancesResponseBodyDataList extends $dara.Model {
  adminList?: ListInstancesResponseBodyDataListAdminList[];
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
  /**
   * @example
   * 1624679747000
   */
  createTime?: number;
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
  numberList?: ListInstancesResponseBodyDataListNumberList[];
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
      createTime: 'CreateTime',
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
      adminList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListAdminList },
      aliyunUid: 'string',
      consoleUrl: 'string',
      createTime: 'number',
      description: 'string',
      domainName: 'string',
      id: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListNumberList },
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

