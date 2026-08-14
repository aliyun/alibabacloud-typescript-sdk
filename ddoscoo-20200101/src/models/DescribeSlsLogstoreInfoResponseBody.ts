// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsLogstoreInfoResponseBody extends $dara.Model {
  logStore?: string;
  project?: string;
  quota?: number;
  requestId?: string;
  ttl?: number;
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      project: 'Project',
      quota: 'Quota',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
      quota: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

