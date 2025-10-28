// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Permission } from "./Permission";


export class DescribeSecurityGroupAttributeResponseBody extends $dara.Model {
  egressPermissions?: Permission[];
  ingressPermissions?: Permission[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      egressPermissions: 'EgressPermissions',
      ingressPermissions: 'IngressPermissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressPermissions: { 'type': 'array', 'itemType': Permission },
      ingressPermissions: { 'type': 'array', 'itemType': Permission },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressPermissions)) {
      $dara.Model.validateArray(this.egressPermissions);
    }
    if(Array.isArray(this.ingressPermissions)) {
      $dara.Model.validateArray(this.ingressPermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

