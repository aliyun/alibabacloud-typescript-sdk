// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSystemRequestLoginCredentials extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair that you want to bind to the simple application server. Only Linux simple application servers support key pairs.
   * 
   * @example
   * aliyunkey
   */
  keyPairName?: string;
  /**
   * @remarks
   * The password that corresponds to the administrator.
   * 
   * - For Windows servers, the default administrator account is Administrator.
   * 
   * - Linux servers, the default administrator account is root.
   * 
   * @example
   * ***
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the destination image. If you do not specify this parameter, the current image is reset.
   * 
   * @example
   * 794c230fd3e64ea19f83f4d7a0ad****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The information about the logon credentials.
   */
  loginCredentials?: ResetSystemRequestLoginCredentials;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      loginCredentials: 'LoginCredentials',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageId: 'string',
      instanceId: 'string',
      loginCredentials: ResetSystemRequestLoginCredentials,
      regionId: 'string',
    };
  }

  validate() {
    if(this.loginCredentials && typeof (this.loginCredentials as any).validate === 'function') {
      (this.loginCredentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

