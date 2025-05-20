// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeDataStatsResponseBodyDataListRuleList extends $dara.Model {
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * DAS_NOT_IMPORTANT
   */
  name?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * * **Predefined**
   * * **UserDefined**
   * 
   * @example
   * Predefined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

