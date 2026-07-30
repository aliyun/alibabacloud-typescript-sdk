// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies a custom user-mode application that is automatically launched after the credential is obtained.
   * 
   * - appPath: String. The path of the application startup file. Example: `"C:\\Program Files (x86)\\000\\000.exe"`. Use double backslashes (\\\\) as path separators.
   * - appParameter: String. The application startup parameters. Example: `"meetingid 000 meetingname aaa"`. Separate parameters with spaces.
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
   * The ID of the cloud computer for which you want to generate a connection credential. This parameter is required to generate the credential.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The username of the authorized user of the cloud computer. You must specify an existing authorized user of the cloud computer to generate the credential.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the authorized user of the cloud computer.
   * 
   * @example
   * Ab123456
   */
  password?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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
   * 2afbad19-778a-4fc5-9674-1f19c638****
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier of the client. If you use the Apsara Uni-manager client, you can view this parameter in the **About** dialog box on the client logon page.
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

