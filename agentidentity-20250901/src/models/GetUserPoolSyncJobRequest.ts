// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserPoolSyncJobRequest extends $dara.Model {
  synchronizationJobId?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      synchronizationJobId: 'SynchronizationJobId',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronizationJobId: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

