// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  deletionProtection?: boolean;
  /**
   * @remarks
   * The hostname of the ECS instance. The hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-). The hostname cannot contain consecutive periods (.) or hyphens (-), and cannot start or end with a period (.) or a hyphen (-).
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the instance to modify. Only a single instance is supported.
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
   * The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
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
   * The instance user data, which must be Base64-encoded. The size of the raw data before encoding cannot exceed 16 KB. Do not pass in sensitive information such as passwords or private keys in plaintext. If you must pass in sensitive information, encode it before Base64-encoding it, and decode it in the same way inside the instance.
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

