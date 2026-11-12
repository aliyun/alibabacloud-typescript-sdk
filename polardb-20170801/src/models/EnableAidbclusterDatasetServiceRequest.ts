// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAIDBClusterDatasetServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the PolarFS cold storage instance that you attach to the dataset management service. Instructions to invoke: Note: This parameter is actually required. If it is not provided, the API returns InvalidDBClusterId.Malformed (400). Instructions to invoke: Valid ID format description: specifies the accepted prefix families (such as pcs-xxx), separator conventions (hyphen character vs. underscore character), and the corresponding resource types.
   * 
   * @example
   * pcs-2ze26***
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the database instance that you attach to the dataset management service.
   * 
   * @example
   * pc-2ze88***
   */
  relativeDBClusterId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      relativeDBClusterId: 'RelativeDBClusterId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      relativeDBClusterId: 'string',
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

