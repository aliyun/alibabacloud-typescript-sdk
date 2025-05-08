// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafFilterResponseBodyFilterFieldsSelectorData extends $dara.Model {
  /**
   * @remarks
   * The label of the data.
   * 
   * @example
   * China
   */
  label?: string;
  /**
   * @remarks
   * The value of the data.
   * 
   * @example
   * CN
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

