// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadApiCallDailyDetailCmd extends $dara.Model {
  apiName?: string;
  endTime?: string;
  engineType?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      endTime: 'endTime',
      engineType: 'engineType',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      endTime: 'string',
      engineType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

