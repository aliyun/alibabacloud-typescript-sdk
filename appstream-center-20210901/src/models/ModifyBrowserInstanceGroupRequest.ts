// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBrowserInstanceGroupRequestBrowserConfigBookmarks extends $dara.Model {
  /**
   * @remarks
   * The folder where the bookmark is located.
   * 
   * @example
   * test
   */
  bookmarkFolder?: string;
  /**
   * @remarks
   * The ID of the bookmark. This parameter needs to be specified only to modify the bookmark.
   * 
   * @example
   * bm-12345
   */
  bookmarkId?: string;
  /**
   * @remarks
   * The name of the bookmark.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bookmarkName?: string;
  /**
   * @remarks
   * The URL of the bookmark.
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
   * The bookmark.
   */
  bookmarks?: ModifyBrowserInstanceGroupRequestBrowserConfigBookmarks[];
  /**
   * @remarks
   * The startup parameter.
   * 
   * @example
   * --incognito
   */
  browserParam?: string;
  /**
   * @remarks
   * The home page.
   * 
   * @example
   * https://www.aliyun.com
   */
  homepage?: string;
  /**
   * @remarks
   * The removed bookmarks.
   */
  removeBookmarks?: string[];
  static names(): { [key: string]: string } {
    return {
      bookmarks: 'Bookmarks',
      browserParam: 'BrowserParam',
      homepage: 'Homepage',
      removeBookmarks: 'RemoveBookmarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookmarks: { 'type': 'array', 'itemType': ModifyBrowserInstanceGroupRequestBrowserConfigBookmarks },
      browserParam: 'string',
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
   * The ID of the domain name. This parameter is required only when you want to modify the domain restriction configuration.
   * 
   * @example
   * ru-12345
   */
  restrictedURLId?: string;
  /**
   * @remarks
   * The restricted domain name.
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
   * The type of the access control list.
   * 
   * Valid value:
   * 
   * *   ALLOW_LIST: The whitelist.
   * 
   * @example
   * ALLOW_LIST
   */
  accessRestriction?: string;
  /**
   * @remarks
   * The domain names to be removed.
   */
  removeRestrictedURLIds?: string[];
  /**
   * @remarks
   * The domain restriction configurations.
   */
  restrictedURLs?: ModifyBrowserInstanceGroupRequestNetworkRestrictedURLs[];
  static names(): { [key: string]: string } {
    return {
      accessRestriction: 'AccessRestriction',
      removeRestrictedURLIds: 'RemoveRestrictedURLIds',
      restrictedURLs: 'RestrictedURLs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRestriction: 'string',
      removeRestrictedURLIds: { 'type': 'array', 'itemType': 'string' },
      restrictedURLs: { 'type': 'array', 'itemType': ModifyBrowserInstanceGroupRequestNetworkRestrictedURLs },
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
   * Valid values:
   * 
   * *   read: Allows copying from the local device to the cloud browser.
   * *   readwrite: Allows copying in both directions.
   * *   write: Allows copying from the cloud browser to the local device.
   * *   off: Blocks copying in both directions.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * The maximum number of characters allowed when copying from the clipboard.
   * 
   * @example
   * 1000
   */
  clipboardReadLimit?: number;
  /**
   * @remarks
   * The clipboard control scope.
   * 
   * Valid values:
   * 
   * *   grained: fine-grained control
   * *   global: global control
   * 
   * @example
   * global
   */
  clipboardScope?: string;
  clipboardSizeUnit?: string;
  /**
   * @remarks
   * The maximum number of characters allowed when copying to the clipboard.
   * 
   * @example
   * 1000
   */
  clipboardWriteLimit?: number;
  /**
   * @remarks
   * The file clipboard policy.
   * 
   * Valid values:
   * 
   * *   read: Allows copying from the local device to the cloud browser.
   * *   readwrite: Allows copying in both directions.
   * *   write: Allows copying from the cloud browser to the local device.
   * *   off: Blocks copying in both directions.
   * 
   * @example
   * off
   */
  fileClipboard?: string;
  /**
   * @remarks
   * The rich text clipboard policy.
   * 
   * Valid values:
   * 
   * *   read: Allows copying from the local device to the cloud browser.
   * *   readwrite: Allows copying in both directions.
   * *   write: Allows copying from the cloud browser to the local device.
   * *   off: Blocks copying in both directions.
   * 
   * @example
   * off
   */
  richTextClipboard?: string;
  /**
   * @remarks
   * The text clipboard policy.
   * 
   * Valid values:
   * 
   * *   read: Allows copying from the local device to the cloud browser.
   * *   readwrite: Allows copying in both directions.
   * *   write: Allows copying from the cloud browser to the local device.
   * *   off: Blocks copying in both directions.
   * 
   * @example
   * off
   */
  textClipboard?: string;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
      clipboardReadLimit: 'ClipboardReadLimit',
      clipboardScope: 'ClipboardScope',
      clipboardSizeUnit: 'ClipboardSizeUnit',
      clipboardWriteLimit: 'ClipboardWriteLimit',
      fileClipboard: 'FileClipboard',
      richTextClipboard: 'RichTextClipboard',
      textClipboard: 'TextClipboard',
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
      textClipboard: 'string',
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
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  watermarkSwitch?: string;
  /**
   * @remarks
   * The watermark types.
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
   * The settings related to clipboard control.
   */
  clipboardPolicy?: ModifyBrowserInstanceGroupRequestPolicyClipboardPolicy;
  /**
   * @remarks
   * Defines what happens to a session when a user disconnects.
   * 
   * Valid values:
   * 
   * *   customTime: The session will be terminated after a custom-defined timeout.
   * *   persistent: The session will never be automatically terminated..
   * 
   * @example
   * customTime
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * The session persistence duration.
   * 
   * @example
   * 15
   */
  disconnectKeepSessionTime?: number;
  /**
   * @remarks
   * The file transfer policy on the web client.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  noOperationDisconnect?: string;
  noOperationDisconnectTime?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-12345
   */
  policyId?: string;
  /**
   * @remarks
   * The policy version.
   * 
   * Valid value:
   * 
   * *   Center: center policy
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
   * The timer type:
   * 
   * Valid value:
   * 
   * *   SESSION_TIMEOUT: Defines the timeout period before a disconnected session is terminated.
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
   * The browser settings.
   */
  browserConfig?: ModifyBrowserInstanceGroupRequestBrowserConfig;
  /**
   * @remarks
   * The ID of the cloud browser to be modified.
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
   * @remarks
   * The network configurations.
   */
  network?: ModifyBrowserInstanceGroupRequestNetwork;
  /**
   * @remarks
   * The access policy.
   */
  policy?: ModifyBrowserInstanceGroupRequestPolicy;
  /**
   * @remarks
   * The timer.
   */
  timers?: ModifyBrowserInstanceGroupRequestTimers[];
  static names(): { [key: string]: string } {
    return {
      browserConfig: 'BrowserConfig',
      browserInstanceGroupId: 'BrowserInstanceGroupId',
      cloudBrowserName: 'CloudBrowserName',
      network: 'Network',
      policy: 'Policy',
      timers: 'Timers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserConfig: ModifyBrowserInstanceGroupRequestBrowserConfig,
      browserInstanceGroupId: 'string',
      cloudBrowserName: 'string',
      network: ModifyBrowserInstanceGroupRequestNetwork,
      policy: ModifyBrowserInstanceGroupRequestPolicy,
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
    if(Array.isArray(this.timers)) {
      $dara.Model.validateArray(this.timers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

