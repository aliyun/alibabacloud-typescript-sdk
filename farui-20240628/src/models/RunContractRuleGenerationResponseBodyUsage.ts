// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractRuleGenerationResponseBodyUsage extends $dara.Model {
  /**
   * @example
   * 5
   */
  input?: number;
  /**
   * @example
   * page
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

