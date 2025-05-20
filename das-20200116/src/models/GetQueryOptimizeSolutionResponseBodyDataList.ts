// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeSolutionResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * * **INFO**
   * * **WARN**
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * LARGE_ROWS_EXAMINED
   */
  ruleId?: string;
  /**
   * @remarks
   * The suggestion.
   * 
   * @example
   * LARGE_ROWS_EXAMINED_SOLUTION
   */
  solution?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  solutionExt?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      ruleId: 'RuleId',
      solution: 'Solution',
      solutionExt: 'SolutionExt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      ruleId: 'string',
      solution: 'string',
      solutionExt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

