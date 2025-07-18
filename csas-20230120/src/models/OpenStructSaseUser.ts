// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IdpCustomField } from "./IdpCustomField";
import { OpenStructSaseDepartment } from "./OpenStructSaseDepartment";


export class OpenStructSaseUser extends $dara.Model {
  createTimeUnix?: number;
  customFields?: IdpCustomField[];
  departments?: OpenStructSaseDepartment[];
  email?: string;
  idpConfigId?: string;
  leaveTimeUnix?: number;
  loginTimeUnix?: number;
  saseUserId?: string;
  saseUserStatus?: string;
  syncTimeUnix?: number;
  telephone?: string;
  title?: string;
  updateTimeUnix?: number;
  username?: string;
  workStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeUnix: 'CreateTimeUnix',
      customFields: 'CustomFields',
      departments: 'Departments',
      email: 'Email',
      idpConfigId: 'IdpConfigId',
      leaveTimeUnix: 'LeaveTimeUnix',
      loginTimeUnix: 'LoginTimeUnix',
      saseUserId: 'SaseUserId',
      saseUserStatus: 'SaseUserStatus',
      syncTimeUnix: 'SyncTimeUnix',
      telephone: 'Telephone',
      title: 'Title',
      updateTimeUnix: 'UpdateTimeUnix',
      username: 'Username',
      workStatus: 'WorkStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeUnix: 'number',
      customFields: { 'type': 'array', 'itemType': IdpCustomField },
      departments: { 'type': 'array', 'itemType': OpenStructSaseDepartment },
      email: 'string',
      idpConfigId: 'string',
      leaveTimeUnix: 'number',
      loginTimeUnix: 'number',
      saseUserId: 'string',
      saseUserStatus: 'string',
      syncTimeUnix: 'number',
      telephone: 'string',
      title: 'string',
      updateTimeUnix: 'number',
      username: 'string',
      workStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(Array.isArray(this.departments)) {
      $dara.Model.validateArray(this.departments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

