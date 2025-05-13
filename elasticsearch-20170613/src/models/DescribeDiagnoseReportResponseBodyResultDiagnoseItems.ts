// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail } from "./DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail";


export class DescribeDiagnoseReportResponseBodyResultDiagnoseItems extends $dara.Model {
  detail?: DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
  /**
   * @example
   * YELLOW
   */
  health?: string;
  /**
   * @example
   * IndexAliasUseDiagnostic
   */
  item?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      health: 'health',
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail,
      health: 'string',
      item: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

