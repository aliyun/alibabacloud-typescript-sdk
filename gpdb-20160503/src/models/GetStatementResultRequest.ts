// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStatementResultRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID. Can be obtained by calling DescribeDBInstances.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Database name.
   * 
   * @example
   * test
   */
  database?: string;
  /**
   * @remarks
   * Task ID for asynchronous SQL execution.
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
   * Region ID where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Access credential. Created through the CreateSecret interface.
   * 
   * > When accessing this interface with a sub-account, the sub-account must have the UseSecret or GetSecretValue permission for this SecretArn.
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

