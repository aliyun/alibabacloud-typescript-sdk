// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * READ,WRITE
   */
  aclActions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
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

