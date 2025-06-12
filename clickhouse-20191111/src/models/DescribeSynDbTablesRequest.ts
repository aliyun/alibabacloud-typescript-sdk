// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynDbTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp158i5wvj436****
   */
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  synDb?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      synDb: 'SynDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      synDb: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

