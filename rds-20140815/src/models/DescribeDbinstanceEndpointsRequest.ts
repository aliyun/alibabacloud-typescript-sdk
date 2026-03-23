// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEndpointsRequest extends $dara.Model {
  clientToken?: string;
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

