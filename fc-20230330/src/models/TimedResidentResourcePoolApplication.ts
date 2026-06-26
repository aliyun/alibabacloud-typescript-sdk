// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimedResidentResourcePoolApplication extends $dara.Model {
  accountId?: string;
  content?: string;
  createdTime?: string;
  lastModifiedTime?: string;
  operationType?: string;
  status?: string;
  timedPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      content: 'content',
      createdTime: 'createdTime',
      lastModifiedTime: 'lastModifiedTime',
      operationType: 'operationType',
      status: 'status',
      timedPoolId: 'timedPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      content: 'string',
      createdTime: 'string',
      lastModifiedTime: 'string',
      operationType: 'string',
      status: 'string',
      timedPoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

