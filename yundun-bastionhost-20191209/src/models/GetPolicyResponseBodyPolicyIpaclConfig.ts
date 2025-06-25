// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyResponseBodyPolicyIPAclConfig extends $dara.Model {
  /**
   * @remarks
   * The mode of access control on source IP addresses. Valid values:
   * 
   * *   white: whitelist mode.
   * *   black: blacklist mode.
   * 
   * @example
   * black
   */
  aclType?: string;
  /**
   * @remarks
   * The IP addresses from which logons are not allowed.
   */
  IPs?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      IPs: 'IPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      IPs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPs)) {
      $dara.Model.validateArray(this.IPs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

