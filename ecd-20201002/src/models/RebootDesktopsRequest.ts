// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system (OS) of the device that runs the Alibaba Cloud Workspace client (hereinafter referred to as WUYING client).
   * 
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 40401e62-5caf-4508-8de7-bf98af12****
   */
  clientToken?: string;
  /**
   * @remarks
   * The client version. If you use a WUYING client, you can view the client version in the **About** dialog box on the client logon page.
   * 
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify the IDs of 1 to 20 cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  osUpdate?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by WUYING Workspace.
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
   * The logon token.
   * 
   * @example
   * 04b7b80a0b020715c5c1b4175fc4771698****9e2a759557a4624665fd53ae40
   */
  sessionToken?: string;
  /**
   * @remarks
   * The UUID of the client.
   * 
   * @example
   * 91761ED27169E2FC564F29388E2D****
   */
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

