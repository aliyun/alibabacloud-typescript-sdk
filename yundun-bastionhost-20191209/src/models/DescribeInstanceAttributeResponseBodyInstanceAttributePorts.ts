// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyInstanceAttributePorts extends $dara.Model {
  /**
   * @remarks
   * The custom port.
   * 
   * > Only the SSH and RDP ports can be changed. If no custom O\\&M port is specified for the bastion host, the value of StandardPort is returned.
   * 
   * @example
   * 600xx
   */
  customPort?: number;
  /**
   * @remarks
   * The standard port of the bastion host. Valid values:
   * 
   * *   **SSH**: 60022.
   * *   **RDP**: 63389.
   * *   **HTTPS**: 443.
   * 
   * @example
   * 60022
   */
  standardPort?: number;
  static names(): { [key: string]: string } {
    return {
      customPort: 'CustomPort',
      standardPort: 'StandardPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPort: 'number',
      standardPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

