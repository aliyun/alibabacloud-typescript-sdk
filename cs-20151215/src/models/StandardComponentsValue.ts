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
   * The description of the component features.
   * 
   * @example
   * ***
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the component is required for the cluster. Valid values:
   * 
   * - true: The component is required and must be installed when the cluster is created.
   * 
   * - false: The component is not required. You can install it in the Components module after the cluster is created.
   * 
   * @example
   * false
   */
  required?: string;
  /**
   * @remarks
   * Specifies whether to disable the default installation of the component. When a cluster is created, components required for the cluster are installed. In addition, some components related to logs or routing, such as Ingress, are installed by default. If you do not want to install these components by default, you can set this parameter to disable the default installation. Valid values:
   * 
   * - true: disables the default installation.
   * - false: enables the default installation.
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

