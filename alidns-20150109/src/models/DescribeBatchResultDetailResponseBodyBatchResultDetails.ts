// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail } from "./DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail";


export class DescribeBatchResultDetailResponseBodyBatchResultDetails extends $dara.Model {
  batchResultDetail?: DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail[];
  static names(): { [key: string]: string } {
    return {
      batchResultDetail: 'BatchResultDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResultDetail: { 'type': 'array', 'itemType': DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail },
    };
  }

  validate() {
    if(Array.isArray(this.batchResultDetail)) {
      $dara.Model.validateArray(this.batchResultDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

