// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadMeteringDailyDetailCmd extends $dara.Model {
  billPeriod?: string;
  billingItem?: string;
  endTime?: string;
  startTime?: string;
  subAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      billPeriod: 'billPeriod',
      billingItem: 'billingItem',
      endTime: 'endTime',
      startTime: 'startTime',
      subAccountId: 'subAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPeriod: 'string',
      billingItem: 'string',
      endTime: 'string',
      startTime: 'string',
      subAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

