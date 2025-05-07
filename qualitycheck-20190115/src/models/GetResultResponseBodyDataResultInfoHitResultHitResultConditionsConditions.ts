// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange";
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators";


export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditions extends $dara.Model {
  /**
   * @remarks
   * 检测范围
   */
  checkRange?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange;
  /**
   * @remarks
   * 条件id，可能是db中的主键，也可能是转换成的a, b, c
   */
  cid?: string;
  /**
   * @remarks
   * 排除
   */
  exclusion?: number;
  /**
   * @remarks
   * 在db中的主键
   */
  id?: number;
  /**
   * @remarks
   * Lambda表达式：例如:a&&b
   */
  lambda?: string;
  /**
   * @remarks
   * 算子列表
   */
  operators?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators;
  /**
   * @remarks
   * 条件所属的规则id
   */
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'Check_range',
      cid: 'Cid',
      exclusion: 'Exclusion',
      id: 'Id',
      lambda: 'Lambda',
      operators: 'Operators',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange,
      cid: 'string',
      exclusion: 'number',
      id: 'number',
      lambda: 'string',
      operators: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators,
      rid: 'string',
    };
  }

  validate() {
    if(this.checkRange && typeof (this.checkRange as any).validate === 'function') {
      (this.checkRange as any).validate();
    }
    if(this.operators && typeof (this.operators as any).validate === 'function') {
      (this.operators as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

