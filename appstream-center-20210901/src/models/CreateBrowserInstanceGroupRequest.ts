// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBrowserInstanceGroupRequestBrowserConfigBookmarks extends $dara.Model {
  /**
   * @remarks
   * The folder where the bookmark is located. The length cannot exceed 64 characters after leading and trailing spaces are removed.
   * 
   * @example
   * Work portal
   */
  bookmarkFolder?: string;
  /**
   * @remarks
   * The bookmark name. This parameter is required and cannot be empty when you create a bookmark. The length cannot exceed 64 characters after leading and trailing spaces are removed.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba Cloud website
   */
  bookmarkName?: string;
  /**
   * @remarks
   * The URL of the bookmark. This parameter is required when you create a bookmark. The length cannot exceed 1024 characters after leading and trailing spaces are removed.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  bookmarkURL?: string;
  static names(): { [key: string]: string } {
    return {
      bookmarkFolder: 'BookmarkFolder',
      bookmarkName: 'BookmarkName',
      bookmarkURL: 'BookmarkURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookmarkFolder: 'string',
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

export class CreateBrowserInstanceGroupRequestBrowserConfig extends $dara.Model {
  /**
   * @remarks
   * The list of browser bookmarks.
   * **Limits:** This parameter cannot be specified together with a non-empty BookmarksFilePath parameter, and bookmark URLs cannot be duplicated.
   */
  bookmarks?: CreateBrowserInstanceGroupRequestBrowserConfigBookmarks[];
  /**
   * @remarks
   * The path of the uploaded bookmark file. This parameter cannot be specified together with a non-empty Bookmarks parameter.
   * **File format:** A CSV file without a header. Specify the following four columns in order:
   * 1. Bookmark name.
   * 2. URL.
   * 3. Folder.
   * 4. Root directory type: `bookmark_bar` indicates the bookmarks bar, and `other` indicates other bookmarks.
   * **Limits:**
   * - Fields are separated by commas. Field content cannot contain commas or line breaks, and quote escaping is not supported.
   * - The file path must belong to the upload directory specified for the current account and cannot contain `..`.
   * 
   * @example
   * cn-hangzhou/aig_upm/xxx/temp/BrowserBookmarks/BrowserBookmarkTemplate.csv
   */
  bookmarksFilePath?: string;
  /**
   * @remarks
   * The browser startup parameters. For example, --incognito indicates that an incognito window is used.
   * 
   * @example
   * --incognito
   */
  browserParam?: string;
  /**
   * @remarks
   * Specifies whether to synchronize cookies.
   * 
   * @example
   * false
   */
  cookiesSync?: boolean;
  /**
   * @remarks
   * The homepage URL opened when the browser starts. The URL must conform to the URI syntax.
   * 
   * @example
   * https://www.aliyun.com
   */
  homepage?: string;
  static names(): { [key: string]: string } {
    return {
      bookmarks: 'Bookmarks',
      bookmarksFilePath: 'BookmarksFilePath',
      browserParam: 'BrowserParam',
      cookiesSync: 'CookiesSync',
      homepage: 'Homepage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookmarks: { 'type': 'array', 'itemType': CreateBrowserInstanceGroupRequestBrowserConfigBookmarks },
      bookmarksFilePath: 'string',
      browserParam: 'string',
      cookiesSync: 'boolean',
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

export class CreateBrowserInstanceGroupRequestNetworkRestrictedURLs extends $dara.Model {
  /**
   * @remarks
   * The URL of the website that is allowed for access.
   * 
   * @example
   * aliyun.com
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateBrowserInstanceGroupRequestNetwork extends $dara.Model {
  /**
   * @remarks
   * The website access restriction mode.
   * 
   * - ALLOW_ALL: Allows access to all domain names.
   * - ALLOW_LIST: Allows access only to websites in the whitelist.
   * 
   * @example
   * ALLOW_ALL
   */
  accessRestriction?: string;
  /**
   * @remarks
   * The identifier of the created office network. The office network must belong to the current account and reside in the target region specified by BizRegionId. You can view the office network ID on the Network & Storage > Office Networks page in the Elastic Desktop Service Enterprise Edition console, or call the DescribeOfficeSites operation of Elastic Desktop Service Enterprise Edition to query the ID.
   * 
   * @example
   * cn-hangzhou+dir-643067****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The list of websites that are allowed for access. This parameter is used in ALLOW_LIST mode.
   * 
   * **Limits:**
   * 
   * - You can specify up to 20 URLs directly. To specify more than 20 URLs, use RestrictedURLsFilePath to import them from a file.
   * - This parameter cannot be specified together with RestrictedURLsFilePath.
   * - The URLs in the list cannot be duplicated.
   */
  restrictedURLs?: CreateBrowserInstanceGroupRequestNetworkRestrictedURLs[];
  /**
   * @remarks
   * The path of the uploaded website whitelist file. This parameter is used in ALLOW_LIST mode.
   * 
   * If you need to specify more than 20 URLs, import them from a file. By default, you can configure up to 1,000 URLs.
   * 
   * This parameter cannot be specified together with RestrictedURLs.
   * 
   * @example
   * cn-hangzhou/aig_upm/xxx/temp/BrowserRestrictionUrls/URL_whitelist_template.csv
   */
  restrictedURLsFilePath?: string;
  /**
   * @remarks
   * The list of vSwitch identifiers.
   * 
   * **Usage condition:** This parameter is required only when you use a custom office network. Do not specify this parameter for other types of office networks.
   * 
   * Select vSwitches that match the target business region and the custom office network.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accessRestriction: 'AccessRestriction',
      officeSiteId: 'OfficeSiteId',
      restrictedURLs: 'RestrictedURLs',
      restrictedURLsFilePath: 'RestrictedURLsFilePath',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRestriction: 'string',
      officeSiteId: 'string',
      restrictedURLs: { 'type': 'array', 'itemType': CreateBrowserInstanceGroupRequestNetworkRestrictedURLs },
      restrictedURLsFilePath: 'string',
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

export class CreateBrowserInstanceGroupRequestNodePool extends $dara.Model {
  /**
   * @remarks
   * The number of nodes.
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The identity of the node specifications.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The node scaling policy.
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeAmount: 'NodeAmount',
      nodeInstanceType: 'NodeInstanceType',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeAmount: 'number',
      nodeInstanceType: 'string',
      strategyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBrowserInstanceGroupRequestPolicyAuthorizeAccessPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The source CIDR block of the client that is allowed to access the cloud browser. Use the CIDR format.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the client access IP address whitelist rule.
   * 
   * @example
   * Office network access
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBrowserInstanceGroupRequestPolicyClientTypes extends $dara.Model {
  /**
   * @remarks
   * The type of the client for which you want to configure an access policy.
   * 
   * - windows: Windows client.
   * - macos: macOS client.
   * - html5: Web client.
   * - android: Android client.
   * - ios: iOS client.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * The access policy switch for the client type.
   * 
   * - on: Allows access from this type of client.
   * - off: Denies access from this type of client.
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

export class CreateBrowserInstanceGroupRequestPolicyClipboardPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies the clipboard transfer direction. The value is not case-sensitive.
   * 
   * - `off`: Prohibits bidirectional transfer.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Allows bidirectional copy and paste.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * Specifies the clipboard size limit for inbound transfer (from the local PC to the cloud browser).
   * 
   * **Value range:** 1 to 102400. The unit is specified by ClipboardSizeUnit.
   * 
   * This value range does not change with unit conversion.
   * 
   * @example
   * 1024
   */
  clipboardReadLimit?: number;
  /**
   * @remarks
   * Specifies the clipboard control granularity.
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
   * Specifies the clipboard size unit.
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
   * Specifies the clipboard size limit for outbound transfer (from the cloud browser to the local PC).
   * 
   * **Value range:** 1 to 102400. The unit is specified by ClipboardSizeUnit.
   * 
   * This value range does not change with unit conversion.
   * 
   * @example
   * 1024
   */
  clipboardWriteLimit?: number;
  /**
   * @remarks
   * Specifies the clipboard transfer direction. The value is not case-sensitive.
   * 
   * - `off`: Prohibits bidirectional transfer.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Allows bidirectional copy and paste.
   * 
   * @example
   * off
   */
  fileClipboard?: string;
  /**
   * @remarks
   * Specifies the clipboard transfer direction. The value is not case-sensitive.
   * 
   * - `off`: Prohibits bidirectional transfer.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Allows bidirectional copy and paste.
   * 
   * @example
   * off
   */
  richTextClipboard?: string;
  /**
   * @remarks
   * Specifies the clipboard size limit for rich text.
   * 
   * **Value range:** 1 to 204800. The unit is specified by RichTextClipboardSizeUnit.
   * 
   * This value range does not change with unit conversion.
   * 
   * @example
   * 1024
   */
  richTextClipboardLimit?: number;
  /**
   * @remarks
   * Specifies the clipboard size limit for inbound transfer (from the local PC to the cloud browser).
   * 
   * **Value range:** 1 to 204800. The unit is specified by RichTextClipboardReadSizeUnit.
   * 
   * This value range does not change with unit conversion.
   * 
   * @example
   * 1
   */
  richTextClipboardReadLimit?: number;
  /**
   * @remarks
   * Specifies the clipboard size unit.
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * **Default value:** `KB`.
   * 
   * @example
   * KB
   */
  richTextClipboardReadSizeUnit?: string;
  /**
   * @remarks
   * Specifies the clipboard size unit.
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
   * Specifies the clipboard size limit for outbound transfer (from the cloud browser to the local PC).
   * 
   * **Value range:** 1 to 204800. The unit is specified by RichTextClipboardWriteSizeUnit.
   * 
   * This value range does not change with unit conversion.
   * 
   * @example
   * 1
   */
  richTextClipboardWriteLimit?: number;
  /**
   * @remarks
   * Specifies the clipboard size unit.
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * **Default value:** `KB`.
   * 
   * @example
   * KB
   */
  richTextClipboardWriteSizeUnit?: string;
  /**
   * @remarks
   * Specifies the clipboard transfer direction. The value is not case-sensitive.
   * 
   * - `off`: Prohibits bidirectional transfer.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Allows bidirectional copy and paste.
   * 
   * @example
   * readwrite
   */
  textClipboard?: string;
  /**
   * @remarks
   * Specifies the clipboard size limit for inbound transfer (from the local PC to the cloud browser).
   * 
   * **Value range:** 1 to 102400. The unit is specified by TextClipboardReadSizeUnit.
   * 
   * This value range does not change with unit conversion.
   * 
   * @example
   * 1
   */
  textClipboardReadLimit?: number;
  /**
   * @remarks
   * Specifies the clipboard size unit.
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * **Default value:** `KB`.
   * 
   * @example
   * KB
   */
  textClipboardReadSizeUnit?: string;
  /**
   * @remarks
   * Specifies the clipboard size limit for outbound transfer (from the cloud browser to the local PC).
   * 
   * **Value range:** 1 to 102400. The unit is specified by TextClipboardWriteSizeUnit.
   * 
   * This value range does not change with unit conversion.
   * 
   * @example
   * 1
   */
  textClipboardWriteLimit?: number;
  /**
   * @remarks
   * Specifies the clipboard size unit.
   * 
   * - `B`: Bytes.
   * - `KB`: 1024 bytes.
   * 
   * **Default value:** `KB`.
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

export class CreateBrowserInstanceGroupRequestPolicyVideoPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies the frame rate for the browser session.
   * 
   * @example
   * 60
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

export class CreateBrowserInstanceGroupRequestPolicyWatermarkPolicy extends $dara.Model {
  /**
   * @remarks
   * The watermark switch. The value is case-insensitive.
   * - `ON`: Enables the watermark.
   * - `OFF`: Disables the watermark.
   * The watermark content type list is not used when the watermark is disabled.
   * 
   * @example
   * ON
   */
  watermarkSwitch?: string;
  /**
   * @remarks
   * The list of watermark content types.
   * - `EndUserId`: The user identifier.
   * - `InstanceGroupId`: The delivery group identifier.
   * - `ClientTime`: The current time of the client.
   * Use the watermark types supported by the browser and the client.
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

export class CreateBrowserInstanceGroupRequestPolicy extends $dara.Model {
  /**
   * @remarks
   * The screen capture prevention switch.
   * 
   * - on: Enables screen capture prevention.
   * - off: Disables screen capture prevention.
   * 
   * @example
   * on
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client access IP address whitelist, which is used to restrict the source IP addresses of clients that can access the cloud browser.
   */
  authorizeAccessPolicyRules?: CreateBrowserInstanceGroupRequestPolicyAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The client access control list.
   */
  clientTypes?: CreateBrowserInstanceGroupRequestPolicyClientTypes[];
  /**
   * @remarks
   * Specifies the clipboard transfer direction, content types, and size limits. read indicates transfer from the local PC to the cloud browser, and write indicates transfer from the cloud browser to the local PC.
   */
  clipboardPolicy?: CreateBrowserInstanceGroupRequestPolicyClipboardPolicy;
  /**
   * @remarks
   * Specifies the data retention policy for sessions after disconnection.
   * 
   * - `customTime`: Retains the session according to the data retention policy. Custom duration through `DisconnectKeepSessionTime` is not supported.
   * - `persistent`: The session is not subject to automatic release based on disconnection duration.
   * 
   * **Note:** `persistent` is still subject to authorization and other release policies.
   * 
   * @example
   * customTime
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
   */
  disconnectKeepSessionTime?: number;
  /**
   * @remarks
   * Specifies whether to enable the file manager floating button.
   * 
   * - `on`: Enabled.
   * - `off`: Disabled.
   * 
   * **Default value:** `off`.
   * 
   * @example
   * off
   */
  fileManager?: string;
  /**
   * @remarks
   * Specifies the file transfer policy for the web client.
   * 
   * - `off`: Prohibits file transfer.
   * - `upload`: Allows upload only.
   * - `download`: Allows download only.
   * - `full`: Allows both upload and download.
   * 
   * Configure this parameter in conjunction with the clipboard policy.
   * 
   * @example
   * full
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * Specifies whether to enable the dual-screen mode for the cloud browser.
   * 
   * @example
   * off
   */
  multiScreen?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic disconnection on inactivity. The value is not case-sensitive.
   * 
   * - `on`: Enabled.
   * - `off`: Disabled.
   * 
   * When enabled, use `NoOperationDisconnectTime` to set the idle timeout.
   * 
   * @example
   * on
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * Specifies the idle timeout in seconds before automatic disconnection is triggered.
   * 
   * **Prerequisite:** When `NoOperationDisconnect` is enabled, you must specify a value greater than 0.
   * 
   * @example
   * 300
   */
  noOperationDisconnectTime?: number;
  /**
   * @remarks
   * Specifies the policy version. The value is not case-sensitive.
   * 
   * - `DEFAULT`: Legacy policy.
   * - `CENTER`: Centralized policy.
   * 
   * **Default value:** `DEFAULT`. The effective policy version is subject to the policy configuration available for the account.
   * 
   * @example
   * CENTER
   */
  policyVersion?: string;
  /**
   * @remarks
   * Specifies the video display policy for the browser session.
   */
  videoPolicy?: CreateBrowserInstanceGroupRequestPolicyVideoPolicy;
  /**
   * @remarks
   * The watermark display configuration for browser sessions.
   */
  watermarkPolicy?: CreateBrowserInstanceGroupRequestPolicyWatermarkPolicy;
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
      policyVersion: 'PolicyVersion',
      videoPolicy: 'VideoPolicy',
      watermarkPolicy: 'WatermarkPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': CreateBrowserInstanceGroupRequestPolicyAuthorizeAccessPolicyRules },
      clientTypes: { 'type': 'array', 'itemType': CreateBrowserInstanceGroupRequestPolicyClientTypes },
      clipboardPolicy: CreateBrowserInstanceGroupRequestPolicyClipboardPolicy,
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      fileManager: 'string',
      html5FileTransfer: 'string',
      multiScreen: 'string',
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      policyVersion: 'string',
      videoPolicy: CreateBrowserInstanceGroupRequestPolicyVideoPolicy,
      watermarkPolicy: CreateBrowserInstanceGroupRequestPolicyWatermarkPolicy,
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

export class CreateBrowserInstanceGroupRequestSecurityPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip the user authorization check when connecting to the application.
   * - `true`: Skips the check.
   * - `false`: Performs the check.
   * If SecurityPolicy is configured but this field is omitted, the user authorization check is performed.
   * **Note:** This field cannot be used to skip OpenAPI authentication and RAM permission verification.
   * 
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipUserAuthCheck: 'SkipUserAuthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipUserAuthCheck: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBrowserInstanceGroupRequestStoragePolicyUserProfile extends $dara.Model {
  /**
   * @remarks
   * The size of the user data roaming disk, in GB.
   * 
   * @example
   * 30
   */
  userProfileSize?: number;
  /**
   * @remarks
   * Specifies whether to enable user data roaming.
   * - `true`: Enables user data roaming.
   * - `false`: Disables user data roaming.
   * In Windows scenarios, if this parameter is explicitly specified, the specified value is used. If this parameter is omitted, the user roaming configuration of the current account is used.
   * 
   * @example
   * true
   */
  userProfileSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      userProfileSize: 'UserProfileSize',
      userProfileSwitch: 'UserProfileSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userProfileSize: 'number',
      userProfileSwitch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBrowserInstanceGroupRequestStoragePolicy extends $dara.Model {
  /**
   * @remarks
   * The user data roaming configuration, which is used to retain user configuration data.
   */
  userProfile?: CreateBrowserInstanceGroupRequestStoragePolicyUserProfile;
  static names(): { [key: string]: string } {
    return {
      userProfile: 'UserProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userProfile: CreateBrowserInstanceGroupRequestStoragePolicyUserProfile,
    };
  }

  validate() {
    if(this.userProfile && typeof (this.userProfile as any).validate === 'function') {
      (this.userProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBrowserInstanceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
   */
  key?: string;
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
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

export class CreateBrowserInstanceGroupRequestTimers extends $dara.Model {
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
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

export class CreateBrowserInstanceGroupRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The account type of the authorized user.
   * - `simple`: Convenience account.
   * - `ad`: AD domain account.
   * The account type must match the account types of the user and the office network.
   * 
   * @example
   * simple
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBrowserInstanceGroupRequestUsers extends $dara.Model {
  /**
   * @remarks
   * The identity of the authorized user for authorization.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBrowserInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The package identifier.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  appPackageType?: string;
  /**
   * @remarks
   * Specifies whether to send notification emails for authorization and deauthorization.
   * - `true`: Sends notification emails.
   * - `false`: Does not send notification emails.
   * 
   * @example
   * true
   */
  authNotificationEnabled?: boolean;
  /**
   * @remarks
   * The automatic payment parameter.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The auto-renewal parameter.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The identifier of the business region. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The browser configuration.
   */
  browserConfig?: CreateBrowserInstanceGroupRequestBrowserConfig;
  /**
   * @remarks
   * The resource billing method.
   * **For MAU scenarios:** Set this parameter to `AppInstance`, which indicates billing by instance resources.
   * 
   * @example
   * AppInstance
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * **For MAU scenarios:** Set this parameter to PostPaid, which indicates pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The name of the cloud browser group. This parameter cannot be empty. It is used to distinguish different browser groups in business management scenarios.
   * 
   * This parameter is required.
   * 
   * @example
   * Business office browser
   */
  cloudBrowserName?: string;
  /**
   * @remarks
   * The image ID used by the cloud browser. The image must be compatible with the operating system.
   * If this parameter is omitted, the default image available for the account is used. If no default image is available, the creation may fail.
   * **Usage conditions:** When CookiesSync is enabled, explicitly specify an image that supports cookie synchronization.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type identifier. Select an instance type that matches the target region, operating system, and inventory conditions.
   * If this parameter is omitted, the default instance type is used.
   * 
   * @example
   * appstreaming.general.basic
   */
  instanceType?: string;
  /**
   * @remarks
   * The capacity configuration in MAU billing scenarios.
   * 
   * @example
   * 5
   */
  maxAmount?: number;
  /**
   * @remarks
   * The configurations for the office network and website access restrictions. The selected office network must belong to the current account and reside in the region specified by BizRegionId.
   */
  network?: CreateBrowserInstanceGroupRequestNetwork;
  /**
   * @remarks
   * The node pool configuration.
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  nodePool?: CreateBrowserInstanceGroupRequestNodePool;
  /**
   * @remarks
   * The operating system type. This parameter is required.
   * Only `Windows` is supported. Other operating systems are not supported.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The number of billing cycles for the purchase.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  period?: number;
  /**
   * @remarks
   * The unit of the billing cycle for the purchase.
   * 
   * You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  periodUnit?: string;
  /**
   * @remarks
   * Configures policies for the clipboard, video, watermark, session, and client access.
   */
  policy?: CreateBrowserInstanceGroupRequestPolicy;
  /**
   * @remarks
   * The promotion identifier, which is used to specify the promotional offer applied to the order.
   * 
   * Applicability and specific discounts are subject to the promotion rules. You do not need to specify this parameter if no promotional offer is applied.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The connection security policy of the browser group.
   */
  securityPolicy?: CreateBrowserInstanceGroupRequestSecurityPolicy;
  /**
   * @remarks
   * The user data storage configuration of the browser group.
   */
  storagePolicy?: CreateBrowserInstanceGroupRequestStoragePolicy;
  /**
   * @remarks
   * The billing sub-type.
   * 
   * **You must explicitly set this parameter to mau, which indicates billing by monthly active users (MAUs).** Omitting this parameter does not enable MAU billing.
   * 
   * @example
   * mau
   */
  subPayType?: string;
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
   */
  tag?: CreateBrowserInstanceGroupRequestTag[];
  /**
   * @remarks
   * This parameter is not supported and does not need to be specified.
   * 
   * @example
   * -
   */
  timers?: CreateBrowserInstanceGroupRequestTimers[];
  /**
   * @remarks
   * The list of authorized user group IDs. You can specify up to 10 IDs. The user groups must belong to the current account and match the account type of the office network.
   * **Limits:** This parameter cannot be specified together with a non-empty Users parameter.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The authorized user account information. The information must match the user and office network types.
   */
  userInfo?: CreateBrowserInstanceGroupRequestUserInfo;
  /**
   * @remarks
   * The list of authorized users. You can specify up to 200 users. The users must be created in advance and match the account type.
   * 
   * **Limit:** This parameter cannot be specified together with a non-empty UserGroupIds parameter.
   */
  users?: CreateBrowserInstanceGroupRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      appPackageType: 'AppPackageType',
      authNotificationEnabled: 'AuthNotificationEnabled',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      browserConfig: 'BrowserConfig',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      cloudBrowserName: 'CloudBrowserName',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      maxAmount: 'MaxAmount',
      network: 'Network',
      nodePool: 'NodePool',
      osType: 'OsType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policy: 'Policy',
      promotionId: 'PromotionId',
      securityPolicy: 'SecurityPolicy',
      storagePolicy: 'StoragePolicy',
      subPayType: 'SubPayType',
      tag: 'Tag',
      timers: 'Timers',
      userGroupIds: 'UserGroupIds',
      userInfo: 'UserInfo',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPackageType: 'string',
      authNotificationEnabled: 'boolean',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      browserConfig: CreateBrowserInstanceGroupRequestBrowserConfig,
      chargeResourceMode: 'string',
      chargeType: 'string',
      cloudBrowserName: 'string',
      imageId: 'string',
      instanceType: 'string',
      maxAmount: 'number',
      network: CreateBrowserInstanceGroupRequestNetwork,
      nodePool: CreateBrowserInstanceGroupRequestNodePool,
      osType: 'string',
      period: 'number',
      periodUnit: 'string',
      policy: CreateBrowserInstanceGroupRequestPolicy,
      promotionId: 'string',
      securityPolicy: CreateBrowserInstanceGroupRequestSecurityPolicy,
      storagePolicy: CreateBrowserInstanceGroupRequestStoragePolicy,
      subPayType: 'string',
      tag: { 'type': 'array', 'itemType': CreateBrowserInstanceGroupRequestTag },
      timers: { 'type': 'array', 'itemType': CreateBrowserInstanceGroupRequestTimers },
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userInfo: CreateBrowserInstanceGroupRequestUserInfo,
      users: { 'type': 'array', 'itemType': CreateBrowserInstanceGroupRequestUsers },
    };
  }

  validate() {
    if(this.browserConfig && typeof (this.browserConfig as any).validate === 'function') {
      (this.browserConfig as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.nodePool && typeof (this.nodePool as any).validate === 'function') {
      (this.nodePool as any).validate();
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    if(this.securityPolicy && typeof (this.securityPolicy as any).validate === 'function') {
      (this.securityPolicy as any).validate();
    }
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.timers)) {
      $dara.Model.validateArray(this.timers);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

