// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LabelMatcher extends $dara.Model {
  /**
   * @remarks
   * The key name of the label matcher. This parameter specifies the label dimension identity to match.
   * 
   * @example
   * _cms_workspace
   */
  key?: string;
  /**
   * @remarks
   * The match value of the label matcher. This parameter is used together with key to specify the value that the label key must match.
   * 
   * @example
   * test-123
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

