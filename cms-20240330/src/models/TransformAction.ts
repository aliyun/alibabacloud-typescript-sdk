// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class TransformAction extends $dara.Model {
  /**
   * @remarks
   * 筛选配置
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * 标签名
   * 
   * @example
   * labelkey1
   */
  labelKey?: string;
  /**
   * @remarks
   * Mapping配置。
   */
  mapping?: { [key: string]: string };
  /**
   * @remarks
   * 正则表达式
   * 
   * @example
   * (.*):(.*)
   */
  regExp?: string;
  /**
   * @remarks
   * 引用路径
   * 
   * @example
   * data.subject
   */
  source?: string;
  /**
   * @remarks
   * 目标位置
   * 
   * @example
   * SUBJECT
   */
  target?: string;
  /**
   * @remarks
   * 转换类型
   * 
   * @example
   * SET_FIELD
   */
  type?: string;
  /**
   * @remarks
   * 设置的值
   * 
   * @example
   * value1
   */
  value?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * var1
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      filterSetting: 'filterSetting',
      labelKey: 'labelKey',
      mapping: 'mapping',
      regExp: 'regExp',
      source: 'source',
      target: 'target',
      type: 'type',
      value: 'value',
      variable: 'variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterSetting: FilterSetting,
      labelKey: 'string',
      mapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regExp: 'string',
      source: 'string',
      target: 'string',
      type: 'string',
      value: 'string',
      variable: 'string',
    };
  }

  validate() {
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(this.mapping) {
      $dara.Model.validateMap(this.mapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

