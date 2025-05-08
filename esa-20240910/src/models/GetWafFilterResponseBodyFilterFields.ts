// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWafFilterResponseBodyFilterFieldsLogics } from "./GetWafFilterResponseBodyFilterFieldsLogics";
import { GetWafFilterResponseBodyFilterFieldsSelector } from "./GetWafFilterResponseBodyFilterFieldsSelector";


export class GetWafFilterResponseBodyFilterFields extends $dara.Model {
  enable?: boolean;
  /**
   * @remarks
   * The field for matched objects in the system.
   * 
   * @example
   * http.request.headers
   */
  key?: string;
  /**
   * @remarks
   * The label of the matched object.
   * 
   * @example
   * Header
   */
  label?: string;
  /**
   * @remarks
   * The logical conditions.
   */
  logics?: GetWafFilterResponseBodyFilterFieldsLogics[];
  minPlan?: string;
  /**
   * @remarks
   * The selector, which defines how to select a matched object.
   */
  selector?: GetWafFilterResponseBodyFilterFieldsSelector;
  /**
   * @remarks
   * Indicates whether the matched object contains a subfield.
   * 
   * @example
   * true
   */
  sub?: boolean;
  /**
   * @remarks
   * The tip on how to enter a subfield.
   * 
   * @example
   * e.g. Content-Type
   */
  subTip?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      key: 'Key',
      label: 'Label',
      logics: 'Logics',
      minPlan: 'MinPlan',
      selector: 'Selector',
      sub: 'Sub',
      subTip: 'SubTip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      key: 'string',
      label: 'string',
      logics: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFieldsLogics },
      minPlan: 'string',
      selector: GetWafFilterResponseBodyFilterFieldsSelector,
      sub: 'boolean',
      subTip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logics)) {
      $dara.Model.validateArray(this.logics);
    }
    if(this.selector && typeof (this.selector as any).validate === 'function') {
      (this.selector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

