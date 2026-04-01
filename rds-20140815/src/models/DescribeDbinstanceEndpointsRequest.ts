// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint ID of the instance.
   * 
   * >  If this parameter is not specified, the information about all endpoints is returned.
   * 
   * @example
   * ep-****-ro
   */
  DBInstanceEndpointId?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-u****
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

