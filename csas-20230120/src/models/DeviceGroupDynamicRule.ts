// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceGroupDynamicRule extends $dara.Model {
  /**
   * @remarks
   * The list of matching parameters. The meaning of the parameters is determined by both Key and Operator. When Key is set to dev_type and Operator is set to in, specify the operating system types to match.
   * 
   * @example
   * ["windows"]
   */
  args?: any;
  /**
   * @remarks
   * The user endpoint device property key used for dynamic matching. The example value dev_type indicates the operating system type of the endpoint device.
   * 
   * @example
   * dev_type
   */
  key?: string;
  /**
   * @remarks
   * The matching operator applied to the property specified by Key. The example value in indicates that the property value belongs to the list of parameters specified by Args.
   * 
   * @example
   * in
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      key: 'Key',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'any',
      key: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

