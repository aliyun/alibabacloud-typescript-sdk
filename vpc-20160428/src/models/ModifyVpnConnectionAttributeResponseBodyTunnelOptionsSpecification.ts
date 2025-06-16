// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptions } from "./ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptions";


export class ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecification extends $dara.Model {
  tunnelOptions?: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptions[];
  static names(): { [key: string]: string } {
    return {
      tunnelOptions: 'TunnelOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelOptions: { 'type': 'array', 'itemType': ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptions },
    };
  }

  validate() {
    if(Array.isArray(this.tunnelOptions)) {
      $dara.Model.validateArray(this.tunnelOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

