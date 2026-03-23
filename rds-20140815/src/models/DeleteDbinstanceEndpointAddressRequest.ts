// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBInstanceEndpointAddressRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  connectionString?: string;
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
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionString: 'ConnectionString',
      DBInstanceEndpointId: 'DBInstanceEndpointId',
      DBInstanceId: 'DBInstanceId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionString: 'string',
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

