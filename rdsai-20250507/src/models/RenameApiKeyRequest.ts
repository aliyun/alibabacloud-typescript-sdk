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
   * The instance ID.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The API key name.
   * 
   * This parameter is required.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  roleArn?: string;
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

