// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceEndpointRequestNodeItems extends $dara.Model {
  DBInstanceId?: string;
  nodeId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceEndpointRequest extends $dara.Model {
  clientToken?: string;
  DBInstanceEndpointDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceEndpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * **if can be null:**
   * true
   */
  nodeItems?: ModifyDBInstanceEndpointRequestNodeItems[];
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceEndpointDescription: 'DBInstanceEndpointDescription',
      DBInstanceEndpointId: 'DBInstanceEndpointId',
      DBInstanceId: 'DBInstanceId',
      nodeItems: 'NodeItems',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceEndpointDescription: 'string',
      DBInstanceEndpointId: 'string',
      DBInstanceId: 'string',
      nodeItems: { 'type': 'array', 'itemType': ModifyDBInstanceEndpointRequestNodeItems },
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeItems)) {
      $dara.Model.validateArray(this.nodeItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

