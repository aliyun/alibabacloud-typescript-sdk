// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductInstanceListRequest extends $dara.Model {
  appCode?: string;
  fromTime?: number;
  requestId?: string;
  tenantUid?: string;
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'appCode',
      fromTime: 'fromTime',
      requestId: 'requestId',
      tenantUid: 'tenantUid',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      fromTime: 'number',
      requestId: 'string',
      tenantUid: 'string',
      toTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

