// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails } from "./QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails";
import { QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails } from "./QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails";


export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail extends $dara.Model {
  itemControlTailReportDetails?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails[];
  itemControlTopReportDetails?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails[];
  static names(): { [key: string]: string } {
    return {
      itemControlTailReportDetails: 'ItemControlTailReportDetails',
      itemControlTopReportDetails: 'ItemControlTopReportDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemControlTailReportDetails: { 'type': 'array', 'itemType': QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails },
      itemControlTopReportDetails: { 'type': 'array', 'itemType': QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails },
    };
  }

  validate() {
    if(Array.isArray(this.itemControlTailReportDetails)) {
      $dara.Model.validateArray(this.itemControlTailReportDetails);
    }
    if(Array.isArray(this.itemControlTopReportDetails)) {
      $dara.Model.validateArray(this.itemControlTopReportDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

