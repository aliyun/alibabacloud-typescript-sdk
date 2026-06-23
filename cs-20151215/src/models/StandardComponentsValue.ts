// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StandardComponentsValue extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * ack-arena
   */
  name?: string;
  /**
   * @remarks
   * The component version.
   * 
   * @example
   * 0.5.0
   */
  version?: string;
  /**
   * @remarks
   * The description of the component features.
   * 
   * @example
   * ***
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the component is required by the cluster. Valid values:
   * 
   * - `true`: The component is required and must be installed when the cluster is created.
   * 
   * - `false`: The component is optional and can be installed through Component Management after the cluster is created.
   * 
   * @example
   * false
   */
  required?: string;
  /**
   * @remarks
   * Indicates whether default installation is disabled. When a cluster is created, in addition to the components required by the cluster, some logging or routing-related components (such as Ingress) are also installed by default. If you do not want to install them by default, you can set this field to disable default installation. Valid values:
   * 
   * - `true`: Default installation is disabled.
   * - `false`: Default installation is enabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
      description: 'description',
      required: 'required',
      disabled: 'disabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
      description: 'string',
      required: 'string',
      disabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

