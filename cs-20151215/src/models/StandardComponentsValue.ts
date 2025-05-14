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
   * Indicates whether the component is a required component. Valid values:
   * 
   * *   `true`: The component is required and must be installed when a cluster is created.
   * *   `false`: The component is optional. After a cluster is created, you can go to the `Add-ons` page to install the component.
   * 
   * @example
   * false
   */
  required?: string;
  /**
   * @remarks
   * Indicates whether the automatic installation of the component is disabled. By default, some optional components, such as components for logging and Ingresses, are installed when a cluster is created. You can set this parameter to disable automatic component installation. Valid values:
   * 
   * *   `true`: disables automatic component installation.
   * *   `false`: enables automatic component installation.
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

