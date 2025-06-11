// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifySecurityIpsResponseBodySecurityIpGroup } from "./ModifySecurityIpsResponseBodySecurityIpGroup";


export class ModifySecurityIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * Example 1
   */
  securityIpGroup?: ModifySecurityIpsResponseBodySecurityIpGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroup: ModifySecurityIpsResponseBodySecurityIpGroup,
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

