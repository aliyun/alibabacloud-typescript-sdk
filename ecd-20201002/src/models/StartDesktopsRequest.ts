// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud Workspace client (hereinafter referred to as WUYING client). The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system (OS) of the device that run the client.
   * 
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 21e7be12-aa4f-4389-b3e1-82f4a1b5****
   */
  clientToken?: string;
  /**
   * @remarks
   * The client version. If you use a WUYING client, you can click **About** on the client logon page to view the version of the client.
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
   * ecd-cg27ufmapab08****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
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
   * The UUID of the client.
   * 
   * @example
   * 71F6A700735E74A61161A53F0C47****
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
      regionId: 'RegionId',
      sessionId: 'SessionId',
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
      regionId: 'string',
      sessionId: 'string',
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

