// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserFbAcIssuesRequest extends $dara.Model {
  account?: string;
  clientVersion?: string;
  errorMessage?: string;
  instanceId?: string;
  issueId?: string;
  label?: string;
  reservedA?: string;
  reservedB?: string;
  userEmail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientVersion: 'ClientVersion',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      issueId: 'IssueId',
      label: 'Label',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      userEmail: 'UserEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      clientVersion: 'string',
      errorMessage: 'string',
      instanceId: 'string',
      issueId: 'string',
      label: 'string',
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

