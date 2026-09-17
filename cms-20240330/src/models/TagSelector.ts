// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagCondition } from "./TagCondition";


export class TagSelector extends $dara.Model {
  /**
   * @remarks
   * The list of label filter conditions.
   */
  conditions?: TagCondition[];
  /**
   * @remarks
   * The custom expression in advanced mode. This overrides the conditions and relation settings.
   * 
   * @example
   * env=prod AND region=cn-hangzhou
   */
  expression?: string;
  /**
   * @remarks
   * The relationship between conditions.
   * 
   * @example
   * AND
   */
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      expression: 'expression',
      relation: 'relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': TagCondition },
      expression: 'string',
      relation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

