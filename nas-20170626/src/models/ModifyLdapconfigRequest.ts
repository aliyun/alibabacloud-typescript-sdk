// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLDAPConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The distinguished name (DN) of the entry to bind to the LDAP directory.
   * 
   * @example
   * cn=alibaba,dc=com
   */
  bindDN?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 109c042666
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The LDAP search base.
   * 
   * This parameter is required.
   * 
   * @example
   * dc=example
   */
  searchBase?: string;
  /**
   * @remarks
   * The LDAP server address.
   * 
   * This parameter is required.
   * 
   * @example
   * ldap://ldap.example.example
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      bindDN: 'BindDN',
      fileSystemId: 'FileSystemId',
      searchBase: 'SearchBase',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindDN: 'string',
      fileSystemId: 'string',
      searchBase: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

