// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute extends $dara.Model {
  /**
   * @remarks
   * 值表述。
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 值步长。
   * 
   * @example
   * 2
   */
  valueIncrementStep?: string;
  /**
   * @remarks
   * 最大值。
   * 
   * @example
   * 20
   */
  valueMaximum?: string;
  /**
   * @remarks
   * 最小值。
   * 
   * @example
   * 1
   */
  valueMinimum?: string;
  /**
   * @remarks
   * 属性值类型。
   * 
   * @example
   * STRING
   */
  valueType?: string;
  /**
   * @remarks
   * 值单位。
   * 
   * @example
   * number
   */
  valueUnit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      valueIncrementStep: 'ValueIncrementStep',
      valueMaximum: 'ValueMaximum',
      valueMinimum: 'ValueMinimum',
      valueType: 'ValueType',
      valueUnit: 'ValueUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      valueIncrementStep: 'string',
      valueMaximum: 'string',
      valueMinimum: 'string',
      valueType: 'string',
      valueUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

