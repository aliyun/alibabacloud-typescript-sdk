// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Dimension extends $dara.Model {
  /**
   * @remarks
   * The name of the metric dimension.
   * 
   * @example
   * instanceId
   */
  label?: string;
  /**
   * @remarks
   * The value of the metric dimension.
   * 
   * @example
   * i-dferwret*****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

