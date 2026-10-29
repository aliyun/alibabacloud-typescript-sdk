// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  deletionProtection?: boolean;
  /**
   * @remarks
   * The hostname of the ECS instance. The hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-). Consecutive periods (.) or hyphens (-) are not allowed. The hostname cannot start or end with a period (.) or a hyphen (-).
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the instance to modify. Only a single instance ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * i-instanc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * i-instanceidname
   */
  instanceName?: string;
  /**
   * @remarks
   * The password of the instance.
   * 
   * @example
   * yourPassword
   */
  password?: string;
  /**
   * @remarks
   * The instance user data. The user data must be encoded in Base64.
   * 
   * Before encoding, the raw data cannot exceed 16 KB in size. Do not pass sensitive information such as passwords and private keys in plaintext. If you must pass sensitive information, encrypt the information before you encode it in Base64, and then decrypt the information in the same way within the instance.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgK****
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      password: 'Password',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'boolean',
      hostName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      password: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

