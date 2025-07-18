// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructIdpSyncTask extends $dara.Model {
  departmentFailed?: number;
  departmentTotal?: number;
  endTimeUnix?: number;
  failType?: string;
  idpConfigId?: Buffer;
  startTimeUnix?: number;
  status?: string;
  syncTaskId?: string;
  updateTimeUnix?: number;
  userFailed?: number;
  userTotal?: number;
  static names(): { [key: string]: string } {
    return {
      departmentFailed: 'DepartmentFailed',
      departmentTotal: 'DepartmentTotal',
      endTimeUnix: 'EndTimeUnix',
      failType: 'FailType',
      idpConfigId: 'IdpConfigId',
      startTimeUnix: 'StartTimeUnix',
      status: 'Status',
      syncTaskId: 'SyncTaskId',
      updateTimeUnix: 'UpdateTimeUnix',
      userFailed: 'UserFailed',
      userTotal: 'UserTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentFailed: 'number',
      departmentTotal: 'number',
      endTimeUnix: 'number',
      failType: 'string',
      idpConfigId: 'Buffer',
      startTimeUnix: 'number',
      status: 'string',
      syncTaskId: 'string',
      updateTimeUnix: 'number',
      userFailed: 'number',
      userTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

