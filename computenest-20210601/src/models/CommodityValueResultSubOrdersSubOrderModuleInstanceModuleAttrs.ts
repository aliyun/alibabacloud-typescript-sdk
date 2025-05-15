// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommodityValueResultSubOrdersSubOrderModuleInstanceModuleAttrs extends $dara.Model {
  /**
   * @remarks
   * 属性类型，可选值：
   * 
   * 1. 1：商品属性 
   * 2. 2：规格属性 
   * 3. 3：模块属性 
   * 4. 4：外部参数（备用）
   * 
   * @example
   * 3
   */
  type?: number;
  /**
   * @remarks
   * Name
   * 
   * @example
   * 20GB
   */
  name?: string;
  /**
   * @remarks
   * Module attr code
   * 
   * @example
   * rds_storage
   */
  code?: string;
  /**
   * @remarks
   * Value
   * 
   * @example
   * 20
   */
  value?: string;
  /**
   * @remarks
   * Unit
   * 
   * @example
   * GB
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      code: 'Code',
      value: 'Value',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      name: 'string',
      code: 'string',
      value: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

