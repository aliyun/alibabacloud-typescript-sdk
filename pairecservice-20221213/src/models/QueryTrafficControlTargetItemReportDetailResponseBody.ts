// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail } from "./QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail";


export class QueryTrafficControlTargetItemReportDetailResponseBody extends $dara.Model {
  requestId?: string;
  trafficControlTargetItemReportDetail?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTargetItemReportDetail: 'TrafficControlTargetItemReportDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTargetItemReportDetail: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail,
    };
  }

  validate() {
    if(this.trafficControlTargetItemReportDetail && typeof (this.trafficControlTargetItemReportDetail as any).validate === 'function') {
      (this.trafficControlTargetItemReportDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

