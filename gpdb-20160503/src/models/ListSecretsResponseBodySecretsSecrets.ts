// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsResponseBodySecretsSecrets extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1033***
   */
  accountId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp14****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The description of the access credential.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the access credential for the created Data API account. Format: `acs:gpdb:{{region}}:{{accountId}}:secret/{{secretName}}-{{32 digits random string}`.
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  /**
   * @remarks
   * The name of the access credential.
   * 
   * @example
   * testsecret
   */
  secretName?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * testacc
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      regionId: 'RegionId',
      secretArn: 'SecretArn',
      secretName: 'SecretName',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      DBInstanceId: 'string',
      description: 'string',
      regionId: 'string',
      secretArn: 'string',
      secretName: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

