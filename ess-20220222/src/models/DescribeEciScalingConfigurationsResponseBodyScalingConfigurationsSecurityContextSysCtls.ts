// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsSecurityContextSysCtls extends $dara.Model {
  /**
   * @remarks
   * The system name of the security context in which the elastic container instance runs.
   * 
   * @example
   * kernel.msgmax
   */
  name?: string;
  /**
   * @remarks
   * The variable value of the security context in which the elastic container instance runs.
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

