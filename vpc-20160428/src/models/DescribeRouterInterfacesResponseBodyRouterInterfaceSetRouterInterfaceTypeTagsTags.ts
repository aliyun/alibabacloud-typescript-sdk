// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTagsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag. At least one tag key must be entered, and a maximum of 20 tag keys are supported. If this value needs to be passed in, it cannot be an empty string.
   * 
   * A tag key can support up to 128 characters, cannot start with \\"aliyun\\" or \\"acs:\\", and cannot contain \\"http://\\" or \\"https://\\".
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag. A maximum of 20 tag values can be entered. If this value needs to be passed in, an empty string can be entered.
   * 
   * A maximum of 128 characters are supported, it cannot start with \\"aliyun\\" or \\"acs:\\", and it cannot contain \\"http://\\" or \\"https://\\".
   * 
   * @example
   * FinanceJoshua
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

