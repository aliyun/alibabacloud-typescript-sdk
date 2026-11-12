// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the specified region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
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
   * The Alibaba Cloud Resource Name (ARN) that uniquely specifies the logon credentials and permissions of the Data API account created by the user. Format: ```acs:gpdb:{{region}}:{{accountId}}:secret/{{secretName}}-{{32 digits random string}```
   * 
   * > Specify either this parameter or the SecretName parameter.
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  /**
   * @remarks
   * The name of the user credential.
   * 
   * > Specify either this parameter or the SecretArn parameter.
   * 
   * @example
   * testsecret
   */
  secretName?: string;
  /**
   * @remarks
   * The ID of the workspace that consists of multiple database instances. This parameter and the DBInstanceId parameter cannot be empty at the same time. If both parameters are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      secretArn: 'SecretArn',
      secretName: 'SecretName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
      secretArn: 'string',
      secretName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

