// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyPolicyGroupRequestAuthorizeAccessPolicyRule } from "./ModifyPolicyGroupRequestAuthorizeAccessPolicyRule";
import { ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule } from "./ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule";
import { ModifyPolicyGroupRequestClientType } from "./ModifyPolicyGroupRequestClientType";
import { ModifyPolicyGroupRequestDeviceRedirects } from "./ModifyPolicyGroupRequestDeviceRedirects";
import { ModifyPolicyGroupRequestDeviceRules } from "./ModifyPolicyGroupRequestDeviceRules";
import { ModifyPolicyGroupRequestDomainResolveRule } from "./ModifyPolicyGroupRequestDomainResolveRule";
import { ModifyPolicyGroupRequestRevokeAccessPolicyRule } from "./ModifyPolicyGroupRequestRevokeAccessPolicyRule";
import { ModifyPolicyGroupRequestRevokeSecurityPolicyRule } from "./ModifyPolicyGroupRequestRevokeSecurityPolicyRule";
import { ModifyPolicyGroupRequestUsbSupplyRedirectRule } from "./ModifyPolicyGroupRequestUsbSupplyRedirectRule";


export class ModifyPolicyGroupRequest extends $dara.Model {
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
   * *   off (default)
   * *   on
   * 
   * @example
   * on
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelists.
   */
  authorizeAccessPolicyRule?: ModifyPolicyGroupRequestAuthorizeAccessPolicyRule[];
  /**
   * @remarks
   * The security group rules.
   */
  authorizeSecurityPolicyRule?: ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule[];
  /**
   * @remarks
   * Specifies whether to enable the webcam redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on (default)
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The logon method control rules to limit the type of the Alibaba Cloud Workspace client used by end users to connect to cloud computers.
   */
  clientType?: ModifyPolicyGroupRequestClientType[];
  /**
   * @remarks
   * The permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: specifies one-way transfer. You can copy files only from local devices to cloud computers.
   * *   readwrite: specifies two-way transfer You can copy files between local devices and cloud computers.
   * *   write: specifies one-way transfer. You can only copy files from cloud computers to local devices.
   * *   off: disables both one-way and two-way transfer. Files cannot be copied between local devices and cloud computers.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * The device redirection rules.
   */
  deviceRedirects?: ModifyPolicyGroupRequestDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral rules.
   * 
   * **if can be null:**
   * false
   */
  deviceRules?: ModifyPolicyGroupRequestDeviceRules[];
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
   * [black:],example1.com,example2.com
   */
  domainList?: string;
  /**
   * @remarks
   * The domain resolution rules.
   */
  domainResolveRule?: ModifyPolicyGroupRequestDomainResolveRule[];
  /**
   * @remarks
   * The type of the domain name resolution rule.
   * 
   * Valid values:
   * 
   * *   OFF
   * *   ON
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
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to turn on the User Stream Collaboration switch.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * Specifies whether to enable the Image Quality Control feature for Graphic-based cloud computers. If you have high requirements on the performance and user experience in scenarios such as professional design, we recommend that you enable this feature.
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
   * >  We recommend that you specify the ClientType-related parameters to control the Alibaba Cloud Workspace client type for cloud computer connection.``
   * 
   * Valid values:
   * 
   * *   off
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
   * BOTH
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
   * *   off (default): no permissions. Local disk mapping is unavailable on cloud computers.
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
   * The name of the cloud computer policy.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable network redirection.
   * 
   * >  This parameter is in invitational preview for specific users and not available to the public.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * on
   */
  netRedirect?: string;
  /**
   * @remarks
   * The ID of the cloud computer policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
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
   */
  preemptLoginUser?: string[];
  /**
   * @remarks
   * The printer redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  printerRedirection?: string;
  /**
   * @remarks
   * Specifies whether to enable the custom screen recording feature.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
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
   * Specifies whether to record the audio files generated from cloud computers.
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
   * The time when the screen recording stops. Specify the value in the HH:MM:SS format. The value is meaningful only when you set `Recording` to `PERIOD`.
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
   * 30
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
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * The time when the screen recording starts. Specify the value in the HH:MM:SS format. The value is meaningful only when you set the `Recording` parameter to `PERIOD`.
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
   * The permissions on keyboard and mouse control during remote assistance.
   * 
   * Valid values:
   * 
   * *   optionalControl: By default, you are not granted the permissions. You can apply for the permissions.
   * *   fullControl: You are granted the full permissions.
   * *   disableControl: You are not granted the permissions.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * The client IP address whitelists that you want to delete.
   */
  revokeAccessPolicyRule?: ModifyPolicyGroupRequestRevokeAccessPolicyRule[];
  /**
   * @remarks
   * The security group rules that you want to delete.
   */
  revokeSecurityPolicyRule?: ModifyPolicyGroupRequestRevokeSecurityPolicyRule[];
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
   * Specifies whether to enable the USB redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  usbRedirect?: string;
  /**
   * @remarks
   * The USB redirection rules.
   */
  usbSupplyRedirectRule?: ModifyPolicyGroupRequestUsbSupplyRedirectRule[];
  /**
   * @remarks
   * The multimedia redirection feature.
   * 
   * @example
   * on
   */
  videoRedirect?: string;
  /**
   * @remarks
   * The image display quality.
   * 
   * Valid values:
   * 
   * *   high: high-definition (HD)
   * *   low: smoothness
   * *   lossless: no quality loss
   * *   medium (default): scenario-specific adaptation
   * 
   * @example
   * low
   */
  visualQuality?: string;
  /**
   * @remarks
   * The watermarking feature.
   * 
   * Valid values:
   * 
   * *   blind: Invisible watermarks are applied.
   * *   off: The watermarking feature is disabled.
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
   * 3
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
   * off
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * The watermark transparency.
   * 
   * Valid values:
   * 
   * *   LIGHT (default)
   * *   DARK
   * *   MIDDLE
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
   * >  If you set this parameter to `Custom`, you must specify `WatermarkCustomText`.
   * 
   * Valid values:
   * 
   * *   EndUserId: the username
   * *   Custom: the custom text
   * *   DesktopIp: the IP address of the cloud computer
   * *   ClientIp: the IP address of the Alibaba Cloud Workspace client
   * *   HostName: the rightmost 15 digits of the cloud computer ID
   * *   ClientTime: the current time displayed on the cloud computer
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * Specifies whether to display the Xiaoying AI Assistant entry in the DesktopAssistant menu.
   * 
   * Valid values:
   * 
   * *   off: does not display the Xiaoying AI Assistant entry in the DesktopAssistant menu.
   * *   on: displays the Xiaoying AI Assistant entry in the DesktopAssistant menu.
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
      policyGroupId: 'PolicyGroupId',
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
      revokeAccessPolicyRule: 'RevokeAccessPolicyRule',
      revokeSecurityPolicyRule: 'RevokeSecurityPolicyRule',
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
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule },
      cameraRedirect: 'string',
      clientType: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestClientType },
      clipboard: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestDeviceRules },
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestDomainResolveRule },
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
      policyGroupId: 'string',
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
      revokeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeAccessPolicyRule },
      revokeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeSecurityPolicyRule },
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestUsbSupplyRedirectRule },
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
    if(Array.isArray(this.revokeAccessPolicyRule)) {
      $dara.Model.validateArray(this.revokeAccessPolicyRule);
    }
    if(Array.isArray(this.revokeSecurityPolicyRule)) {
      $dara.Model.validateArray(this.revokeSecurityPolicyRule);
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

