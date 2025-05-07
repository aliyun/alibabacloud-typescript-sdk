// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Normal**: regular endpoint
   * *   **ReadWriteSplitting**: read/write splitting endpoint
   * 
   * > By default, the system returns both types of endpoints.
   * 
   * @example
   * Normal
   */
  DBInstanceNetRWSplitType?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * None
   */
  flag?: number;
  /**
   * @remarks
   * The name of the dedicated cluster to which the instance belongs. This parameter takes effect only when the instance runs MySQL on RDS Standard Edition and is created in a dedicated cluster.
   * 
   * @example
   * rgc-2ze*****
   */
  generalGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetRWSplitType: 'DBInstanceNetRWSplitType',
      flag: 'Flag',
      generalGroupName: 'GeneralGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      DBInstanceNetRWSplitType: 'string',
      flag: 'number',
      generalGroupName: 'string',
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

