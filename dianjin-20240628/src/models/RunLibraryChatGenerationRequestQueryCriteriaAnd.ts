// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLibraryChatGenerationRequestQueryCriteriaAnd extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  boost?: number;
  /**
   * @example
   * city
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

