// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBInstanceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of requests. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88****
   */
  clientToken?: string;
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
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceEndpointId: 'DBInstanceEndpointId',
      DBInstanceId: 'DBInstanceId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceEndpointId: 'string',
      DBInstanceId: 'string',
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

