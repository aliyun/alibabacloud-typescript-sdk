// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserSpnSummaryInfoRequestEcIdAccountIds } from "./DescribeUserSpnSummaryInfoRequestEcIdAccountIds";


export class DescribeUserSpnSummaryInfoRequest extends $dara.Model {
  ecIdAccountIds?: DescribeUserSpnSummaryInfoRequestEcIdAccountIds[];
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIds: { 'type': 'array', 'itemType': DescribeUserSpnSummaryInfoRequestEcIdAccountIds },
      nbid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

