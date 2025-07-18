// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructIdpSyncRecord extends $dara.Model {
  action?: string;
  idpRawJson?: string;
  idpResourceId?: string;
  name?: string;
  recordType?: string;
  saseRawJson?: string;
  saseResourceId?: string;
  success?: boolean;
  syncRecordId?: string;
  syncTaskId?: string;
  timeUnix?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      idpRawJson: 'IdpRawJson',
      idpResourceId: 'IdpResourceId',
      name: 'Name',
      recordType: 'RecordType',
      saseRawJson: 'SaseRawJson',
      saseResourceId: 'SaseResourceId',
      success: 'Success',
      syncRecordId: 'SyncRecordId',
      syncTaskId: 'SyncTaskId',
      timeUnix: 'TimeUnix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      idpRawJson: 'string',
      idpResourceId: 'string',
      name: 'string',
      recordType: 'string',
      saseRawJson: 'string',
      saseResourceId: 'string',
      success: 'boolean',
      syncRecordId: 'string',
      syncTaskId: 'string',
      timeUnix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

