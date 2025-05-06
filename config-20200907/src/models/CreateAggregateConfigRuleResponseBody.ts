// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateConfigRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-4e3d626622af0080****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5895065A-196C-4254-8AD8-14EFC31EEF50
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

