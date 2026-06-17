// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterMigrationEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to view information about all clusters in the destination region, including the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1w68hcomx235jaz
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The parameters for modifying the DTS task.
   * 
   * **dtsJobId**: The ID of the DTS task.
   * 
   * endpoint: The endpoint to switch. Set the value to src for the source endpoint or **dst** for the destination endpoint.
   * 
   * **endpointInstanceId**: The ID of the cloud instance.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"dtsJobId\\":\\"di4w4d9r12m38mb\\",\\"endpoint\\":\\"src\\",\\"endpointInstanceId\\":\\"pc-k2j96w169uhu868l8\\"}]
   */
  migrationConfig?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      migrationConfig: 'MigrationConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      migrationConfig: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

