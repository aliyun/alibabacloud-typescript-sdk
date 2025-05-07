// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPGHbaConfigRequestHbaItem extends $dara.Model {
  /**
   * @remarks
   * The IP addresses from which the specified users can access the specified databases. If you set this parameter to 0.0.0.0/0, the specified users are allowed to access the specified databases from all IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  address?: string;
  /**
   * @remarks
   * The name of the database. If you set this parameter to all, the specified users are allowed to access all databases on the instance.
   * 
   * If you specify multiple entries, separate the entries with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  database?: string;
  /**
   * @remarks
   * The mask of the IP address. If the value of the **Address** parameter is an IP address, you can use this parameter to specify the mask of the IP address.
   * 
   * @example
   * 0
   */
  mask?: string;
  /**
   * @remarks
   * The authentication method. Valid values:
   * 
   * *   **trust**
   * *   **reject**
   * *   **scram-sha-256**
   * *   **md5**
   * *   **password**
   * *   **gss**
   * *   **sspi**
   * *   **ldap**
   * *   **radius**
   * *   **cert**
   * *   **pam**
   * 
   * This parameter is required.
   * 
   * @example
   * ldap
   */
  method?: string;
  /**
   * @remarks
   * The options of the authentication method. In this topic, LDAP is used as an example. You must configure this parameter. For more information, see [Authentication Methods](https://www.postgresql.org/docs/11/auth-methods.html).
   * 
   * @example
   * ldapserver=The private IP address of the ECS instance ldapbasedn="CN=Users,DC=pgsqldomain,DC=net" ldapbinddn="CN=The username of the administrator user of the AD domain controller, CN=Users,DC=pgsqldomain,DC=net" ldapbindpasswd="The password of the administrator user of the AD domain controller" ldapsearchattribute="sAMAccountName"
   */
  option?: string;
  /**
   * @remarks
   * The priority of the record. If you set this parameter to 0, the record has the highest priority. Valid values: 0 to 10000.
   * 
   * This parameter is used to identify each record. When you add a record, the value of the PriorityId parameter for the new record must be different from the value of the PriorityId parameter of any existing record. When you modify or delete a record, you must also modify or delete the value of the PriorityId parameter for this record.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  priorityId?: number;
  /**
   * @remarks
   * The connection type.
   * 
   * Valid values:
   * 
   * *   **host**: The record matches TCP/IP connections, including SSL connections and non-SSL connections.
   * *   **hostssl**: The record matches only TCP/IP connections that are established over SSL.
   * *   **hostnossl**: The record matches only TCP/IP connections that are not established over SSL connections.
   * 
   * >  You can set this parameter to hostssl only when SSL encryption is enabled for the instance. For more information, see Configure SSL encryption for an ApsaraDB RDS for PostgreSQL instance.[](~~229518~~)
   * 
   * This parameter is required.
   * 
   * @example
   * host
   */
  type?: string;
  /**
   * @remarks
   * The user who is allowed to access the specified databases. You must specify the user that is used to log on to the RDS instance. If you specify multiple entries, separate the entries with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ldapuser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      database: 'Database',
      mask: 'Mask',
      method: 'Method',
      option: 'Option',
      priorityId: 'PriorityId',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      database: 'string',
      mask: 'string',
      method: 'string',
      option: 'string',
      priorityId: 'number',
      type: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

