// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestRuleV4Request extends $dara.Model {
  /**
   * @example
   * 1
   */
  isSchemeData?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  testJson?: string;
  static names(): { [key: string]: string } {
    return {
      isSchemeData: 'IsSchemeData',
      testJson: 'TestJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSchemeData: 'number',
      testJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

