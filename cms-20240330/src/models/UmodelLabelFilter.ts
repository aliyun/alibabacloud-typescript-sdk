// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UmodelLabelFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the label used for filtering.
   */
  name?: string;
  /**
   * @remarks
   * The logical operator used to compare the label\\"s value.
   */
  operator?: string;
  /**
   * @remarks
   * The value of the label to match.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

