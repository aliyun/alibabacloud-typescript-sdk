// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * A unique ID that the client generates.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system of the device where the client runs.
   * 
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * A client token to ensure idempotence. Generate a unique ASCII string for each request. The string must be no more than 64 characters long. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 6ce412a8-399f-49f9-9518-66ee028a****
   */
  clientToken?: string;
  /**
   * @remarks
   * The client version. If you use the WUYING Workspace client, find this value in the **About** dialog box on the logon screen.
   * 
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify from 1 to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The logon credential.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  osUpdate?: boolean;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to get a list of regions where WUYING Workspace is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * The logon credential.
   * 
   * @example
   * 04b7b80a0b020715c5c1b4175fc4771698****9e2a759557a4624665fd53ae40
   */
  sessionToken?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      osUpdate: 'OsUpdate',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientToken: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      loginToken: 'string',
      osUpdate: 'boolean',
      regionId: 'string',
      sessionId: 'string',
      sessionToken: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

