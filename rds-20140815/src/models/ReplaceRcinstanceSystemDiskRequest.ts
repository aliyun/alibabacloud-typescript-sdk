// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceRCInstanceSystemDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID that is used when you reinstall the OS.
   * 
   * @example
   * m-2zec4lvlhcdkyd13****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-m5ei7b1w38w2l91x****
   */
  instanceId?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  isLocalDisk?: boolean;
  /**
   * @remarks
   * The name of the new key pair. If you do not specify this parameter, you must reset the key pair after the OS is reinstalled.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The new logon password of the RDS Custom instance. If you do not specify this parameter, you must reset the logon password after the OS is reinstalled.
   * 
   * *   The value must be 8 to 30 characters in length.
   * *   The value must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Supported special characters include: ( ) \\` ~ ! @ # $ % ^ & \\* - _ + =
   * 
   * @example
   * testPassword
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      isLocalDisk: 'IsLocalDisk',
      keyPairName: 'KeyPairName',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceId: 'string',
      isLocalDisk: 'boolean',
      keyPairName: 'string',
      password: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

