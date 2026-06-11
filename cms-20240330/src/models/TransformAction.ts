// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class TransformAction extends $dara.Model {
  /**
   * @remarks
   * The filter configuration.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * labelkey1
   */
  labelKey?: string;
  /**
   * @remarks
   * The mapping configuration.
   */
  mapping?: { [key: string]: string };
  /**
   * @remarks
   * The regular expression.
   * 
   * @example
   * (.*):(.*)
   */
  regExp?: string;
  /**
   * @remarks
   * The reference path.
   * 
   * @example
   * data.subject
   */
  source?: string;
  /**
   * @remarks
   * The target location.
   * 
   * @example
   * SUBJECT
   */
  target?: string;
  /**
   * @remarks
   * The transform type.
   * 
   * @example
   * SET_FIELD
   */
  type?: string;
  /**
   * @remarks
   * The value to set.
   * 
   * @example
   * value1
   */
  value?: string;
  /**
   * @remarks
   * The variable name.
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

