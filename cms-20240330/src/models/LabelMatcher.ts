// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LabelMatcher extends $dara.Model {
  /**
   * @remarks
   * The label key to match.
   */
  key?: string;
  /**
   * @remarks
   * The label value to match.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

