// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceTrendingReportResponseBodyDataInbound } from "./GetInstanceTrendingReportResponseBodyDataInbound";
import { GetInstanceTrendingReportResponseBodyDataOutbound } from "./GetInstanceTrendingReportResponseBodyDataOutbound";
import { GetInstanceTrendingReportResponseBodyDataOverall } from "./GetInstanceTrendingReportResponseBodyDataOverall";


export class GetInstanceTrendingReportResponseBodyData extends $dara.Model {
  inbound?: GetInstanceTrendingReportResponseBodyDataInbound[];
  outbound?: GetInstanceTrendingReportResponseBodyDataOutbound[];
  overall?: GetInstanceTrendingReportResponseBodyDataOverall[];
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataInbound },
      outbound: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataOutbound },
      overall: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataOverall },
    };
  }

  validate() {
    if(Array.isArray(this.inbound)) {
      $dara.Model.validateArray(this.inbound);
    }
    if(Array.isArray(this.outbound)) {
      $dara.Model.validateArray(this.outbound);
    }
    if(Array.isArray(this.overall)) {
      $dara.Model.validateArray(this.overall);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

