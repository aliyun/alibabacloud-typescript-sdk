// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The command that you want to run to configure a custom application in user mode. After you obtain the credential, the application is automatically started. Parameter description in the command:
   * 
   * *   appPath: the path of the application startup file. Example: `"C:\\\\Program Files (x86)\\\\000\\\\000.exe"`. Use double slashes (\\\\\\) as the delimiter. Type of the parameter value: string.
   * *   appParameter: the startup arguments of the application. Example: `"meetingid 000 meetingname aaa"`. Separate multiple arguments with spaces. Type of the parameter value: string.
   * 
   * @example
   * {
   *       "startApplication": {
   *             "startApplicationList": [
   *                   {
   *                         "sessionName": "",
   *                         "appList": [
   *                               {
   *                                     "appPath": "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
   *                                     "appParameter": "www.example.com www.example1.com"
   *                               }
   *                         ]
   *                   }
   *             ]
   *       }
   * }
   */
  commandContent?: string;
  /**
   * @remarks
   * The ID of the cloud computer for which you want to generate a connection credential. This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The ID of the end user of the cloud computer. The end user must be the current end user of the cloud computer.
   * 
   * @example
   * Alice
   */
  endUserId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the current end user of the cloud computer.
   * 
   * @example
   * Ab123456
   */
  password?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the cloud computer connection task.
   * 
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c63862da
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier of the client. If you use an Alibaba Cloud Workspace client, click **About** on the client logon page to view the identifier of the client.
   * 
   * @example
   * 28c80e90-f71e-4c23-93d6-1225329cf949
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      desktopId: 'string',
      endUserId: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

