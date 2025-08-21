// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  deletionProtection?: boolean;
  /**
   * @remarks
   * The hostname of the Elastic Compute Service (ECS) instance. The value can be 2 to 64 characters in length. You can use periods (.) to separate the value into multiple segments. Each segment can contain letters, digits, hyphens (-), and periods. Consecutive periods or hyphens are not allowed. The name cannot start or end with a period (.) or a hyphen (-).
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to modify attributes. You can specify only one ID.
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
   * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
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
   * The user data of the instance. User data must be encoded in Base64.
   * 
   * The size of your UserData cannot exceed 16 KB. We recommend that you do not pass in confidential information such as passwords and private keys in the plaintext format. If you must pass in confidential information, we recommend that you encrypt and Base64-encode the information before you pass it in. Then you can decode and decrypt the information in the same way within the instance.
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

