// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule extends $dara.Model {
  /**
   * @example
   * 33452
   */
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

