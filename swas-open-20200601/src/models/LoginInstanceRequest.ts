// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ae7106e68eb4402b0dcbd48a9de****
   */
  instanceId?: string;
  /**
   * @remarks
   * The password associated with the username of the simple application server.
   * 
   * - Linux server: No password is required.
   * - Windows server: Enter the configured password. If you have not set a password after purchasing the simple application server, see [Reset the password](https://help.aliyun.com/document_detail/60055.html).
   * 
   * @example
   * Test****
   */
  password?: string;
  /**
   * @remarks
   * The port number for remote logon to the instance.
   * 
   * - Linux server: The default port is 22.
   * 
   * - Windows server: The default port is 3389.
   * 
   * > If you want to connect to the server by using a custom port, you must first change the default remote port of the server. For more information, see [Settings for custom remote connection ports](https://help.aliyun.com/document_detail/2807402.html).
   * 
   * @example
   * 3389
   */
  port?: number;
  /**
   * @remarks
   * The region ID of the specified Simple Application Server instance. You can call [ListRegions](https://help.aliyun.com/document_detail/189315.html) to query the list of supported Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The username for the simple application server.
   * 
   * - You do not need to enter a username for a Linux server.
   * - The default username for a Windows server is `administrator`.
   * 
   * @example
   * administrator
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
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

