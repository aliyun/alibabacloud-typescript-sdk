// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalCampaignReportResponseBodyData extends $dara.Model {
  abandonedRate?: number;
  callsAbandoned?: number;
  callsConnected?: number;
  callsDialed?: number;
  connectedRate?: number;
  occupancyRate?: number;
  static names(): { [key: string]: string } {
    return {
      abandonedRate: 'AbandonedRate',
      callsAbandoned: 'CallsAbandoned',
      callsConnected: 'CallsConnected',
      callsDialed: 'CallsDialed',
      connectedRate: 'ConnectedRate',
      occupancyRate: 'OccupancyRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonedRate: 'number',
      callsAbandoned: 'number',
      callsConnected: 'number',
      callsDialed: 'number',
      connectedRate: 'number',
      occupancyRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCampaignReportResponseBody extends $dara.Model {
  code?: string;
  data?: GetHistoricalCampaignReportResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHistoricalCampaignReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

