// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBrowserInstanceGroupRequestBrowserConfigBookmarks extends $dara.Model {
  /**
   * @remarks
   * The folder to which the bookmark belongs.
   * 
   * @example
   * test
   */
  bookmarkFolder?: string;
  /**
   * @remarks
   * The bookmark ID. This parameter is required only for modification.
   * 
   * @example
   * bm-12345
   */
  bookmarkId?: string;
  /**
   * @remarks
   * The bookmark name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bookmarkName?: string;
  /**
   * @remarks
   * The bookmark URL.
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

export class ModifyBrowserInstanceGroupRequestBrowserConfig extends $dara.Model {
  /**
   * @remarks
   * The bookmarks.
   */
  bookmarks?: ModifyBrowserInstanceGroupRequestBrowserConfigBookmarks[];
  /**
   * @example
   * cn-hangzhou/aig_upm/xxx/temp/BrowserBookmarks/浏览器书签模版.csv
   */
  bookmarksFilePath?: string;
  /**
   * @remarks
   * The startup parameters.
   * 
   * @example
   * --incognito
   */
  browserParam?: string;
  cookiesSync?: boolean;
  /**
   * @remarks
   * The homepage.
   * 
   * @example
   * https://www.aliyun.com
   */
  homepage?: string;
  /**
   * @remarks
   * The list of bookmarks to remove.
   */
  removeBookmarks?: string[];
  static names(): { [key: string]: string } {
    return {
      bookmarks: 'Bookmarks',
      bookmarksFilePath: 'BookmarksFilePath',
      browserParam: 'BrowserParam',
      cookiesSync: 'CookiesSync',
      homepage: 'Homepage',
      removeBookmarks: 'RemoveBookmarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookmarks: { 'type': 'array', 'itemType': ModifyBrowserInstanceGroupRequestBrowserConfigBookmarks },
      bookmarksFilePath: 'string',
      browserParam: 'string',
      cookiesSync: 'boolean',
      homepage: 'string',
      removeBookmarks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bookmarks)) {
      $dara.Model.validateArray(this.bookmarks);
    }
    if(Array.isArray(this.removeBookmarks)) {
      $dara.Model.validateArray(this.removeBookmarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBrowserInstanceGroupRequestNetworkRestrictedURLs extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name configuration. This parameter is required only for modification.
   * 
   * @example
   * ru-12345
   */
  restrictedURLId?: string;
  /**
   * @remarks
   * The domain name.
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

export class ModifyBrowserInstanceGroupRequestNetwork extends $dara.Model {
  /**
   * @remarks
   * The access restriction type.
   * 
   * @example
   * ALLOW_LIST
   */
  accessRestriction?: string;
  /**
   * @remarks
   * The list of domain names to remove.
   */
  removeRestrictedURLIds?: string[];
  /**
   * @remarks
   * The restricted domain name configurations.
   */
  restrictedURLs?: ModifyBrowserInstanceGroupRequestNetworkRestrictedURLs[];
  /**
   * @example
   * cn-hangzhou/aig_upm/xxx/temp/BrowserRestrictionUrls/URL白名单模版.csv
   */
  restrictedURLsFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      accessRestriction: 'AccessRestriction',
      removeRestrictedURLIds: 'RemoveRestrictedURLIds',
      restrictedURLs: 'RestrictedURLs',
      restrictedURLsFilePath: 'RestrictedURLsFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRestriction: 'string',
      removeRestrictedURLIds: { 'type': 'array', 'itemType': 'string' },
      restrictedURLs: { 'type': 'array', 'itemType': ModifyBrowserInstanceGroupRequestNetworkRestrictedURLs },
      restrictedURLsFilePath: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.removeRestrictedURLIds)) {
      $dara.Model.validateArray(this.removeRestrictedURLIds);
    }
    if(Array.isArray(this.restrictedURLs)) {
      $dara.Model.validateArray(this.restrictedURLs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBrowserInstanceGroupRequestPolicyClipboardPolicy extends $dara.Model {
  /**
   * @remarks
   * The clipboard policy.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * The maximum length for clipboard read operations.
   * 
   * @example
   * 1000
   */
  clipboardReadLimit?: number;
  /**
   * @remarks
   * The clipboard control scope.
   * 
   * @example
   * global
   */
  clipboardScope?: string;
  /**
   * @example
   * B
   */
  clipboardSizeUnit?: string;
  /**
   * @remarks
   * The maximum length for clipboard write operations.
   * 
   * @example
   * 1000
   */
  clipboardWriteLimit?: number;
  /**
   * @remarks
   * The file clipboard policy.
   * 
   * @example
   * off
   */
  fileClipboard?: string;
  /**
   * @remarks
   * The rich text clipboard policy.
   * 
   * @example
   * off
   */
  richTextClipboard?: string;
  /**
   * @example
   * 1
   */
  richTextClipboardLimit?: number;
  /**
   * @example
   * 1
   */
  richTextClipboardReadLimit?: number;
  /**
   * @example
   * KB
   */
  richTextClipboardReadSizeUnit?: string;
  /**
   * @example
   * B
   */
  richTextClipboardSizeUnit?: string;
  /**
   * @example
   * 1
   */
  richTextClipboardWriteLimit?: number;
  /**
   * @example
   * KB
   */
  richTextClipboardWriteSizeUnit?: string;
  /**
   * @remarks
   * The text clipboard policy.
   * 
   * @example
   * off
   */
  textClipboard?: string;
  /**
   * @example
   * 1
   */
  textClipboardReadLimit?: number;
  /**
   * @example
   * KB
   */
  textClipboardReadSizeUnit?: string;
  /**
   * @example
   * 1
   */
  textClipboardWriteLimit?: number;
  /**
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

export class ModifyBrowserInstanceGroupRequestPolicyVideoPolicy extends $dara.Model {
  /**
   * @remarks
   * The frame rate.
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

export class ModifyBrowserInstanceGroupRequestPolicyWatermarkPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the watermark.
   * 
   * @example
   * off
   */
  watermarkSwitch?: string;
  /**
   * @remarks
   * The list of watermark types.
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

export class ModifyBrowserInstanceGroupRequestPolicy extends $dara.Model {
  /**
   * @remarks
   * The clipboard policy settings.
   */
  clipboardPolicy?: ModifyBrowserInstanceGroupRequestPolicyClipboardPolicy;
  /**
   * @remarks
   * The data retention policy for sessions after disconnection.
   * 
   * @example
   * customTime
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * The session retention duration after disconnection.
   * 
   * @example
   * 15
   */
  disconnectKeepSessionTime?: number;
  /**
   * @example
   * off
   */
  fileManager?: string;
  /**
   * @remarks
   * The file transfer policy for the web client.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The policy for disconnecting sessions after no operation.
   * 
   * @example
   * on
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * The idle timeout period before disconnection, in seconds.
   * 
   * @example
   * 1
   */
  noOperationDisconnectTime?: number;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-12345
   */
  policyId?: string;
  /**
   * @remarks
   * The policy version.
   * 
   * @example
   * Center
   */
  policyVersion?: string;
  /**
   * @remarks
   * The display policy.
   */
  videoPolicy?: ModifyBrowserInstanceGroupRequestPolicyVideoPolicy;
  /**
   * @remarks
   * The watermark configuration.
   */
  watermarkPolicy?: ModifyBrowserInstanceGroupRequestPolicyWatermarkPolicy;
  static names(): { [key: string]: string } {
    return {
      clipboardPolicy: 'ClipboardPolicy',
      disconnectKeepSession: 'DisconnectKeepSession',
      disconnectKeepSessionTime: 'DisconnectKeepSessionTime',
      fileManager: 'FileManager',
      html5FileTransfer: 'Html5FileTransfer',
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
      clipboardPolicy: ModifyBrowserInstanceGroupRequestPolicyClipboardPolicy,
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      fileManager: 'string',
      html5FileTransfer: 'string',
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      policyId: 'string',
      policyVersion: 'string',
      videoPolicy: ModifyBrowserInstanceGroupRequestPolicyVideoPolicy,
      watermarkPolicy: ModifyBrowserInstanceGroupRequestPolicyWatermarkPolicy,
    };
  }

  validate() {
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

export class ModifyBrowserInstanceGroupRequestStoragePolicyUserProfile extends $dara.Model {
  userProfileSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      userProfileSwitch: 'UserProfileSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyBrowserInstanceGroupRequestStoragePolicy extends $dara.Model {
  userProfile?: ModifyBrowserInstanceGroupRequestStoragePolicyUserProfile;
  static names(): { [key: string]: string } {
    return {
      userProfile: 'UserProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userProfile: ModifyBrowserInstanceGroupRequestStoragePolicyUserProfile,
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

export class ModifyBrowserInstanceGroupRequestTimers extends $dara.Model {
  /**
   * @remarks
   * The interval.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The timer type.
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

export class ModifyBrowserInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The browser configuration.
   */
  browserConfig?: ModifyBrowserInstanceGroupRequestBrowserConfig;
  /**
   * @remarks
   * The ID of the cloud browser to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * big-0bz55ixxxxx9xi9w9
   */
  browserInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the cloud browser.
   * 
   * @example
   * BrowserTest
   */
  cloudBrowserName?: string;
  /**
   * @example
   * 5
   */
  maxAmount?: number;
  /**
   * @remarks
   * The network configuration.
   */
  network?: ModifyBrowserInstanceGroupRequestNetwork;
  /**
   * @remarks
   * The access policy.
   */
  policy?: ModifyBrowserInstanceGroupRequestPolicy;
  storagePolicy?: ModifyBrowserInstanceGroupRequestStoragePolicy;
  /**
   * @remarks
   * The timers.
   */
  timers?: ModifyBrowserInstanceGroupRequestTimers[];
  static names(): { [key: string]: string } {
    return {
      browserConfig: 'BrowserConfig',
      browserInstanceGroupId: 'BrowserInstanceGroupId',
      cloudBrowserName: 'CloudBrowserName',
      maxAmount: 'MaxAmount',
      network: 'Network',
      policy: 'Policy',
      storagePolicy: 'StoragePolicy',
      timers: 'Timers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserConfig: ModifyBrowserInstanceGroupRequestBrowserConfig,
      browserInstanceGroupId: 'string',
      cloudBrowserName: 'string',
      maxAmount: 'number',
      network: ModifyBrowserInstanceGroupRequestNetwork,
      policy: ModifyBrowserInstanceGroupRequestPolicy,
      storagePolicy: ModifyBrowserInstanceGroupRequestStoragePolicy,
      timers: { 'type': 'array', 'itemType': ModifyBrowserInstanceGroupRequestTimers },
    };
  }

  validate() {
    if(this.browserConfig && typeof (this.browserConfig as any).validate === 'function') {
      (this.browserConfig as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    if(Array.isArray(this.timers)) {
      $dara.Model.validateArray(this.timers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

