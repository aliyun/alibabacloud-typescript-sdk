// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenameApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * API KEY
   * 
   * This parameter is required.
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * This parameter is required.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @remarks
   * The ARN of the RAM role associated with the API key. The account to which the role belongs must be the same as the account of the caller.
   * 
   * @example
   * acs:ram::1234567890123456:role/example-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The name of the RAM role associated with the API key.
   * 
   * @example
   * example-role
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      instanceId: 'InstanceId',
      keyName: 'KeyName',
      roleArn: 'RoleArn',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      instanceId: 'string',
      keyName: 'string',
      roleArn: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

