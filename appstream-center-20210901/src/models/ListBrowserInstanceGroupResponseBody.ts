// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsAuthorizedUserInfo extends $dara.Model {
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsBrowserConfig extends $dara.Model {
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
   * The cookie synchronization configuration. A value of `true` indicates that synchronization is enabled. A value of `false` indicates that synchronization is disabled.
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
      browserParam: 'BrowserParam',
      cookiesSync: 'CookiesSync',
      homepage: 'Homepage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserParam: 'string',
      cookiesSync: 'string',
      homepage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsDuration extends $dara.Model {
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsNetwork extends $dara.Model {
  /**
   * @remarks
   * The website access restriction mode. Valid values:
   * 
   * - `ALLOW_ALL`: Allows all domain names.
   * - `ALLOW_LIST`: Allows only websites in the whitelist.
   * 
   * The returned value reflects the existing configuration of the browser instance group.
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
   * The list of vSwitch IDs used by the browser instance group. This parameter is available for scenarios where a custom network is configured.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accessRestriction: 'AccessRestriction',
      officeSiteId: 'OfficeSiteId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRestriction: 'string',
      officeSiteId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyAuthorizeAccessPolicyRules extends $dara.Model {
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
   * The action of the client access rule. Valid values:
   * 
   * - `allow`: Allows access.
   * - `deny`: Denies access.
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyClientTypes extends $dara.Model {
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyClipboardPolicy extends $dara.Model {
  /**
   * @remarks
   * The clipboard transfer direction. The value is not case-sensitive. Valid values:
   * 
   * - `off`: Prohibits transfer in both directions.
   * - `read`: Allows copy and paste from the local PC to the cloud browser.
   * - `write`: Allows copy and paste from the cloud browser to the local PC.
   * - `readwrite`: Allows transfer in both directions.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboard: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyVideoPolicy extends $dara.Model {
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyWatermarkPolicy extends $dara.Model {
  /**
   * @remarks
   * The watermark switch. The value is case-insensitive. Valid values:
   * 
   * - `ON`: Enables the watermark.
   * - `OFF`: Disables the watermark.
   * 
   * If the watermark is disabled, the watermark content type list is not used.
   * 
   * @example
   * ON
   */
  watermarkSwitch?: string;
  /**
   * @remarks
   * The list of watermark content types. Valid values:
   * 
   * - `EndUserId`: The user identifier.
   * - `InstanceGroupId`: The delivery group identifier.
   * - `ClientTime`: The current time of the client.
   * 
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicy extends $dara.Model {
  /**
   * @remarks
   * The screen capture prevention switch. Valid values:
   * 
   * - `on`: Enables screen capture prevention.
   * - `off`: Disables screen capture prevention.
   * 
   * @example
   * on
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The IP address whitelist rules for client access.
   */
  authorizeAccessPolicyRules?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The list of client access control configurations.
   */
  clientTypes?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyClientTypes[];
  /**
   * @remarks
   * Sets the clipboard transfer direction, content type, and size limit. `read` indicates transfer from the local PC to the cloud browser, and `write` indicates transfer from the cloud browser to the local PC.
   */
  clipboardPolicy?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyClipboardPolicy;
  /**
   * @remarks
   * The dual-screen switch for the cloud browser.
   * 
   * @example
   * off
   */
  multiScreen?: string;
  /**
   * @remarks
   * The video display policy for browser sessions.
   */
  videoPolicy?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyVideoPolicy;
  /**
   * @remarks
   * The watermark display configuration for browser sessions.
   */
  watermarkPolicy?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyWatermarkPolicy;
  static names(): { [key: string]: string } {
    return {
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      clientTypes: 'ClientTypes',
      clipboardPolicy: 'ClipboardPolicy',
      multiScreen: 'MultiScreen',
      videoPolicy: 'VideoPolicy',
      watermarkPolicy: 'WatermarkPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyAuthorizeAccessPolicyRules },
      clientTypes: { 'type': 'array', 'itemType': ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyClientTypes },
      clipboardPolicy: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyClipboardPolicy,
      multiScreen: 'string',
      videoPolicy: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyVideoPolicy,
      watermarkPolicy: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyWatermarkPolicy,
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * office
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsTimers extends $dara.Model {
  /**
   * @remarks
   * The session retention duration after disconnection, in minutes. A value of `-1` indicates that the session is not unbound due to the timeout of this duration, but is still affected by authorization and other session release policies.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The timer configuration type. A value of `SESSION_TIMEOUT` indicates the session retention duration after disconnection.
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsUserLimit extends $dara.Model {
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModels extends $dara.Model {
  /**
   * @remarks
   * Specifies whether notification emails for authorization and revocation are enabled. A value of `true` indicates that the feature is enabled. A value of `false` indicates that the feature is disabled.
   * 
   * @example
   * true
   */
  authNotificationEnabled?: boolean;
  /**
   * @remarks
   * The statistics of authorized users for the browser instance group.
   */
  authorizedUserInfo?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsAuthorizedUserInfo;
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
  browserConfig?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsBrowserConfig;
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
   * The ID of the browser instance group set to which the group belongs.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  browserInstanceGroupSetId?: string;
  /**
   * @remarks
   * The billing method. In the MAU scenario, `PostPaid` is returned, which indicates pay-as-you-go.
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
  duration?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsDuration;
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
   * The creation time of the browser instance group. The time follows the RFC 3339 standard in the `yyyy-MM-dd\\"T\\"HH:mm:ss.SSSXXX` format, which includes milliseconds and time zone offset. The actual POP response uses the UTC offset `+00:00`.
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
   * The office network and website access restriction configurations.
   */
  network?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsNetwork;
  /**
   * @remarks
   * The operating system type of the browser instance group. The current MAU product scenario uses Windows.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The policy configuration returned for the browser instance group. The policy fields are used to view existing settings and do not indicate that all corresponding creation parameters are configurable.
   */
  policy?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicy;
  /**
   * @remarks
   * The status of the browser group. Valid values:
   * 
   * - `DEPLOYING`: Deploying.
   * - `PUBLISHED`: Published.
   * - `FAILED`: Failed.
   * - `EXPIRED`: Expired.
   * - `CEASED`: Suspended due to overdue payment.
   * - `MAINTAINING`: Updating.
   * - `MAINTAIN_FAILED`: Update failed.
   * - `DELETING`: Deleting.
   * - `UNAVAILABLE`: Unavailable.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The sub-billing method. In the MAU scenario, `mau` is returned, which indicates billing by monthly active users.
   * 
   * @example
   * mau
   */
  subPayType?: string;
  /**
   * @remarks
   * Indicates whether mixed authorization of users and user groups is supported. A value of `true` indicates that it is supported, and a value of `false` indicates that it is not supported. Evaluate this parameter based on the current authorization mode.
   * 
   * @example
   * false
   */
  supportUserGroupMixedAuth?: boolean;
  /**
   * @remarks
   * The list of resource tags returned.
   */
  tags?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsTags[];
  /**
   * @remarks
   * The version of the browser. Valid values:
   * 
   * - `Basic`: Basic Edition.
   * - `Pro`: Premium Edition.
   * 
   * In the MAU scenario, the value is `Pro`.
   * 
   * @example
   * Pro
   */
  tier?: string;
  /**
   * @remarks
   * The session timer configuration returned. This is used to view the effective settings and does not indicate that the create operation supports configuring this parameter.
   */
  timers?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsTimers[];
  /**
   * @remarks
   * The current authorization mode. Valid values:
   * 
   * - `Mixed`: Mixed authorization of users and user groups.
   * - `User`: User authorization.
   * - `UserGroup`: User group authorization.
   * 
   * @example
   * Mixed
   */
  userGroupAuthMode?: string;
  /**
   * @remarks
   * The user quota information.
   */
  userLimit?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsUserLimit;
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
      network: 'Network',
      osType: 'OsType',
      policy: 'Policy',
      status: 'Status',
      subPayType: 'SubPayType',
      supportUserGroupMixedAuth: 'SupportUserGroupMixedAuth',
      tags: 'Tags',
      tier: 'Tier',
      timers: 'Timers',
      userGroupAuthMode: 'UserGroupAuthMode',
      userLimit: 'UserLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authNotificationEnabled: 'boolean',
      authorizedUserInfo: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsAuthorizedUserInfo,
      bizRegionId: 'string',
      browserConfig: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsBrowserConfig,
      browserInstanceGroupId: 'string',
      browserInstanceGroupName: 'string',
      browserInstanceGroupSetId: 'string',
      chargeType: 'string',
      defaultAccessUrl: 'string',
      duration: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsDuration,
      expiredTime: 'string',
      gmtCreate: 'string',
      homepage: 'string',
      imageId: 'string',
      instanceType: 'string',
      network: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsNetwork,
      osType: 'string',
      policy: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicy,
      status: 'string',
      subPayType: 'string',
      supportUserGroupMixedAuth: 'boolean',
      tags: { 'type': 'array', 'itemType': ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsTags },
      tier: 'string',
      timers: { 'type': 'array', 'itemType': ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsTimers },
      userGroupAuthMode: 'string',
      userLimit: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsUserLimit,
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
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

export class ListBrowserInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of browser instance groups on the current page.
   */
  browserInstanceGroupModels?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModels[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01A0C2ED-95F2-1A37-9FC6-4A395179****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of browser groups that meet the filter conditions.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      browserInstanceGroupModels: 'BrowserInstanceGroupModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserInstanceGroupModels: { 'type': 'array', 'itemType': ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.browserInstanceGroupModels)) {
      $dara.Model.validateArray(this.browserInstanceGroupModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

