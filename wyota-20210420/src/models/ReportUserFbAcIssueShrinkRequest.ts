// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportUserFbAcIssueShrinkRequest extends $dara.Model {
  account?: string;
  clientVersion?: string;
  errorMsg?: string;
  fileListShrink?: string;
  instanceId?: string;
  labels?: string;
  reservedA?: string;
  reservedB?: string;
  userEmail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientVersion: 'ClientVersion',
      errorMsg: 'ErrorMsg',
      fileListShrink: 'FileList',
      instanceId: 'InstanceId',
      labels: 'Labels',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      userEmail: 'UserEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      clientVersion: 'string',
      errorMsg: 'string',
      fileListShrink: 'string',
      instanceId: 'string',
      labels: 'string',
      reservedA: 'string',
      reservedB: 'string',
      userEmail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

