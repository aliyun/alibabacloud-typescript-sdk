// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AckNodeSelectorLabels extends $dara.Model {
  /**
   * @remarks
   * 标签键。
   * 
   * @example
   * emr
   */
  key?: string;
  /**
   * @remarks
   * 标签值。
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

