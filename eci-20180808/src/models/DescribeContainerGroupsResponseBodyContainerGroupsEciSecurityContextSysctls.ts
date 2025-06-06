// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls extends $dara.Model {
  /**
   * @remarks
   * The name of the Sysctl parameter.
   * 
   * @example
   * kernel.msgmax
   */
  name?: string;
  /**
   * @remarks
   * The value of the Sysctl parameter.
   * 
   * @example
   * 65536
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

