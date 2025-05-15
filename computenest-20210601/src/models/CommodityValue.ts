// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommodityValueResult } from "./CommodityValueResult";


export class CommodityValue extends $dara.Model {
  /**
   * @remarks
   * Result模型。
   */
  result?: CommodityValueResult;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CommodityValueResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

