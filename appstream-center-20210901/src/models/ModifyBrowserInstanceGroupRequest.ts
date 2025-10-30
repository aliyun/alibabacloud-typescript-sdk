// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBrowserInstanceGroupRequestBrowserConfigBookmarks extends $dara.Model {
  /**
   * @example
   * test
   */
  bookmarkFolder?: string;
  /**
   * @example
   * bm-12345
   */
  bookmarkId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  bookmarkName?: string;
  /**
   * @remarks
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
  bookmarks?: ModifyBrowserInstanceGroupRequestBrowserConfigBookmarks[];
  /**
   * @example
   * --incognito
   */
  browserParam?: string;
  /**
   * @example
   * https://www.aliyun.com
   */
  homepage?: string;
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
   * @example
   * ru-12345
   */
  restrictedURLId?: string;
  /**
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
   * @example
   * ALLOW_LIST
   */
  accessRestriction?: string;
  removeRestrictedURLIds?: string[];
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
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @example
   * 1000
   */
  clipboardReadLimit?: number;
  /**
   * @example
   * global
   */
  clipboardScope?: string;
  /**
   * @example
   * 1000
   */
  clipboardWriteLimit?: number;
  /**
   * @example
   * off
   */
  fileClipboard?: string;
  /**
   * @example
   * off
   */
  richTextClipboard?: string;
  /**
   * @example
   * off
   */
  textClipboard?: string;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
      clipboardReadLimit: 'ClipboardReadLimit',
      clipboardScope: 'ClipboardScope',
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
   * @example
   * off
   */
  watermarkSwitch?: string;
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
  clipboardPolicy?: ModifyBrowserInstanceGroupRequestPolicyClipboardPolicy;
  /**
   * @example
   * customTime
   */
  disconnectKeepSession?: string;
  /**
   * @example
   * 15
   */
  disconnectKeepSessionTime?: number;
  /**
   * @example
   * off
   */
  html5FileTransfer?: string;
  noOperationDisconnect?: string;
  noOperationDisconnectTime?: number;
  /**
   * @example
   * pg-12345
   */
  policyId?: string;
  /**
   * @example
   * Center
   */
  policyVersion?: string;
  videoPolicy?: ModifyBrowserInstanceGroupRequestPolicyVideoPolicy;
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
   * @example
   * 15
   */
  interval?: number;
  /**
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
  browserConfig?: ModifyBrowserInstanceGroupRequestBrowserConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * big-0bz55ixxxxx9xi9w9
   */
  browserInstanceGroupId?: string;
  /**
   * @example
   * BrowserTest
   */
  cloudBrowserName?: string;
  network?: ModifyBrowserInstanceGroupRequestNetwork;
  policy?: ModifyBrowserInstanceGroupRequestPolicy;
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

