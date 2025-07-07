// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLeManagerList } from "./EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLeManagerList";


export class EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLe extends $dara.Model {
  ecId?: string;
  leId?: string;
  licenseNumber?: string;
  manageableAccountCount?: number;
  managedAccountCount?: number;
  managerList?: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLeManagerList[];
  nbId?: string;
  subjectName?: string;
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      ecId: 'EcId',
      leId: 'LeId',
      licenseNumber: 'LicenseNumber',
      manageableAccountCount: 'ManageableAccountCount',
      managedAccountCount: 'ManagedAccountCount',
      managerList: 'ManagerList',
      nbId: 'NbId',
      subjectName: 'SubjectName',
      subjectType: 'SubjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecId: 'string',
      leId: 'string',
      licenseNumber: 'string',
      manageableAccountCount: 'number',
      managedAccountCount: 'number',
      managerList: { 'type': 'array', 'itemType': EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLeManagerList },
      nbId: 'string',
      subjectName: 'string',
      subjectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managerList)) {
      $dara.Model.validateArray(this.managerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

