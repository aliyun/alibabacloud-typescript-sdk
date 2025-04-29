// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTagInfoBySelectionResponseBodyDataParamListValueDict } from "./QueryTagInfoBySelectionResponseBodyDataParamListValueDict";


export class QueryTagInfoBySelectionResponseBodyDataParamList extends $dara.Model {
  /**
   * @remarks
   * The English name of the parameter.
   * 
   * @example
   * preame
   */
  code?: string;
  /**
   * @remarks
   * The input hint.
   * 
   * @example
   * none
   */
  hint?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * false
   */
  must?: boolean;
  /**
   * @remarks
   * The Chinese name of the parameter.
   * 
   * @example
   * none
   */
  name?: string;
  /**
   * @remarks
   * The type. The code that corresponds to EnumUIWidgetTypes.
   * 
   * @example
   * aqzx
   */
  type?: string;
  /**
   * @remarks
   * The definitions of the enumerated values such as Code or Desc.
   */
  valueDict?: QueryTagInfoBySelectionResponseBodyDataParamListValueDict[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hint: 'Hint',
      must: 'Must',
      name: 'Name',
      type: 'Type',
      valueDict: 'ValueDict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hint: 'string',
      must: 'boolean',
      name: 'string',
      type: 'string',
      valueDict: { 'type': 'array', 'itemType': QueryTagInfoBySelectionResponseBodyDataParamListValueDict },
    };
  }

  validate() {
    if(Array.isArray(this.valueDict)) {
      $dara.Model.validateArray(this.valueDict);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

