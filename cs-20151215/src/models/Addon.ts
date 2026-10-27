// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Addon extends $dara.Model {
  /**
   * @remarks
   * The component configuration.
   * 
   * @example
   * {\\"IngressSlbNetworkType\\":\\"internet\\"}
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to disable default installation. When a cluster is created, in addition to required components, additional components such as log components are installed by default. You can disable this default behavior and install these components later by calling the component installation API or through the console. Valid values:
   * - `true`: Disables default installation.
   * - `false`: Allows default installation.
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
   * The component version.
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

