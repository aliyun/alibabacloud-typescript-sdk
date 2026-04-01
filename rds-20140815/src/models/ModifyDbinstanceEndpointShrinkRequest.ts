// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceEndpointShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f****
   */
  clientToken?: string;
  /**
   * @remarks
   * The user-defined description of the endpoint.
   * 
   * @example
   * for readonly business
   */
  DBInstanceEndpointDescription?: string;
  /**
   * @remarks
   * The endpoint ID of the instance. You can call the DescribeDBInstanceEndpoints operation to query the endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-****
   */
  DBInstanceEndpointId?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The information about the endpoint.
   * 
   * **if can be null:**
   * true
   */
  nodeItemsShrink?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceEndpointDescription: 'DBInstanceEndpointDescription',
      DBInstanceEndpointId: 'DBInstanceEndpointId',
      DBInstanceId: 'DBInstanceId',
      nodeItemsShrink: 'NodeItems',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceEndpointDescription: 'string',
      DBInstanceEndpointId: 'string',
      DBInstanceId: 'string',
      nodeItemsShrink: 'string',
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

