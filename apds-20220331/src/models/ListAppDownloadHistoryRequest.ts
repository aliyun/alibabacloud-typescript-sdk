// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppDownloadHistoryRequest extends $dara.Model {
  appId?: string;
  platform?: string;
  startDate?: string;
  tenantUid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      platform: 'platform',
      startDate: 'startDate',
      tenantUid: 'tenantUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      platform: 'string',
      startDate: 'string',
      tenantUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

