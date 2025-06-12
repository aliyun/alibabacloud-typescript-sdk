// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHistoricalInstanceReportResponseBodyDataInbound } from "./GetHistoricalInstanceReportResponseBodyDataInbound";
import { GetHistoricalInstanceReportResponseBodyDataInternal } from "./GetHistoricalInstanceReportResponseBodyDataInternal";
import { GetHistoricalInstanceReportResponseBodyDataOutbound } from "./GetHistoricalInstanceReportResponseBodyDataOutbound";
import { GetHistoricalInstanceReportResponseBodyDataOverall } from "./GetHistoricalInstanceReportResponseBodyDataOverall";


export class GetHistoricalInstanceReportResponseBodyData extends $dara.Model {
  inbound?: GetHistoricalInstanceReportResponseBodyDataInbound;
  internal?: GetHistoricalInstanceReportResponseBodyDataInternal;
  outbound?: GetHistoricalInstanceReportResponseBodyDataOutbound;
  overall?: GetHistoricalInstanceReportResponseBodyDataOverall;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: GetHistoricalInstanceReportResponseBodyDataInbound,
      internal: GetHistoricalInstanceReportResponseBodyDataInternal,
      outbound: GetHistoricalInstanceReportResponseBodyDataOutbound,
      overall: GetHistoricalInstanceReportResponseBodyDataOverall,
    };
  }

  validate() {
    if(this.inbound && typeof (this.inbound as any).validate === 'function') {
      (this.inbound as any).validate();
    }
    if(this.internal && typeof (this.internal as any).validate === 'function') {
      (this.internal as any).validate();
    }
    if(this.outbound && typeof (this.outbound as any).validate === 'function') {
      (this.outbound as any).validate();
    }
    if(this.overall && typeof (this.overall as any).validate === 'function') {
      (this.overall as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

