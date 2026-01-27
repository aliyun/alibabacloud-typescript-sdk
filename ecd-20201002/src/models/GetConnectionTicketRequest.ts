// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify the `Tag` parameter, you must also specify the `Key` parameter. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun` and contain only spaces.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify an empty string as a tag value. A tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $dara.Model {
  accessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The type of the client.
   * 
   * Valid values:
   * 
   * *   html5: web client
   * *   Linux: self-developed hardware terminal
   * *   android: Android client
   * *   windows: Windows client
   * *   ios: iOS client
   * *   macos: macOS client
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  /**
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
   * The cloud compute ID.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
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
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * The tags. You can specify 1 to 20 tags.
   */
  tag?: GetConnectionTicketRequestTag[];
  /**
   * @remarks
   * The ID of the cloud computer connection task.\\
   * The first time you call the GetConnectionTicket operation, you do not need to configure this parameter. When you call the GetConnectionTicket operation later, set this parameter to the value of the `TaskId` parameter returned from the previous invocation.
   * 
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c638****
   */
  taskId?: string;
  ticketBlackList?: string[];
  /**
   * @example
   * 28c80e90-f71e-4c23-93d6-1225329cf949
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      commandContent: 'CommandContent',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionId: 'SessionId',
      tag: 'Tag',
      taskId: 'TaskId',
      ticketBlackList: 'TicketBlackList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      clientId: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      commandContent: 'string',
      desktopId: 'string',
      loginToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionId: 'string',
      tag: { 'type': 'array', 'itemType': GetConnectionTicketRequestTag },
      taskId: 'string',
      ticketBlackList: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.ticketBlackList)) {
      $dara.Model.validateArray(this.ticketBlackList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

