// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam";


export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator extends $dara.Model {
  /**
   * @remarks
   * 主键id
   */
  id?: number;
  /**
   * @remarks
   * 算子名
   */
  name?: string;
  /**
   * @remarks
   * 可能是主键id，也可能是前端生成的id
   */
  oid?: string;
  /**
   * @remarks
   * 算子参数
   */
  param?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam;
  /**
   * @remarks
   * 算子类别
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      oid: 'Oid',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      oid: 'string',
      param: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam,
      type: 'string',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

