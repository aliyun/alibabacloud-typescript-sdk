// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdasContainersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the component is disabled. Valid values:
   * 
   * *   **true**: The component is disabled.
   * *   **false**: The component is not disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The version of the container, such as Ali-Tomcat, in which an application that is developed based on High-speed Service Framework (HSF) is deployed.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      edasContainerVersion: 'EdasContainerVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      edasContainerVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

