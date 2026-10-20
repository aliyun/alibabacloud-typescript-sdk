// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StandardComponentsValue extends $dara.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * ack-arena
   */
  name?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * 0.5.0
   */
  version?: string;
  /**
   * @remarks
   * The description of the component.
   * 
   * @example
   * ***
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the component is required for the cluster. Valid values:
   * 
   * - `true`: The component is required and must be installed when the cluster is created.
   * 
   * - `false`: The component is not required. You can install it through component management after the cluster is created.
   * 
   * @example
   * false
   */
  required?: string;
  /**
   * @remarks
   * Specifies whether to disable default installation. When a cluster is created, in addition to the required components, some log-related or routing-related components (such as Ingress) are installed by default. If you do not want these components to be installed by default, set this parameter to disable default installation. Valid values:
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

