// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail } from "./ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail";


export class ListDiagnoseReportResponseBodyResultDiagnoseItems extends $dara.Model {
  /**
   * @remarks
   * The type of the diagnostic result. Valid values:
   * 
   * *   TEXT: text description
   * *   CONSOLE_API: console-triggered
   * *   ES_API: API triggered
   */
  detail?: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
  /**
   * @remarks
   * The details of the diagnostic item.
   * 
   * @example
   * YELLOW
   */
  health?: string;
  /**
   * @remarks
   * The health of the diagnostic item. Supported: GREEN, YELLOW, RED, and UNKNOWN.
   * 
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
      detail: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail,
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

