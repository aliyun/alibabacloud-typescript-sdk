// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelAuthorizedUserInfo extends $dara.Model {
  /**
   * @remarks
   * The total number of authorized users.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of authorized user groups.
   * 
   * @example
   * 0
   */
  totalUserGroupCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalUserGroupCount: 'TotalUserGroupCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalUserGroupCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelBrowserConfigBookmarks extends $dara.Model {
  /**
   * @remarks
   * The folder where the bookmark is located.
   * 
   * @example
   * Work portal
   */
  bookmarkFolder?: string;
  /**
   * @remarks
   * The bookmark ID.
   * 
   * @example
   * bm-12345
   */
  bookmarkId?: string;
  /**
   * @remarks
   * The bookmark name.
   * 
   * @example
   * Alibaba Cloud website
   */
  bookmarkName?: string;
  /**
   * @remarks
   * The URL of the bookmark.
   * 
   * @example
   * https://www.aliyun.com
   */
  bookmarkURL?: string;
  static names(): { [key: string]: string } {
    return {
      bookmarkFolder: 'BookmarkFolder',
      bookmarkId: 'BookmarkId',
      bookmarkName: 'BookmarkName',
      bookmarkURL: 'BookmarkURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookmarkFolder: 'string',
      bookmarkId: 'string',
      bookmarkName: 'string',
      bookmarkURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelBrowserConfig extends $dara.Model {
  /**
   * @remarks
   * The list of browser bookmarks. A maximum of 20 bookmarks are returned. To query the complete list of bookmarks, call the `ListBrowserBookmarks` operation.
   */
  bookmarks?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelBrowserConfigBookmarks[];
  /**
   * @remarks
   * The browser startup parameters. For example, `--incognito` specifies an incognito window.
   * 
   * @example
   * --incognito
   */
  browserParam?: string;
  /**
   * @remarks
   * The cookie synchronization configuration. A value of `true` indicates that synchronization is enabled, and a value of `false` indicates that synchronization is disabled.
   * 
   * @example
   * true
   */
  cookiesSync?: string;
  /**
   * @remarks
   * The homepage URL that opens when the browser starts.
   * 
   * @example
   * https://www.aliyun.com
   */
  homepage?: string;
  static names(): { [key: string]: string } {
    return {
      bookmarks: 'Bookmarks',
      browserParam: 'BrowserParam',
      cookiesSync: 'CookiesSync',
      homepage: 'Homepage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookmarks: { 'type': 'array', 'itemType': GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelBrowserConfigBookmarks },
      browserParam: 'string',
      cookiesSync: 'string',
      homepage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bookmarks)) {
      $dara.Model.validateArray(this.bookmarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelDuration extends $dara.Model {
  /**
   * @remarks
   * The current payment stage of the package. This parameter is not applicable to the MAU scenario.
   * 
   * @example
   * -
   */
  currentPayStage?: string;
  /**
   * @remarks
   * The end time of the package cycle. This parameter is not applicable to the MAU scenario and is not returned.
   * 
   * @example
   * -
   */
  periodEndTime?: string;
  /**
   * @remarks
   * The start time of the package cycle. This parameter is not applicable to the MAU scenario and is not returned.
   * 
   * @example
   * -
   */
  periodStartTime?: string;
  /**
   * @remarks
   * The total duration of the package, in seconds. This parameter is not applicable to the MAU scenario.
   * 
   * @example
   * -
   */
  totalDuration?: number;
  /**
   * @remarks
   * The used duration of the package, in seconds. This parameter is not applicable to the MAU scenario.
   * 
   * @example
   * -
   */
  usedDuration?: number;
  static names(): { [key: string]: string } {
    return {
      currentPayStage: 'CurrentPayStage',
      periodEndTime: 'PeriodEndTime',
      periodStartTime: 'PeriodStartTime',
      totalDuration: 'TotalDuration',
      usedDuration: 'UsedDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPayStage: 'string',
      periodEndTime: 'string',
      periodStartTime: 'string',
      totalDuration: 'number',
      usedDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNetworkRestrictedURLs extends $dara.Model {
  /**
   * @remarks
   * The ID of the website access restriction entry.
   * 
   * @example
   * ru-12345
   */
  restrictedURLId?: string;
  /**
   * @remarks
   * The website URL in the access restriction entry.
   * 
   * @example
   * aliyun.com
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      restrictedURLId: 'RestrictedURLId',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restrictedURLId: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNetwork extends $dara.Model {
  /**
   * @remarks
   * The website access restriction mode.
   * 
   * - `ALLOW_ALL`: allows all domain names.
   * - `ALLOW_LIST`: allows only websites in the list.
   * 
   * The returned value reflects the current configuration of the browser instance group.
   * 
   * @example
   * ALLOW_ALL
   */
  accessRestriction?: string;
  /**
   * @remarks
   * The ID of the office network to which the browser instance group belongs.
   * 
   * @example
   * cn-hangzhou+dir-843734****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The list of website access restrictions. A maximum of 20 restrictions are returned. To query the complete list, call the `ListBrowserRestrictedURLs` operation.
   */
  restrictedURLs?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNetworkRestrictedURLs[];
  /**
   * @remarks
   * The list of vSwitch IDs used by the browser instance group. This parameter is available for scenarios where custom networks are configured.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accessRestriction: 'AccessRestriction',
      officeSiteId: 'OfficeSiteId',
      restrictedURLs: 'RestrictedURLs',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRestriction: 'string',
      officeSiteId: 'string',
      restrictedURLs: { 'type': 'array', 'itemType': GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNetworkRestrictedURLs },
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.restrictedURLs)) {
      $dara.Model.validateArray(this.restrictedURLs);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNodeInstanceType extends $dara.Model {
  /**
   * @remarks
   * The CPU configuration of the node. This parameter is not applicable to the MAU scenario.
   * 
   * @example
   * -
   */
  cpu?: string;
  /**
   * @remarks
   * The memory configuration of the node. This parameter is not applicable to the MAU scenario.
   * 
   * @example
   * -
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNodePool extends $dara.Model {
  /**
   * @remarks
   * The total number of nodes. This parameter is not applicable to the MAU scenario.
   * 
   * @example
   * -
   */
  nodeAmount?: string;
  /**
   * @remarks
   * The number of used nodes. This parameter is not applicable to the MAU scenario.
   * 
   * @example
   * -
   */
  nodeUsed?: string;
  static names(): { [key: string]: string } {
    return {
      nodeAmount: 'NodeAmount',
      nodeUsed: 'NodeUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeAmount: 'string',
      nodeUsed: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyAuthorizeAccessPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The source CIDR block of the client that is allowed to access.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client access rule.
   * 
   * @example
   * Office network access
   */
  description?: string;
  /**
   * @remarks
   * The action of the client access rule.
   * 
   * - `allow`: allows access.
   * - `deny`: denies access.
   * 
   * @example
   * allow
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      policy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyClientTypes extends $dara.Model {
  /**
   * @remarks
   * The client type. Valid values:
   * 
   * - `windows`: Windows client.
   * - `macos`: macOS client.
   * - `html5`: Web client.
   * - `linux`: Linux client.
   * - `android`: Android client.
   * - `ios`: iOS client.
   * 
   * This field reflects the existing access configurations and does not indicate that all clients are currently available for the product.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * The access policy switch for the client type. Valid values:
   * 
   * - `on`: Allows access from this type of client.
   * - `off`: Denies access from this type of client.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyClipboardPolicy extends $dara.Model {
  /**
   * @remarks
   * The clipboard transfer direction. The value is case-insensitive. Valid values:
   * 
   * - `off`: Disabled in both directions.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Enabled in both directions.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * The clipboard size limit for inbound transfer from the local PC to the cloud browser.
   * 
   * @example
   * 1024
   */
  clipboardReadLimit?: number;
  /**
   * @remarks
   * The clipboard control granularity. Valid values:
   * 
   * - `global`: Unified control.
   * - `grained`: Separate control for text, rich text, and files.
   * 
   * @example
   * grained
   */
  clipboardScope?: string;
  /**
   * @remarks
   * The clipboard size unit. Valid values:
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * @example
   * KB
   */
  clipboardSizeUnit?: string;
  /**
   * @remarks
   * The clipboard size limit for outbound transfer from the cloud browser to the local PC.
   * 
   * @example
   * 1024
   */
  clipboardWriteLimit?: number;
  /**
   * @remarks
   * The clipboard transfer direction. The value is case-insensitive. Valid values:
   * 
   * - `off`: Disabled in both directions.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Enabled in both directions.
   * 
   * @example
   * off
   */
  fileClipboard?: string;
  /**
   * @remarks
   * The clipboard transfer direction. The value is case-insensitive. Valid values:
   * 
   * - `off`: Disabled in both directions.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Enabled in both directions.
   * 
   * @example
   * off
   */
  richTextClipboard?: string;
  /**
   * @remarks
   * The clipboard size limit for rich text.
   * 
   * @example
   * 1024
   */
  richTextClipboardLimit?: number;
  /**
   * @remarks
   * The clipboard size limit for inbound transfer from the local PC to the cloud browser.
   * 
   * @example
   * 1
   */
  richTextClipboardReadLimit?: number;
  /**
   * @remarks
   * The clipboard size unit. Valid values:
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * @example
   * KB
   */
  richTextClipboardReadSizeUnit?: string;
  /**
   * @remarks
   * The clipboard size unit. Valid values:
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * @example
   * KB
   */
  richTextClipboardSizeUnit?: string;
  /**
   * @remarks
   * The clipboard size limit for outbound transfer from the cloud browser to the local PC.
   * 
   * @example
   * 1
   */
  richTextClipboardWriteLimit?: number;
  /**
   * @remarks
   * The clipboard size unit. Valid values:
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * @example
   * KB
   */
  richTextClipboardWriteSizeUnit?: string;
  /**
   * @remarks
   * The clipboard transfer direction. The value is case-insensitive. Valid values:
   * 
   * - `off`: Disabled in both directions.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Enabled in both directions.
   * 
   * @example
   * readwrite
   */
  textClipboard?: string;
  /**
   * @remarks
   * The clipboard size limit for inbound transfer from the local PC to the cloud browser.
   * 
   * @example
   * 1
   */
  textClipboardReadLimit?: number;
  /**
   * @remarks
   * The clipboard size unit. Valid values:
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * @example
   * KB
   */
  textClipboardReadSizeUnit?: string;
  /**
   * @remarks
   * The clipboard size limit for outbound transfer from the cloud browser to the local PC.
   * 
   * @example
   * 1
   */
  textClipboardWriteLimit?: number;
  /**
   * @remarks
   * The clipboard size unit. Valid values:
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * @example
   * KB
   */
  textClipboardWriteSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
      clipboardReadLimit: 'ClipboardReadLimit',
      clipboardScope: 'ClipboardScope',
      clipboardSizeUnit: 'ClipboardSizeUnit',
      clipboardWriteLimit: 'ClipboardWriteLimit',
      fileClipboard: 'FileClipboard',
      richTextClipboard: 'RichTextClipboard',
      richTextClipboardLimit: 'RichTextClipboardLimit',
      richTextClipboardReadLimit: 'RichTextClipboardReadLimit',
      richTextClipboardReadSizeUnit: 'RichTextClipboardReadSizeUnit',
      richTextClipboardSizeUnit: 'RichTextClipboardSizeUnit',
      richTextClipboardWriteLimit: 'RichTextClipboardWriteLimit',
      richTextClipboardWriteSizeUnit: 'RichTextClipboardWriteSizeUnit',
      textClipboard: 'TextClipboard',
      textClipboardReadLimit: 'TextClipboardReadLimit',
      textClipboardReadSizeUnit: 'TextClipboardReadSizeUnit',
      textClipboardWriteLimit: 'TextClipboardWriteLimit',
      textClipboardWriteSizeUnit: 'TextClipboardWriteSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboard: 'string',
      clipboardReadLimit: 'number',
      clipboardScope: 'string',
      clipboardSizeUnit: 'string',
      clipboardWriteLimit: 'number',
      fileClipboard: 'string',
      richTextClipboard: 'string',
      richTextClipboardLimit: 'number',
      richTextClipboardReadLimit: 'number',
      richTextClipboardReadSizeUnit: 'string',
      richTextClipboardSizeUnit: 'string',
      richTextClipboardWriteLimit: 'number',
      richTextClipboardWriteSizeUnit: 'string',
      textClipboard: 'string',
      textClipboardReadLimit: 'number',
      textClipboardReadSizeUnit: 'string',
      textClipboardWriteLimit: 'number',
      textClipboardWriteSizeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyVideoPolicy extends $dara.Model {
  /**
   * @remarks
   * The frame rate for browser sessions.
   * 
   * @example
   * 30
   */
  frameRate?: number;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyWatermarkPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable watermarks. The value is case-insensitive. Valid values:
   * - ON: Enabled.
   * - OFF: Disabled.
   * 
   * When disabled, the watermark content type list is not used.
   * 
   * @example
   * ON
   */
  watermarkSwitch?: string;
  /**
   * @remarks
   * The list of watermark content types. Valid values:
   * - EndUserId: User ID.
   * - InstanceGroupId: Delivery group ID.
   * - ClientTime: Current client time.
   * 
   * Use watermark types that are supported by the browser and client.
   */
  watermarkTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      watermarkSwitch: 'WatermarkSwitch',
      watermarkTypes: 'WatermarkTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkSwitch: 'string',
      watermarkTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.watermarkTypes)) {
      $dara.Model.validateArray(this.watermarkTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicy extends $dara.Model {
  /**
   * @remarks
   * The screen capture prevention switch.
   * 
   * - `on`: enables screen capture prevention.
   * - `off`: disables screen capture prevention.
   * 
   * @example
   * on
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The IP address whitelist rules for client access.
   */
  authorizeAccessPolicyRules?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The list of client access control configurations.
   */
  clientTypes?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyClientTypes[];
  /**
   * @remarks
   * Sets the clipboard transfer direction, content type, and size limits. `read` indicates transfer from the local PC to the cloud browser, and `write` indicates transfer from the cloud browser to the local PC.
   */
  clipboardPolicy?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyClipboardPolicy;
  /**
   * @remarks
   * The data retention policy after disconnection. Valid values:
   * 
   * - `customTime`: Retains the session for the duration specified by `DisconnectKeepSessionTime`.
   * - `persistent`: No automatic release based on disconnection duration.
   * 
   * **Note:** `persistent` is still subject to authorization and other release policies.
   * 
   * @example
   * customTime
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * The returned retention duration for disconnected sessions, in seconds. This parameter is for viewing configurations only and does not indicate that the create operation supports setting this parameter.
   * 
   * @example
   * 1800
   */
  disconnectKeepSessionTime?: number;
  /**
   * @remarks
   * The floating ball file manager switch. Valid values:
   * 
   * - `on`: Enabled.
   * - `off`: Disabled.
   * 
   * @example
   * off
   */
  fileManager?: string;
  /**
   * @remarks
   * The file transfer policy for the web client. Valid values:
   * 
   * - `off`: Transfer disabled.
   * - `upload`: Upload only.
   * - `download`: Download only.
   * - `full`: Upload and download allowed.
   * 
   * Configure this parameter in conjunction with the clipboard policy.
   * 
   * @example
   * full
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The dual-screen switch for cloud browsers.
   * 
   * @example
   * off
   */
  multiScreen?: string;
  /**
   * @remarks
   * Specifies whether to automatically disconnect sessions after a period of inactivity. The value is case-insensitive. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * When enabled, use NoOperationDisconnectTime to set the idle timeout period.
   * 
   * @example
   * on
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * The idle timeout period in seconds before a session is automatically disconnected. This feature is enabled or disabled by the NoOperationDisconnect parameter.
   * 
   * @example
   * 600
   */
  noOperationDisconnectTime?: number;
  /**
   * @remarks
   * The ID of the policy associated with the browser instance group.
   * 
   * @example
   * pg-0bf5d87epuq5****
   */
  policyId?: string;
  /**
   * @remarks
   * The policy version. Valid values:
   * - DEFAULT: Legacy policy.
   * - CENTER: Centralized policy.
   * 
   * @example
   * CENTER
   */
  policyVersion?: string;
  /**
   * @remarks
   * The video display policy for browser sessions.
   */
  videoPolicy?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyVideoPolicy;
  /**
   * @remarks
   * The watermark display configuration for browser sessions.
   */
  watermarkPolicy?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyWatermarkPolicy;
  static names(): { [key: string]: string } {
    return {
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      clientTypes: 'ClientTypes',
      clipboardPolicy: 'ClipboardPolicy',
      disconnectKeepSession: 'DisconnectKeepSession',
      disconnectKeepSessionTime: 'DisconnectKeepSessionTime',
      fileManager: 'FileManager',
      html5FileTransfer: 'Html5FileTransfer',
      multiScreen: 'MultiScreen',
      noOperationDisconnect: 'NoOperationDisconnect',
      noOperationDisconnectTime: 'NoOperationDisconnectTime',
      policyId: 'PolicyId',
      policyVersion: 'PolicyVersion',
      videoPolicy: 'VideoPolicy',
      watermarkPolicy: 'WatermarkPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyAuthorizeAccessPolicyRules },
      clientTypes: { 'type': 'array', 'itemType': GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyClientTypes },
      clipboardPolicy: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyClipboardPolicy,
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      fileManager: 'string',
      html5FileTransfer: 'string',
      multiScreen: 'string',
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      policyId: 'string',
      policyVersion: 'string',
      videoPolicy: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyVideoPolicy,
      watermarkPolicy: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicyWatermarkPolicy,
    };
  }

  validate() {
    if(Array.isArray(this.authorizeAccessPolicyRules)) {
      $dara.Model.validateArray(this.authorizeAccessPolicyRules);
    }
    if(Array.isArray(this.clientTypes)) {
      $dara.Model.validateArray(this.clientTypes);
    }
    if(this.clipboardPolicy && typeof (this.clipboardPolicy as any).validate === 'function') {
      (this.clipboardPolicy as any).validate();
    }
    if(this.videoPolicy && typeof (this.videoPolicy as any).validate === 'function') {
      (this.videoPolicy as any).validate();
    }
    if(this.watermarkPolicy && typeof (this.watermarkPolicy as any).validate === 'function') {
      (this.watermarkPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelTimers extends $dara.Model {
  /**
   * @remarks
   * The session retention period in minutes after disconnection. A value of -1 indicates that the session is not unbound due to this timeout, but is still subject to authorization and other session release policies.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The timer configuration type. A value of SESSION_TIMEOUT indicates the session retention period after disconnection.
   * 
   * @example
   * SESSION_TIMEOUT
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      timerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelUserLimit extends $dara.Model {
  /**
   * @remarks
   * The number of user quotas.
   * 
   * @example
   * 100
   */
  userQuota?: number;
  static names(): { [key: string]: string } {
    return {
      userQuota: 'UserQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModel extends $dara.Model {
  /**
   * @remarks
   * Specifies whether authorization and revocation notification emails are enabled. A value of `true` indicates that the feature is enabled, and a value of `false` indicates that the feature is disabled.
   * 
   * @example
   * true
   */
  authNotificationEnabled?: boolean;
  /**
   * @remarks
   * The statistics of authorized users for the browser instance group.
   */
  authorizedUserInfo?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelAuthorizedUserInfo;
  /**
   * @remarks
   * The business region where the browser instance group is located.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The current configuration of the browser.
   */
  browserConfig?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelBrowserConfig;
  /**
   * @remarks
   * The ID of the cloud browser instance group.
   * 
   * @example
   * big-0c7loey7fzjq****
   */
  browserInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the cloud browser instance group.
   * 
   * @example
   * Office browser
   */
  browserInstanceGroupName?: string;
  /**
   * @remarks
   * The ID of the browser instance group set to which the browser instance group belongs.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  browserInstanceGroupSetId?: string;
  /**
   * @remarks
   * The billing method. In the monthly active user (MAU) scenario, `PostPaid` is returned, which indicates pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The default access URL of the browser instance group. Use the actual URL returned by the API operation. Replace the resource ID in the example.
   * 
   * @example
   * https://wuying.aliyun.com/integration?appId=browser&appInstanceGroupId=big-0c7loey7fzjq****
   */
  defaultAccessUrl?: string;
  /**
   * @remarks
   * The package duration information. This parameter is not applicable to the MAU scenario and may return an empty object.
   */
  duration?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelDuration;
  /**
   * @remarks
   * The expiration time of the browser instance group. This parameter is not applicable to the MAU scenario and is not returned.
   * 
   * @example
   * -
   */
  expiredTime?: string;
  /**
   * @remarks
   * The creation time of the browser instance group. The time is displayed in the RFC 3339 format `yyyy-MM-ddTHH:mm:ss.SSSXXX`, which includes milliseconds and time zone offset. In the example, `+00:00` indicates the UTC time zone.
   * 
   * @example
   * 2026-09-21T07:00:39.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The homepage URL of the browser instance group.
   * 
   * @example
   * https://www.aliyun.com
   */
  homepage?: string;
  /**
   * @remarks
   * The ID of the image used by the browser instance group.
   * 
   * @example
   * imgc-070qhs8oeju4****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type used by the browser instance group.
   * 
   * @example
   * appstreaming.general.basic
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of instances configured in the MAU scenario.
   * 
   * @example
   * 100
   */
  maxAmount?: number;
  /**
   * @remarks
   * The office network and website access restriction configurations.
   */
  network?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNetwork;
  /**
   * @remarks
   * The node specifications. This parameter is not applicable to the MAU scenario.
   */
  nodeInstanceType?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNodeInstanceType;
  /**
   * @remarks
   * The list of node pool information. This parameter is not applicable to the MAU scenario and may return an empty list.
   */
  nodePool?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNodePool[];
  /**
   * @remarks
   * The operating system type of the browser instance group. Currently, Windows is used in the MAU scenario.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The policy configuration returned for the browser instance group. The policy fields are used to view existing settings and do not indicate that all corresponding creation parameters are configurable.
   */
  policy?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicy;
  /**
   * @remarks
   * The status of the browser instance group. Valid values:
   * - DEPLOYING: Publishing.
   * - PUBLISHED: Published.
   * - FAILED: Publish failed.
   * - EXPIRED: Expired.
   * - CEASED: Suspended due to overdue payment.
   * - MAINTAINING: Updating.
   * - MAINTAIN_FAILED: Update failed.
   * - DELETING: Deleting.
   * - UNAVAILABLE: Unavailable.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The sub-billing type. In the MAU scenario, mau is returned, which indicates billing by monthly active users.
   * 
   * @example
   * mau
   */
  subPayType?: string;
  /**
   * @remarks
   * Specifies whether mixed authorization of users and user groups is supported. A value of true indicates that it is supported, and false indicates that it is not supported. Evaluate this parameter based on the current authorization mode.
   * 
   * @example
   * false
   */
  supportUserGroupMixedAuth?: boolean;
  /**
   * @remarks
   * The version of the browser. Valid values:
   * - Basic: Basic Edition.
   * - Pro: Premium Edition.
   * 
   * In the MAU scenario, the value is Pro.
   * 
   * @example
   * Pro
   */
  tier?: string;
  /**
   * @remarks
   * The session timer configurations returned in the current response. This parameter is used to view the effective settings and does not indicate that the create operation supports configuring this parameter.
   */
  timers?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelTimers[];
  /**
   * @remarks
   * The current authorization mode. Valid values:
   * - Mixed: Mixed authorization of users and user groups.
   * - User: User authorization.
   * - UserGroup: User group authorization.
   * 
   * @example
   * Mixed
   */
  userGroupAuthMode?: string;
  /**
   * @remarks
   * The user quota information.
   */
  userLimit?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelUserLimit;
  static names(): { [key: string]: string } {
    return {
      authNotificationEnabled: 'AuthNotificationEnabled',
      authorizedUserInfo: 'AuthorizedUserInfo',
      bizRegionId: 'BizRegionId',
      browserConfig: 'BrowserConfig',
      browserInstanceGroupId: 'BrowserInstanceGroupId',
      browserInstanceGroupName: 'BrowserInstanceGroupName',
      browserInstanceGroupSetId: 'BrowserInstanceGroupSetId',
      chargeType: 'ChargeType',
      defaultAccessUrl: 'DefaultAccessUrl',
      duration: 'Duration',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      homepage: 'Homepage',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      maxAmount: 'MaxAmount',
      network: 'Network',
      nodeInstanceType: 'NodeInstanceType',
      nodePool: 'NodePool',
      osType: 'OsType',
      policy: 'Policy',
      status: 'Status',
      subPayType: 'SubPayType',
      supportUserGroupMixedAuth: 'SupportUserGroupMixedAuth',
      tier: 'Tier',
      timers: 'Timers',
      userGroupAuthMode: 'UserGroupAuthMode',
      userLimit: 'UserLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authNotificationEnabled: 'boolean',
      authorizedUserInfo: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelAuthorizedUserInfo,
      bizRegionId: 'string',
      browserConfig: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelBrowserConfig,
      browserInstanceGroupId: 'string',
      browserInstanceGroupName: 'string',
      browserInstanceGroupSetId: 'string',
      chargeType: 'string',
      defaultAccessUrl: 'string',
      duration: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelDuration,
      expiredTime: 'string',
      gmtCreate: 'string',
      homepage: 'string',
      imageId: 'string',
      instanceType: 'string',
      maxAmount: 'number',
      network: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNetwork,
      nodeInstanceType: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNodeInstanceType,
      nodePool: { 'type': 'array', 'itemType': GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelNodePool },
      osType: 'string',
      policy: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelPolicy,
      status: 'string',
      subPayType: 'string',
      supportUserGroupMixedAuth: 'boolean',
      tier: 'string',
      timers: { 'type': 'array', 'itemType': GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelTimers },
      userGroupAuthMode: 'string',
      userLimit: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelUserLimit,
    };
  }

  validate() {
    if(this.authorizedUserInfo && typeof (this.authorizedUserInfo as any).validate === 'function') {
      (this.authorizedUserInfo as any).validate();
    }
    if(this.browserConfig && typeof (this.browserConfig as any).validate === 'function') {
      (this.browserConfig as any).validate();
    }
    if(this.duration && typeof (this.duration as any).validate === 'function') {
      (this.duration as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.nodeInstanceType && typeof (this.nodeInstanceType as any).validate === 'function') {
      (this.nodeInstanceType as any).validate();
    }
    if(Array.isArray(this.nodePool)) {
      $dara.Model.validateArray(this.nodePool);
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    if(Array.isArray(this.timers)) {
      $dara.Model.validateArray(this.timers);
    }
    if(this.userLimit && typeof (this.userLimit as any).validate === 'function') {
      (this.userLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrowserInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The browser instance group details.
   */
  browserInstanceGroupModel?: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01A0C2ED-95F2-1A37-9FC6-4A395179****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      browserInstanceGroupModel: 'BrowserInstanceGroupModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserInstanceGroupModel: GetBrowserInstanceGroupResponseBodyBrowserInstanceGroupModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.browserInstanceGroupModel && typeof (this.browserInstanceGroupModel as any).validate === 'function') {
      (this.browserInstanceGroupModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

