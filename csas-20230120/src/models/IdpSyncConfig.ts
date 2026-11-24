// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpSyncConfigIdpDepartmentInfos extends $dara.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IdpSyncConfig extends $dara.Model {
  autoSyncEnabled?: boolean;
  idpDepartmentInfos?: IdpSyncConfigIdpDepartmentInfos[];
  scheduleSyncIntervalSecond?: number;
  userSyncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSyncEnabled: 'AutoSyncEnabled',
      idpDepartmentInfos: 'IdpDepartmentInfos',
      scheduleSyncIntervalSecond: 'ScheduleSyncIntervalSecond',
      userSyncEnabled: 'UserSyncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncEnabled: 'boolean',
      idpDepartmentInfos: { 'type': 'array', 'itemType': IdpSyncConfigIdpDepartmentInfos },
      scheduleSyncIntervalSecond: 'number',
      userSyncEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.idpDepartmentInfos)) {
      $dara.Model.validateArray(this.idpDepartmentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

