// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PbcReview } from "./PbcReview";


export class PbcReviewListResult extends $dara.Model {
  data?: PbcReview[];
  /**
   * @remarks
   * 总数量
   * 
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': PbcReview },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

