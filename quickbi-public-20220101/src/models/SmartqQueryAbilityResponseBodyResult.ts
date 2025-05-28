// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SmartqQueryAbilityResponseBodyResultMetaType } from "./SmartqQueryAbilityResponseBodyResultMetaType";
import { SmartqQueryAbilityResponseBodyResultValues } from "./SmartqQueryAbilityResponseBodyResultValues";


export class SmartqQueryAbilityResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Suggested chart type.
   * 
   * @example
   * NEW_TABLE
   */
  chartType?: string;
  /**
   * @remarks
   * Summary information.
   * 
   * @example
   * Schedule
   * 
   * **if can be null:**
   * true
   */
  conclusionText?: string;
  /**
   * @remarks
   * Visualized logical SQL.
   * 
   * @example
   * select * ****
   */
  logicSql?: string;
  /**
   * @remarks
   * List of column tuple types.
   */
  metaType?: SmartqQueryAbilityResponseBodyResultMetaType[];
  /**
   * @remarks
   * Array of data value lists.
   */
  values?: SmartqQueryAbilityResponseBodyResultValues[];
  static names(): { [key: string]: string } {
    return {
      chartType: 'ChartType',
      conclusionText: 'ConclusionText',
      logicSql: 'LogicSql',
      metaType: 'MetaType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartType: 'string',
      conclusionText: 'string',
      logicSql: 'string',
      metaType: { 'type': 'array', 'itemType': SmartqQueryAbilityResponseBodyResultMetaType },
      values: { 'type': 'array', 'itemType': SmartqQueryAbilityResponseBodyResultValues },
    };
  }

  validate() {
    if(Array.isArray(this.metaType)) {
      $dara.Model.validateArray(this.metaType);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

