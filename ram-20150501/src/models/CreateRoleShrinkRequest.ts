// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether console logon is allowed for the RAM role. Valid values:
   * - true: Console logon is allowed.
   * - false: Console logon is not allowed.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  allowConsoleLogin?: boolean;
  /**
   * @remarks
   * The trust policy. Specifies one or more principals that are allowed to assume the RAM role. The principal can be an Alibaba Cloud account, an Alibaba Cloud service, or an identity provider.
   * >Resource Access Management (RAM) users cannot assume RAM roles whose trusted entity is an Alibaba Cloud service.
   * 
   * @example
   * {"Statement":[{"Action":"sts:AssumeRole","Effect":"Allow","Principal":{"RAM":"acs:ram::123456789012****:root"}}],"Version":"1"}
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * The description must be 1 to 1024 characters in length.
   * 
   * @example
   * ECS management role.
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
   * 
   * If you leave this parameter empty, the default value is used.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      allowConsoleLogin: 'AllowConsoleLogin',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleName: 'RoleName',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowConsoleLogin: 'boolean',
      assumeRolePolicyDocument: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleName: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

