// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSecurityIpGroupResponseBodySecurityIpGroup } from "./CreateSecurityIpGroupResponseBodySecurityIpGroup";


export class CreateSecurityIpGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP addresses or CIDR blocks in the IP address whitelist group.   
   * The return values of SecurityIps are strings that are separated with commas (,).
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **CreateSecurityIpGroup**.
   */
  securityIpGroup?: CreateSecurityIpGroupResponseBodySecurityIpGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroup: CreateSecurityIpGroupResponseBodySecurityIpGroup,
    };
  }

  validate() {
    if(this.securityIpGroup && typeof (this.securityIpGroup as any).validate === 'function') {
      (this.securityIpGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

