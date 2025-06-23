// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about the port forwarding rule. This parameter is a JSON string. The string contains the following fields:
   * 
   * *   **InstanceId**: the ID of the instance. This field is required and must be of the STRING type.
   * *   **Protocol**: the forwarding protocol. This field is required and must be of the STRING type. Valid values: **tcp** and **udp**.
   * *   **FrontendPort**: the forwarding port. This field is required and must be of the INTEGER type.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"ddoscoo-cn-mp91j1ao****","Protocol":"tcp","FrontendPort":8080}]
   */
  networkRule?: string;
  static names(): { [key: string]: string } {
    return {
      networkRule: 'NetworkRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

