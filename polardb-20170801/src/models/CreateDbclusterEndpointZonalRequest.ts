// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterEndpointZonalRequest extends $dara.Model {
  /**
   * @example
   * Disable
   */
  autoAddNewNodes?: string;
  /**
   * @example
   * 6000170000591aed949d0f******************
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @example
   * test
   */
  DBEndpointDescription?: string;
  /**
   * @example
   * {"ConsistLevel": "1","DistributedTransaction": "on"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @example
   * pi-**************,pi-*************
   */
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
  /**
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * on
   */
  sccMode?: string;
  static names(): { [key: string]: string } {
    return {
      autoAddNewNodes: 'AutoAddNewNodes',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      endpointConfig: 'EndpointConfig',
      endpointType: 'EndpointType',
      nodes: 'Nodes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      polarSccTimeoutAction: 'PolarSccTimeoutAction',
      polarSccWaitTimeout: 'PolarSccWaitTimeout',
      readWriteMode: 'ReadWriteMode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sccMode: 'SccMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAddNewNodes: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      endpointConfig: 'string',
      endpointType: 'string',
      nodes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      polarSccTimeoutAction: 'string',
      polarSccWaitTimeout: 'string',
      readWriteMode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sccMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

