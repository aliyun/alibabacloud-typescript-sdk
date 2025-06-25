// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyIPAclConfigRequestIPAclConfig extends $dara.Model {
  /**
   * @remarks
   * The mode of access control on source IP addresses. Valid values:
   * 
   * *   **black**: blacklist mode.
   * *   **white**: whitelist mode.
   * 
   * This parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The source IP addresses in the blacklist or whitelist.
   * 
   * > 
   * 
   * *   This parameter is required if AclType is set to white.
   * 
   * *   If AclType is set to black but you do not want to add IP addresses to the blacklist, you can leave IPs empty.
   * 
   * This parameter is required.
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

