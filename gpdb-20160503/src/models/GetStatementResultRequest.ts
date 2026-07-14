// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStatementResultRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test
   */
  database?: string;
  /**
   * @remarks
   * The task ID of the asynchronous SQL execution.
   * 
   * This parameter is required.
   * 
   * @example
   * 9A920F47-416A-4044-817C-7C2A72AD16D3
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The access credential. Created by calling the CreateSecret operation.
   * 
   * > When you access this operation by using a RAM user, you must have the UseSecret or GetSecretValue permission on this SecretArn.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      id: 'Id',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      secretArn: 'SecretArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      id: 'string',
      ownerId: 'number',
      regionId: 'string',
      secretArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

