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
   * The browser startup parameters. For example, `--incognito` indicates an incognito window.
   * 
   * @example
   * --incognito
   */
  browserParam?: string;
  /**
   * @remarks
   * The cookie synchronization configuration. The string `true` indicates enabled. `false` indicates disabled.
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
   * The current payment stage of the plan. Not applicable in MAU scenarios.
   * 
   * @example
   * -
   */
  currentPayStage?: string;
  /**
   * @remarks
   * The end time of the plan period. Not applicable in MAU scenarios. This field is not returned.
   * 
   * @example
   * -
   */
  periodEndTime?: string;
  /**
   * @remarks
   * The start time of the plan period. Not applicable in MAU scenarios. This field is not returned.
   * 
   * @example
   * -
   */
  periodStartTime?: string;
  /**
   * @remarks
   * The total duration of the plan, in seconds. Not applicable in MAU scenarios.
   * 
   * @example
   * -
   */
  totalDuration?: number;
  /**
   * @remarks
   * The used duration of the plan, in seconds. Not applicable in MAU scenarios.
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
   * The website access restriction mode.
   * 
   * - `ALLOW_ALL`: All domain names are allowed.
   * - `ALLOW_LIST`: Only websites in the allowlist are allowed.
   * 
   * The returned value reflects the current configuration of the browser group.
   * 
   * @example
   * ALLOW_ALL
   */
  accessRestriction?: string;
  /**
   * @remarks
   * The ID of the workspace to which the browser group belongs.
   * 
   * @example
   * cn-hangzhou+dir-843734****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs used by the browser group, available for scenarios with custom network configurations.
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
   * The action of the client access rule.
   * 
   * - `allow`: Access is allowed.
   * - `deny`: Access is denied.
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
   * The client type.
   * 
   * - `windows`: Windows client.
   * - `macos`: macOS client.
   * - `html5`: Web client.
   * - `linux`: Linux client.
   * - `android`: Android client.
   * - `ios`: iOS client.
   * 
   * This field reflects the existing access configuration and does not indicate that all client types are available for the current product.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * The access policy switch for this client type.
   * 
   * - `on`: Access from this client type is allowed.
   * - `off`: Access from this client type is denied.
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
   * The clipboard transfer direction. The value is case-insensitive.
   * 
   * - `off`: Bidirectional transfer is disabled.
   * - `read`: Copy and paste from the local PC to the cloud browser is allowed.
   * - `write`: Copy and paste from the cloud browser to the local PC is allowed.
   * - `readwrite`: Bidirectional transfer is allowed.
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
   * The frame rate of browser sessions.
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
   * - `ON`: Watermark is enabled.
   * - `OFF`: Watermark is disabled.
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
   * 
   * - `EndUserId`: The user identifier.
   * - `InstanceGroupId`: The delivery group identifier.
   * - `ClientTime`: The current time on the client.
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

export class ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicy extends $dara.Model {
  /**
   * @remarks
   * The screenshot protection switch.
   * 
   * - `on`: Screenshot protection is enabled.
   * - `off`: Screenshot protection is disabled.
   * 
   * @example
   * on
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client access IP address whitelist rules.
   */
  authorizeAccessPolicyRules?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The client access control configuration list.
   */
  clientTypes?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyClientTypes[];
  /**
   * @remarks
   * The clipboard transfer direction, content type, and size limit settings. read indicates transfer from the local PC to the cloud browser. write indicates transfer from the cloud browser to the local PC.
   */
  clipboardPolicy?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicyClipboardPolicy;
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
   * The session retention duration after disconnection, in minutes. `-1` indicates that the session is not unbound due to this timeout. The session is still subject to authorization and other session release policies.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The timer configuration type. `SESSION_TIMEOUT` indicates the session retention duration after disconnection.
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
   * The user quota.
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
   * Indicates whether authorization and deauthorization notification emails are enabled. `true` indicates enabled. `false` indicates disabled.
   * 
   * @example
   * true
   */
  authNotificationEnabled?: boolean;
  /**
   * @remarks
   * The authorized user statistics of the browser group.
   */
  authorizedUserInfo?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsAuthorizedUserInfo;
  /**
   * @remarks
   * The business region where the browser group is located.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The current browser configuration.
   */
  browserConfig?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsBrowserConfig;
  /**
   * @remarks
   * The ID of the cloud browser group.
   * 
   * @example
   * big-0c7loey7fzjq****
   */
  browserInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the cloud browser group.
   * 
   * @example
   * OfficeBrowser
   */
  browserInstanceGroupName?: string;
  /**
   * @remarks
   * The ID of the browser group set to which the browser group belongs.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  browserInstanceGroupSetId?: string;
  /**
   * @remarks
   * The billing type. In MAU scenarios, `PostPaid` is returned, which indicates pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The default access URL of the browser group. Use the URL returned by the API for access. The resource identifiers in the example must be replaced.
   * 
   * @example
   * https://wuying.aliyun.com/integration?appId=browser&appInstanceGroupId=big-0c7loey7fzjq****
   */
  defaultAccessUrl?: string;
  /**
   * @remarks
   * The plan duration information. In MAU scenarios, plan duration does not apply, and an empty object may be returned.
   */
  duration?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsDuration;
  /**
   * @remarks
   * The expiration time of the browser group. Not applicable in MAU scenarios. This field is not returned.
   * 
   * @example
   * -
   */
  expiredTime?: string;
  /**
   * @remarks
   * The creation time of the browser group.
   * 
   * The time is in RFC 3339 format: `yyyy-MM-dd\\"T\\"HH:mm:ss.SSSXXX`, which includes milliseconds and a time zone offset. The actual POP response uses the UTC offset `+00:00`.
   * 
   * @example
   * 2026-09-21T07:00:39.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The homepage URL of the browser group.
   * 
   * @example
   * https://www.aliyun.com
   */
  homepage?: string;
  /**
   * @remarks
   * The image ID used by the browser group.
   * 
   * @example
   * imgc-070qhs8oeju4****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type used by the browser group.
   * 
   * @example
   * appstreaming.general.basic
   */
  instanceType?: string;
  /**
   * @remarks
   * The workspace network and website access restriction configuration.
   */
  network?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsNetwork;
  /**
   * @remarks
   * The operating system type of the browser group. The current MAU product scenario uses Windows.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The policy configuration returned for the browser group. Policy fields are used to view existing settings and do not indicate that all corresponding creation parameters are configurable.
   */
  policy?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsPolicy;
  /**
   * @remarks
   * The browser group status.
   * 
   * - `DEPLOYING`: Being deployed.
   * - `PUBLISHED`: Deployed.
   * - `FAILED`: Deployment failed.
   * - `EXPIRED`: Expired.
   * - `CEASED`: Suspended due to overdue payment.
   * - `MAINTAINING`: Being updated.
   * - `MAINTAIN_FAILED`: Update failed.
   * - `DELETING`: Being deleted.
   * - `UNAVAILABLE`: Unavailable.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The sub-payment type. In MAU scenarios, the actual returned value is `mau`, which indicates billing by monthly active users.
   * 
   * @example
   * mau
   */
  subPayType?: string;
  /**
   * @remarks
   * Indicates whether mixed authorization of users and user groups is supported. `true` indicates supported, and `false` indicates not supported. Evaluate this value based on the current authorization mode.
   * 
   * @example
   * false
   */
  supportUserGroupMixedAuth?: boolean;
  /**
   * @remarks
   * The list of resource tags.
   */
  tags?: ListBrowserInstanceGroupResponseBodyBrowserInstanceGroupModelsTags[];
  /**
   * @remarks
   * The version of the browser. Valid values:
   * 
   * - `Basic`: Basic Edition.
   * - `Pro`: Premium Edition.
   * 
   * In MAU scenarios, the value is `Pro`.
   * 
   * @example
   * Pro
   */
  tier?: string;
  /**
   * @remarks
   * The session timer configurations currently returned. This is used to view the effective settings and does not indicate that the create operation supports setting this parameter.
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
   * The list of browser groups on the current page.
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
   * The request ID, which is used for troubleshooting.
   * 
   * @example
   * 01A0C2ED-95F2-1A37-9FC6-4A395179****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of browser groups that match the filter conditions.
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

