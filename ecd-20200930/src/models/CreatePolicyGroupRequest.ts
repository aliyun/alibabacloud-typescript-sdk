// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePolicyGroupRequestAuthorizeAccessPolicyRule } from "./CreatePolicyGroupRequestAuthorizeAccessPolicyRule";
import { CreatePolicyGroupRequestAuthorizeSecurityPolicyRule } from "./CreatePolicyGroupRequestAuthorizeSecurityPolicyRule";
import { CreatePolicyGroupRequestClientType } from "./CreatePolicyGroupRequestClientType";
import { CreatePolicyGroupRequestDeviceRedirects } from "./CreatePolicyGroupRequestDeviceRedirects";
import { CreatePolicyGroupRequestDeviceRules } from "./CreatePolicyGroupRequestDeviceRules";
import { CreatePolicyGroupRequestDomainResolveRule } from "./CreatePolicyGroupRequestDomainResolveRule";
import { CreatePolicyGroupRequestUsbSupplyRedirectRule } from "./CreatePolicyGroupRequestUsbSupplyRedirectRule";


export class CreatePolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether end users have the administrator permissions.
   * 
   * >  This parameter is in invitational preview for specific users and not available to the public.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * Specifies whether to enable the anti-screenshot feature.
   * 
   * Valid values:
   * 
   * *   off: Anti-screenshot is disabled. This value is the default value.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   on: Anti-screenshot is enabled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelist. After you configure the whitelist, end users can access cloud computers only from the IP addresses in the whitelist.
   */
  authorizeAccessPolicyRule?: CreatePolicyGroupRequestAuthorizeAccessPolicyRule[];
  /**
   * @remarks
   * The security group rules.
   */
  authorizeSecurityPolicyRule?: CreatePolicyGroupRequestAuthorizeSecurityPolicyRule[];
  /**
   * @remarks
   * Specifies whether to enable the webcam redirection feature.
   * 
   * Valid values:
   * 
   * *   off: Webcam redirection is disabled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   on: Webcam redirection is enabled. This value is the default value.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The logon method control rules to limit the type of the Alibaba Cloud Workspace client used by end users to connect to cloud computers.
   */
  clientType?: CreatePolicyGroupRequestClientType[];
  /**
   * @remarks
   * The permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: specifies one-way transfer. You can copy files only from local devices to cloud computers.
   * *   readwrite: specifies two-way transfer. You can copy files between local devices and cloud computers.
   * *   write: specifies one-way transfer. You can only copy files from cloud computers to local devices.
   * *   off (default): disables both one-way and two-way transfer. Files cannot be copied between local devices and cloud computers.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * The device redirection rules.
   */
  deviceRedirects?: CreatePolicyGroupRequestDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral rules.
   */
  deviceRules?: CreatePolicyGroupRequestDeviceRules[];
  /**
   * @remarks
   * Specifies whether the access control for domain names is enabled. Domain names support wildcards (\\*). Separate multiple domain names with commas (,).
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  domainList?: string;
  /**
   * @remarks
   * The details of the domain name resolution rule.
   */
  domainResolveRule?: CreatePolicyGroupRequestDomainResolveRule[];
  /**
   * @remarks
   * The type of the domain name resolution policy.
   * 
   * Valid values:
   * 
   * *   OFF
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ON
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * OFF
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * Specifies whether to turn on the Contact Administrator for Help switch.
   * 
   * Valid values:
   * 
   * *   OFF
   * *   ON
   * 
   * @example
   * ON
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to turn on the User Stream Collaboration switch.
   * 
   * Valid values:
   * 
   * *   OFF
   * *   ON
   * 
   * @example
   * ON
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable the Image Quality Control feature. If you have high requirements on the performance and user experience in scenarios such as professional design, we recommend that you enable this feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * Specifies whether to allow web client access.
   * 
   * >  We recommend that you use the ClientType-related parameters to control the Alibaba Cloud Workspace client type for cloud computer logon.``
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * off
   */
  html5Access?: string;
  /**
   * @remarks
   * The file transfer feature on the web client.
   * 
   * Valid values:
   * 
   * *   all: Files can be uploaded and downloaded between local computers and the web client.
   * *   download: Files on the web client can be downloaded to local computers.
   * *   upload: Files on local computers can be uploaded to the web client.
   * *   off (default): Files cannot be transferred between the web client and local computers.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The protocol for network communication.
   * 
   * Valid values:
   * 
   * *   TCP (default): TCP
   * *   BOTH: TCP and UDP
   * 
   * @example
   * both
   */
  internetCommunicationProtocol?: string;
  /**
   * @remarks
   * The permissions on local disk mapping.
   * 
   * Valid values:
   * 
   * *   read: read-only. Local disk mapping is available on cloud computers. However, you can only read (copy) local files but cannot modify the files.
   * *   readwrite: read and write. Local disk mapping is available on cloud computers. You can read (copy) and write (modify) local files.
   * *   off (default): disabled. Local disk mapping is unavailable on cloud computers.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum retry period for reconnecting to cloud computers when the cloud computers are disconnected due to none-human reasons. Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable the network redirection feature.
   * 
   * > This feature is in invitational preview and is not available to the public.
   * 
   * Valid values:
   * 
   * *   off (default): The network redirection feature is disabled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   on: The network redirection feature is enabled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The cloud computer preemption feature.
   * 
   * >  To ensure user experience and data security, when a cloud computer is used by an end user, other end users cannot connect to the cloud computer. By default, this parameter is set to `off`, which cannot be modified.
   * 
   * Valid values:
   * 
   * *   off (default): Multiple end users cannot connect to the same cloud computer at the same time.
   * 
   * @example
   * off
   */
  preemptLogin?: string;
  /**
   * @remarks
   * The usernames that are allowed to connect to the cloud computer in use. You can specify up to five usernames.
   * 
   * >  To ensure user experience and data security, other end users cannot connect to the cloud computer that is used by an end user.
   * 
   * @example
   * Alice
   */
  preemptLoginUser?: string[];
  /**
   * @remarks
   * The policy for printer redirection.
   * 
   * Valid values:
   * 
   * *   off: Printer redirection is disabled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   on: Printer redirection is enabled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * on
   */
  printerRedirection?: string;
  /**
   * @remarks
   * Specifies whether to enable the custom screen recording feature.
   * 
   * Valid values:
   * 
   * *   off: Custom screen recording is disabled. This value is the default value.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   on: Custom screen recording is enabled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * OFF
   */
  recordContent?: string;
  /**
   * @remarks
   * The duration in which the custom screen recording is valid. Default value: 30. Unit: days.
   * 
   * @example
   * 30
   */
  recordContentExpires?: number;
  /**
   * @remarks
   * Specifies whether to enable the screen recording feature.
   * 
   * Valid values:
   * 
   * *   byaction_cmd_ft: enables the operation-triggered screen recording upon command execution and file transfer.
   * *   ALLTIME: enables the whole-process screen recording. That is, the recording starts when cloud computers are connected and ends when the cloud computers are disconnected.
   * *   session: enables the screen recording for session lifecycle listening.
   * *   PERIOD: enables the interval-based screen recording. You must specify an interval between the start time and end time of this type of recording.
   * *   byaction_commands: enables the operation-triggered screen recording upon command execution.
   * *   OFF: disables the screen recording feature.
   * *   byaction_file_transfer: enables the operation-triggered screen recording upon file transfer.
   * 
   * @example
   * OFF
   */
  recording?: string;
  /**
   * @remarks
   * Specifies whether to record audio files generated from cloud computers.
   * 
   * Valid values:
   * 
   * *   off: records only video files.
   * *   on: records video and audio files.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The file length of the screen recording. Unit: minutes. Screen recording files are split based on the specified file length and uploaded to Object Storage Service (OSS) buckets. When a screen recording file reaches 300 MB in size, the system preferentially performs rolling update for the file.
   * 
   * Valid values:
   * 
   * *   10
   * *   20
   * *   30
   * *   60
   * 
   * @example
   * 15
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The time when the screen recording ends. The value is in the HH:MM:SS format. The value is meaningful only when you set the `Recording` parameter to `PERIOD`.
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * The retention period of the screen recording file. Valid values: 1 to 180. Unit: days.
   * 
   * @example
   * 15
   */
  recordingExpires?: number;
  /**
   * @remarks
   * The frame rate of screen recording. Unit: fps.
   * 
   * Valid values:
   * 
   * *   2
   * *   5
   * *   10
   * *   15
   * 
   * @example
   * 2
   */
  recordingFps?: number;
  /**
   * @remarks
   * The time when the screen recording starts. The value is in the HH:MM:SS format. The value is meaningful only when you set the `Recording` parameter to `PERIOD`.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Specifies whether to enable the screen recording notification feature after end users log on to the Alibaba Cloud Workspace client.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The notification content of screen recording. By default, this parameter is left empty.
   * 
   * @example
   * Your desktop is being recorded.
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The permission to control the keyboard and the mouse during remote assistance.
   * 
   * Valid values:
   * 
   * *    optionalControl: By default, this feature is disabled. You can enable it by applying permissions.
   * 
   * *   fullControl: The permission is granted.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   disableControl: The permission is revoked.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * The effective scope of the policy.
   * 
   * Valid values:
   * 
   * *   IP: The policy takes effect based on the IP address.
   * *   GLOBAL: The policy takes effect globally.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required when the `Scope` parameter is set to `IP`.````
   */
  scopeValue?: string[];
  /**
   * @remarks
   * Specifies whether to enable USB redirection.
   * 
   * Valid values:
   * 
   * *   off: USB redirection is disabled. This value is the default value.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   on: USB redirection is enabled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * off
   */
  usbRedirect?: string;
  /**
   * @remarks
   * The USB redirection rules.
   */
  usbSupplyRedirectRule?: CreatePolicyGroupRequestUsbSupplyRedirectRule[];
  /**
   * @remarks
   * Specifies whether to enable the multimedia redirection switch.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  videoRedirect?: string;
  /**
   * @remarks
   * The policy for image display quality.
   * 
   * Valid values:
   * 
   * *   high
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   low
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   lossless
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   medium: adaptive. This value is the default value.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * medium
   */
  visualQuality?: string;
  /**
   * @remarks
   * The watermarking feature.
   * 
   * Valid values:
   * 
   * *   blind: Invisible watermarks are applied.
   * *   off (default): The watermarking feature is disabled.
   * *   on: Visible watermarks are applied.
   * 
   * @example
   * off
   */
  watermark?: string;
  /**
   * @remarks
   * Specifies whether to enable the anti-screen photo feature for invisible watermarks.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  watermarkAntiCam?: string;
  /**
   * @remarks
   * The font color in red, green, and blue (RGB) of the watermark. Valid values: 0 to 16777215.
   * 
   * @example
   * 0
   */
  watermarkColor?: number;
  /**
   * @remarks
   * The watermark rotation. Valid values: -10 to -30.
   * 
   * @example
   * -10
   */
  watermarkDegree?: number;
  /**
   * @remarks
   * The watermark font size. Valid values: 10 to 20.
   * 
   * @example
   * 10
   */
  watermarkFontSize?: number;
  /**
   * @remarks
   * The watermark font style.
   * 
   * Valid values:
   * 
   * *   plain
   * *   bold
   * 
   * @example
   * plain
   */
  watermarkFontStyle?: string;
  /**
   * @remarks
   * The watermark enhancement feature.
   * 
   * Valid values:
   * 
   * *   high
   * *   low
   * *   medium
   * 
   * @example
   * medium
   */
  watermarkPower?: string;
  /**
   * @remarks
   * The number of watermark rows.
   * 
   * >  This parameter is not available for public use.
   * 
   * @example
   * 5
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * Specifies whether to enable the security priority feature for invisible watermarks.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * The transparency of the watermark.
   * 
   * Valid values:
   * 
   * *   LIGHT
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DARK
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MIDDLE
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * LIGHT
   */
  watermarkTransparency?: string;
  /**
   * @remarks
   * The watermark opacity. A larger value indicates more opaque watermarks. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The watermark content. You can select up to three items as the watermark content. Separate multiple items with commas (,).
   * 
   * >  If you set this parameter to `Custom`, specify `WatermarkCustomText`
   * 
   * Valid values:
   * 
   * *   EndUserId: the username.
   * *   Custom: the custom text.
   * *   DesktopIp: the IP address of the cloud computer.
   * *   ClientIp: the IP address of the Alibaba Cloud Workspace client.
   * *   HostName: the rightmost 15 digits of the cloud computer ID.
   * *   ClientTime: the current time displayed on the cloud computer.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * Specifies whether to provide the AI Assistant function in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace desktop clients (including the Windows client and the macOS client).
   * 
   * > Desktop clients of V7.7 and higher versions required.
   * 
   * Valid values:
   * 
   * - off: the AI Aisstant function is not provided.
   * - on: the AI Aisstant function is provided.
   * 
   * @example
   * on
   */
  wyAssistant?: string;
  static names(): { [key: string]: string } {
    return {
      adminAccess: 'AdminAccess',
      appContentProtection: 'AppContentProtection',
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      cameraRedirect: 'CameraRedirect',
      clientType: 'ClientType',
      clipboard: 'Clipboard',
      deviceRedirects: 'DeviceRedirects',
      deviceRules: 'DeviceRules',
      domainList: 'DomainList',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      localDrive: 'LocalDrive',
      maxReconnectTime: 'MaxReconnectTime',
      name: 'Name',
      netRedirect: 'NetRedirect',
      preemptLogin: 'PreemptLogin',
      preemptLoginUser: 'PreemptLoginUser',
      printerRedirection: 'PrinterRedirection',
      recordContent: 'RecordContent',
      recordContentExpires: 'RecordContentExpires',
      recording: 'Recording',
      recordingAudio: 'RecordingAudio',
      recordingDuration: 'RecordingDuration',
      recordingEndTime: 'RecordingEndTime',
      recordingExpires: 'RecordingExpires',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      recordingUserNotify: 'RecordingUserNotify',
      recordingUserNotifyMessage: 'RecordingUserNotifyMessage',
      regionId: 'RegionId',
      remoteCoordinate: 'RemoteCoordinate',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      videoRedirect: 'VideoRedirect',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkAntiCam: 'WatermarkAntiCam',
      watermarkColor: 'WatermarkColor',
      watermarkDegree: 'WatermarkDegree',
      watermarkFontSize: 'WatermarkFontSize',
      watermarkFontStyle: 'WatermarkFontStyle',
      watermarkPower: 'WatermarkPower',
      watermarkRowAmount: 'WatermarkRowAmount',
      watermarkSecurity: 'WatermarkSecurity',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
      wyAssistant: 'WyAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccess: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeSecurityPolicyRule },
      cameraRedirect: 'string',
      clientType: { 'type': 'array', 'itemType': CreatePolicyGroupRequestClientType },
      clipboard: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': CreatePolicyGroupRequestDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': CreatePolicyGroupRequestDeviceRules },
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestDomainResolveRule },
      domainResolveRuleType: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      localDrive: 'string',
      maxReconnectTime: 'number',
      name: 'string',
      netRedirect: 'string',
      preemptLogin: 'string',
      preemptLoginUser: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      recordContent: 'string',
      recordContentExpires: 'number',
      recording: 'string',
      recordingAudio: 'string',
      recordingDuration: 'number',
      recordingEndTime: 'string',
      recordingExpires: 'number',
      recordingFps: 'number',
      recordingStartTime: 'string',
      recordingUserNotify: 'string',
      recordingUserNotifyMessage: 'string',
      regionId: 'string',
      remoteCoordinate: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestUsbSupplyRedirectRule },
      videoRedirect: 'string',
      visualQuality: 'string',
      watermark: 'string',
      watermarkAntiCam: 'string',
      watermarkColor: 'number',
      watermarkDegree: 'number',
      watermarkFontSize: 'number',
      watermarkFontStyle: 'string',
      watermarkPower: 'string',
      watermarkRowAmount: 'number',
      watermarkSecurity: 'string',
      watermarkTransparency: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
      wyAssistant: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizeAccessPolicyRule)) {
      $dara.Model.validateArray(this.authorizeAccessPolicyRule);
    }
    if(Array.isArray(this.authorizeSecurityPolicyRule)) {
      $dara.Model.validateArray(this.authorizeSecurityPolicyRule);
    }
    if(Array.isArray(this.clientType)) {
      $dara.Model.validateArray(this.clientType);
    }
    if(Array.isArray(this.deviceRedirects)) {
      $dara.Model.validateArray(this.deviceRedirects);
    }
    if(Array.isArray(this.deviceRules)) {
      $dara.Model.validateArray(this.deviceRules);
    }
    if(Array.isArray(this.domainResolveRule)) {
      $dara.Model.validateArray(this.domainResolveRule);
    }
    if(Array.isArray(this.preemptLoginUser)) {
      $dara.Model.validateArray(this.preemptLoginUser);
    }
    if(Array.isArray(this.scopeValue)) {
      $dara.Model.validateArray(this.scopeValue);
    }
    if(Array.isArray(this.usbSupplyRedirectRule)) {
      $dara.Model.validateArray(this.usbSupplyRedirectRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

