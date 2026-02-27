// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Addon extends $dara.Model {
  /**
   * @remarks
   * The configuration of the component.
   * 
   * @example
   * {\\"IngressSlbNetworkType\\":\\"internet\\"}
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to disable automatic installation. When you create a cluster, some additional log components are automatically installed in addition to the required components. You can disable the automatic installations of a component and install the component later by calling the component API or in the corresponding console. Valid values:
   * 
   * *   `true`: disables the automatic installation of a component.
   * *   `false`: allows the automatic installation of a component.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * nginx-ingress-controller
   */
  name?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * v1.9.3-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      disabled: 'disabled',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      disabled: 'boolean',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

