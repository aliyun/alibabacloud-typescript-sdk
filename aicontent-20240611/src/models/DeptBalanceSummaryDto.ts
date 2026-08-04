// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BalancePoolSummaryDTO } from "./BalancePoolSummaryDto";


export class DeptBalanceSummaryDTO extends $dara.Model {
  /**
   * @example
   * {}
   */
  monthly?: BalancePoolSummaryDTO;
  /**
   * @example
   * {}
   */
  permanent?: BalancePoolSummaryDTO;
  static names(): { [key: string]: string } {
    return {
      monthly: 'monthly',
      permanent: 'permanent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monthly: BalancePoolSummaryDTO,
      permanent: BalancePoolSummaryDTO,
    };
  }

  validate() {
    if(this.monthly && typeof (this.monthly as any).validate === 'function') {
      (this.monthly as any).validate();
    }
    if(this.permanent && typeof (this.permanent as any).validate === 'function') {
      (this.permanent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

