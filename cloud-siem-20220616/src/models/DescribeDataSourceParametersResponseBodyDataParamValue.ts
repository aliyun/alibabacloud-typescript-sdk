// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceParametersResponseBodyDataParamValue extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * guangzhou
   */
  label?: string;
  /**
   * @remarks
   * The actual value.
   * 
   * @example
   * ap-guangzhou
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

