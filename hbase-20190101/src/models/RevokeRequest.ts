// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeRequest extends $dara.Model {
  /**
   * @remarks
   * The database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * The list of permissions. Separate multiple permissions with commas (,). Valid values:
   * - READ: read permission.
   * - WRITE: write permission.
   * - ADMIN: administrative permission.
   * - TRASH: purge permission.
   * 
   * This parameter is required.
   * 
   * @example
   * READ,WRITE
   */
  aclActions?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespace. An asterisk (*) indicates global, which means all namespaces.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The table name. An asterisk (*) indicates global, which means all tables.
   * 
   * This parameter is required.
   * 
   * @example
   * table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      aclActions: 'AclActions',
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      aclActions: 'string',
      clusterId: 'string',
      namespace: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

