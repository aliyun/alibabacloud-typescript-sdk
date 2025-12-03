// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IdpCustomField } from "./IdpCustomField";
import { OpenStructSaseDepartment } from "./OpenStructSaseDepartment";


export class OpenStructSaseUserUserTags extends $dara.Model {
  aliuid?: string;
  description?: string;
  name?: string;
  saseUserId?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      description: 'Description',
      name: 'Name',
      saseUserId: 'SaseUserId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      description: 'string',
      name: 'string',
      saseUserId: 'string',
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenStructSaseUser extends $dara.Model {
  createTimeUnix?: number;
  customFields?: IdpCustomField[];
  departments?: OpenStructSaseDepartment[];
  description?: string;
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
  userTags?: OpenStructSaseUserUserTags[];
  username?: string;
  workStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeUnix: 'CreateTimeUnix',
      customFields: 'CustomFields',
      departments: 'Departments',
      description: 'Description',
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
      userTags: 'UserTags',
      username: 'Username',
      workStatus: 'WorkStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeUnix: 'number',
      customFields: { 'type': 'array', 'itemType': IdpCustomField },
      departments: { 'type': 'array', 'itemType': OpenStructSaseDepartment },
      description: 'string',
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
      userTags: { 'type': 'array', 'itemType': OpenStructSaseUserUserTags },
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
    if(Array.isArray(this.userTags)) {
      $dara.Model.validateArray(this.userTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

