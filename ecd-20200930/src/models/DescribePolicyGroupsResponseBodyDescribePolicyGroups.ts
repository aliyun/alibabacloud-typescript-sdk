// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules";
import { DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules";
import { DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes";
import { DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects";
import { DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules";
import { DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule";
import { DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule";
import { DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule";


export class DescribePolicyGroupsResponseBodyDescribePolicyGroups extends $dara.Model {
  /**
   * @remarks
   * Indicates whether end users are granted the administrator permissions.
   * 
   * >  This parameter is in invitational preview for specific users and not available to the public.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * Indicates whether the anti-screenshot feature is enabled.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelist. End users can access cloud computers only from the IP addresses in the whitelist.
   */
  authorizeAccessPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The security group rules.
   */
  authorizeSecurityPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  /**
   * @remarks
   * Indicates whether the webcam redirection feature is enabled.
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
  clientTypes?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes[];
  /**
   * @remarks
   * The permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: specifies one-way transfer. You can copy files only from local devices to cloud computers.
   * *   readwrite: specifies two-way transfer. You can copy files between local devices and cloud computers.
   * *   write: specifies one-way transfer. You can only copy files from cloud computers to local devices.
   * *   off: disables both one-way and two-way transfer. Files cannot be copied between local devices and cloud computers.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * Indicates whether the Color Enhancement switch is turned on in design and 3D scenarios.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  colorEnhancement?: string;
  /**
   * @remarks
   * The CPU underclocking duration. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  cpuDownGradeDuration?: number;
  /**
   * @remarks
   * The process whitelist that is not restricted by the CPU usage limit.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * Indicates whether the CPU spike protection switch is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  cpuProtectedMode?: string;
  /**
   * @remarks
   * The overall CPU usage. Valid values: 70 to 90. Unit: percentage (%).
   * 
   * @example
   * 70
   */
  cpuRateLimit?: number;
  /**
   * @remarks
   * The overall CPU sampling duration. Valid values: 10 to 60. Unit: seconds.
   * 
   * @example
   * 10
   */
  cpuSampleDuration?: number;
  /**
   * @remarks
   * The single-CPU usage. Valid values: 70 to 100. Unit: %.
   * 
   * @example
   * 70
   */
  cpuSingleRateLimit?: number;
  /**
   * @remarks
   * The number of cloud computers bound with this policy.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of shared cloud computers bound with this policy.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  deviceConnectHint?: string;
  /**
   * @remarks
   * The device redirection rules.
   */
  deviceRedirects?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral rules.
   */
  deviceRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules[];
  /**
   * @remarks
   * The display mode.
   * 
   * Valid values:
   * 
   * *   clientCustom: suitable for user-defined scenarios.
   * *   adminOffice: suitable for daily office scenarios.
   * *   adminDesign: suitable for 3D application scenarios.
   * *   adminCustom: administrator-customized scenarios
   * 
   * @example
   * adminCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control for domain names. Domain names support wildcards (\\*). Separate multiple domain names with commas (,).
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
   * The domain name resolution rules.
   */
  domainResolveRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule[];
  /**
   * @remarks
   * Indicates whether the switch for domain name resolution is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * The number of cloud computers that are associated with the policy. The number of cloud computers that are associated only with custom policies is returned.
   * 
   * @example
   * 1
   */
  edsCount?: number;
  /**
   * @remarks
   * Indicates whether the Contact Administrator for Help switch is turned on.
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
   * Indicates whether the User Stream Collaboration switch is turned on.
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
  fileMigrate?: string;
  /**
   * @remarks
   * Transfers files.
   * 
   * @example
   * null
   */
  fileTransfer?: string;
  /**
   * @remarks
   * Indicates whether the Image Quality Control feature is enabled. If you have high requirements on the performance and user experience in scenarios such as professional design, we recommend that you enable this feature.
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
   * *   TCP (default): TCP.
   * *   BOTH: TCP and UDP.
   * 
   * @example
   * BOTH
   */
  internetCommunicationProtocol?: string;
  internetPrinter?: string;
  /**
   * @remarks
   * The permissions on local disk mapping.
   * 
   * Valid values:
   * 
   * *   read: read-only. Local disk mapping is available on cloud computers. However, you can only read (copy) local files but cannot modify the files.
   * *   readwrite: read and write. Local disk mapping is available on cloud computers. You can read (copy) and write (modify) local files.
   * *   off (default): none.
   * 
   * @example
   * readwrite
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
   * The memory underclocking duration for a single process. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  memoryDownGradeDuration?: number;
  /**
   * @remarks
   * The whitelist of processes that are not restricted by the memory usage limit.
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * Indicates whether the memory spike protection switch is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  memoryProtectedMode?: string;
  /**
   * @remarks
   * The overall memory usage. Valid values: 70 to 90. Unit: %.
   * 
   * @example
   * 70
   */
  memoryRateLimit?: number;
  /**
   * @remarks
   * The overall memory sampling duration. Valid values: 30 to 60. Unit: seconds.
   * 
   * @example
   * 30
   */
  memorySampleDuration?: number;
  /**
   * @remarks
   * The memory usage of a single process. Valid values: 30 to 60. Unit: %.
   * 
   * @example
   * 30
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Specifies whether to display the restart button in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace mobile clients (including the Android client and the iOS client).
   * 
   * > Mobile clients of V7.4 and higher versions required.
   * 
   * Valid values:
   * 
   * - off: not provided.
   * - on: provided.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * Specifies whether to display the shut down button in the DesktopAssistant when the cloud computer is accessed from the Alibaba Cloud Workspace mobile clients (including the Android client and the iOS client).
   * 
   * > Mobile clients of V7.4 and higher versions required.
   * 
   * Valid values:
   * 
   * - off: not provided.
   * - on: provided.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
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
   * Indicates whether the network redirection feature is enabled.
   * 
   * >  This parameter is in invitational preview for specific users and not available to the public.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The network redirection rule.
   * 
   * >  This parameter is in invitational preview for specific users and not available to the public.
   */
  netRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule[];
  /**
   * @remarks
   * The ID of the cloud computer policy.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The type of the cloud computer policy.
   * 
   * Valid values:
   * 
   * *   SYSTEM
   * *   CUSTOM
   * 
   * @example
   * SYSTEM
   */
  policyGroupType?: string;
  /**
   * @remarks
   * The status of the cloud computer policy.
   * 
   * Valid values:
   * 
   * *   AVAILABLE
   * *   CREATING
   * 
   * @example
   * AVAILABLE
   */
  policyStatus?: string;
  /**
   * @remarks
   * The cloud computer preemption feature.
   * 
   * >  To ensure user experience and data security, when a cloud computer is used by an end user, other end users cannot connect to the cloud computer. By default, this parameter is set to `off`, which cannot be modified.
   * 
   * Valid values:
   * 
   * *   off: Preemption is not allowed.
   * 
   * @example
   * off
   */
  preemptLogin?: string;
  /**
   * @remarks
   * The usernames that can preempt to connect to the cloud computer.
   */
  preemptLoginUsers?: string[];
  /**
   * @remarks
   * Indicates whether the printer redirection feature is enabled.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  printerRedirection?: string;
  /**
   * @remarks
   * Indicates whether the Image Quality Enhancement switch is turned on for design and 3D scenarios.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * Indicates whether the custom screen recording feature is enabled.
   * 
   * Valid values:
   * 
   * *   off (default)
   * *   on
   * 
   * @example
   * off
   */
  recordContent?: string;
  /**
   * @remarks
   * The period when the custom screen recording can be retained before expiration. Default value: 30 days.
   * 
   * @example
   * 30
   */
  recordContentExpires?: number;
  /**
   * @remarks
   * The recording duration since a target event is detected by the screen recording audit policy. Unit: Minute. Valid values: 10-60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * The array of absolute paths of the monitored files in the screen recording audit policy.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * The array of absolute paths of the monitored registry entries in the screen recording audit policy.
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * Indicates whether the screen recording feature is enabled.
   * 
   * Valid values:
   * 
   * *   byaction_cmd_ft: enables the operation-triggered screen recording upon command execution and file transfer.
   * *   ALLTIME: enables the whole-process screen recording. That is, the recording starts when cloud computers are connected and ends when the cloud computers are disconnected.
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
   * Indicates whether audio files generated from cloud computers are recorded.
   * 
   * Valid values:
   * 
   * *   off (default): records only video files.
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
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The time when the screen recording ended. The value is in the HH:MM:SS format. The value takes effect only when Recording is set to PERIOD.
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
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * The time when the screen recording was started. The value is in the HH:MM:SS format. The value takes effect only when Recording is set to PERIOD.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Indicates whether the screen recording notification feature is enabled after end users log on to the Alibaba Cloud Workspace client.
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
   * Your desktop is being recorded
   */
  recordingUserNotifyMessage?: string;
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
   * Resets the cloud computer.
   * 
   * @example
   * null
   */
  resetDesktop?: string;
  resolutionHeight?: number;
  resolutionModel?: string;
  resolutionWidth?: number;
  /**
   * @remarks
   * The number of resource groups bound with this policy.
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  /**
   * @remarks
   * The region of the cloud computer policy.
   * 
   * > The value of a region-less policy is `center`.
   * 
   * @example
   * center
   */
  resourceRegionId?: string;
  safeMenu?: string;
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
   * Indicates whether the Smooth Enhancement switch is turned on.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Specifies whether to provide the Metrics function in the DesktopAssistant. Valid values:
   * 
   * - off: not provided.
   * - on: provided.
   * 
   * @example
   * on
   */
  statusMonitor?: string;
  /**
   * @remarks
   * The streaming mode.
   * 
   * Valid values:
   * 
   * *   intelligent: suitable for daily office scenarios (Intelligent Mode).
   * *   smooth: suitable for design and 3D application scenarios (Smooth Mode).
   * 
   * @example
   * smooth
   */
  streamingMode?: string;
  /**
   * @remarks
   * The destination frame rate. Valid values: 10 to 60. Unit: fps.
   * 
   * @example
   * 30
   */
  targetFps?: number;
  /**
   * @remarks
   * Indicates whether the USB redirection feature is enabled.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  usbRedirect?: string;
  /**
   * @remarks
   * The USB redirection rule.
   */
  usbSupplyRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule[];
  /**
   * @remarks
   * The average bitrate for video encoding. Valid values: 1000 to 50000.
   * 
   * @example
   * 1000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * The maximum quantizer parameter (QP) of video files. A larger QP value indicates worse video quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum quantizer parameter (QP) of video files. A smaller QP value indicates higher video quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * The peak bitrate for video encoding. Valid values: 1000 to 50000.
   * 
   * @example
   * 1000
   */
  videoEncPeakKbps?: number;
  /**
   * @remarks
   * The video encoding feature.
   * 
   * Valid values:
   * 
   * *   qualityFirst: The priority given to the image quality.
   * *   bandwidthFirst: The priority given to the bitrate.
   * 
   * @example
   * qualityFirst
   */
  videoEncPolicy?: string;
  /**
   * @remarks
   * Indicates whether the multimedia redirection feature is enabled.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  videoRedirect?: string;
  /**
   * @remarks
   * The image display quality.
   * 
   * Valid values:
   * 
   * *   high: high-definition (HD)
   * *   low: fluent
   * *   medium (default): adaptive
   * *   lossless: no quality loss
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
   * *   off: The watermarking feature is disabled.
   * *   on: Visible watermarks are applied.
   * 
   * @example
   * on
   */
  watermark?: string;
  /**
   * @remarks
   * Indicates whether the anti-screen photo feature is enabled for invisible watermarks.
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
   * If you set `WatermarkType` to `custom`, you must also specify `WatermarkCustomText`.
   * 
   * @example
   * test
   */
  watermarkCustomText?: string;
  /**
   * @remarks
   * The slope of the watermark. Valid values: -10 to -30.
   * 
   * @example
   * -10
   */
  watermarkDegree?: number;
  /**
   * @remarks
   * The font size of the watermark. Valid values: 10 to 20.
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
   * Indicates whether the security priority feature is enabled for invisible watermarks.
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
   * The watermark transparency.
   * 
   * Valid values:
   * 
   * *   LIGHT
   * *   DARK
   * *   MIDDLE
   * 
   * @example
   * LIGHT
   */
  watermarkTransparency?: string;
  /**
   * @remarks
   * The watermark transparency. A greater value indicates that the watermark is less transparent. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The watermark content.
   * 
   * Valid values:
   * 
   * *   EndUserId: the username.
   * *   Custom
   * *   DesktopIp: the IP address of the cloud computer.
   * *   ClientIp: the IP address of the Alibaba Cloud Workspace client.
   * *   HostName: the rightmost 15 digits of the cloud computer ID.
   * *   ClientTime: the current time displayed on the cloud computer.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  wuyingKeeper?: string;
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
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      cameraRedirect: 'CameraRedirect',
      clientTypes: 'ClientTypes',
      clipboard: 'Clipboard',
      colorEnhancement: 'ColorEnhancement',
      cpuDownGradeDuration: 'CpuDownGradeDuration',
      cpuProcessors: 'CpuProcessors',
      cpuProtectedMode: 'CpuProtectedMode',
      cpuRateLimit: 'CpuRateLimit',
      cpuSampleDuration: 'CpuSampleDuration',
      cpuSingleRateLimit: 'CpuSingleRateLimit',
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      deviceConnectHint: 'DeviceConnectHint',
      deviceRedirects: 'DeviceRedirects',
      deviceRules: 'DeviceRules',
      displayMode: 'DisplayMode',
      domainList: 'DomainList',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      edsCount: 'EdsCount',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      fileMigrate: 'FileMigrate',
      fileTransfer: 'FileTransfer',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      internetPrinter: 'InternetPrinter',
      localDrive: 'LocalDrive',
      maxReconnectTime: 'MaxReconnectTime',
      memoryDownGradeDuration: 'MemoryDownGradeDuration',
      memoryProcessors: 'MemoryProcessors',
      memoryProtectedMode: 'MemoryProtectedMode',
      memoryRateLimit: 'MemoryRateLimit',
      memorySampleDuration: 'MemorySampleDuration',
      memorySingleRateLimit: 'MemorySingleRateLimit',
      mobileRestart: 'MobileRestart',
      mobileShutdown: 'MobileShutdown',
      name: 'Name',
      netRedirect: 'NetRedirect',
      netRedirectRule: 'NetRedirectRule',
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      policyStatus: 'PolicyStatus',
      preemptLogin: 'PreemptLogin',
      preemptLoginUsers: 'PreemptLoginUsers',
      printerRedirection: 'PrinterRedirection',
      qualityEnhancement: 'QualityEnhancement',
      recordContent: 'RecordContent',
      recordContentExpires: 'RecordContentExpires',
      recordEventDuration: 'RecordEventDuration',
      recordEventFilePaths: 'RecordEventFilePaths',
      recordEventRegisters: 'RecordEventRegisters',
      recording: 'Recording',
      recordingAudio: 'RecordingAudio',
      recordingDuration: 'RecordingDuration',
      recordingEndTime: 'RecordingEndTime',
      recordingExpires: 'RecordingExpires',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      recordingUserNotify: 'RecordingUserNotify',
      recordingUserNotifyMessage: 'RecordingUserNotifyMessage',
      remoteCoordinate: 'RemoteCoordinate',
      resetDesktop: 'ResetDesktop',
      resolutionHeight: 'ResolutionHeight',
      resolutionModel: 'ResolutionModel',
      resolutionWidth: 'ResolutionWidth',
      resourceGroupCount: 'ResourceGroupCount',
      resourceRegionId: 'ResourceRegionId',
      safeMenu: 'SafeMenu',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      smoothEnhancement: 'SmoothEnhancement',
      statusMonitor: 'StatusMonitor',
      streamingMode: 'StreamingMode',
      targetFps: 'TargetFps',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      videoEncAvgKbps: 'VideoEncAvgKbps',
      videoEncMaxQP: 'VideoEncMaxQP',
      videoEncMinQP: 'VideoEncMinQP',
      videoEncPeakKbps: 'VideoEncPeakKbps',
      videoEncPolicy: 'VideoEncPolicy',
      videoRedirect: 'VideoRedirect',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkAntiCam: 'WatermarkAntiCam',
      watermarkColor: 'WatermarkColor',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkDegree: 'WatermarkDegree',
      watermarkFontSize: 'WatermarkFontSize',
      watermarkFontStyle: 'WatermarkFontStyle',
      watermarkPower: 'WatermarkPower',
      watermarkRowAmount: 'WatermarkRowAmount',
      watermarkSecurity: 'WatermarkSecurity',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
      wuyingKeeper: 'WuyingKeeper',
      wyAssistant: 'WyAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccess: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      cameraRedirect: 'string',
      clientTypes: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes },
      clipboard: 'string',
      colorEnhancement: 'string',
      cpuDownGradeDuration: 'number',
      cpuProcessors: { 'type': 'array', 'itemType': 'string' },
      cpuProtectedMode: 'string',
      cpuRateLimit: 'number',
      cpuSampleDuration: 'number',
      cpuSingleRateLimit: 'number',
      desktopCount: 'number',
      desktopGroupCount: 'number',
      deviceConnectHint: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsDeviceRules },
      displayMode: 'string',
      domainList: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsDomainResolveRule },
      domainResolveRuleType: 'string',
      edsCount: 'number',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
      fileMigrate: 'string',
      fileTransfer: 'string',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      internetPrinter: 'string',
      localDrive: 'string',
      maxReconnectTime: 'number',
      memoryDownGradeDuration: 'number',
      memoryProcessors: { 'type': 'array', 'itemType': 'string' },
      memoryProtectedMode: 'string',
      memoryRateLimit: 'number',
      memorySampleDuration: 'number',
      memorySingleRateLimit: 'number',
      mobileRestart: 'string',
      mobileShutdown: 'string',
      name: 'string',
      netRedirect: 'string',
      netRedirectRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule },
      policyGroupId: 'string',
      policyGroupType: 'string',
      policyStatus: 'string',
      preemptLogin: 'string',
      preemptLoginUsers: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      qualityEnhancement: 'string',
      recordContent: 'string',
      recordContentExpires: 'number',
      recordEventDuration: 'number',
      recordEventFilePaths: { 'type': 'array', 'itemType': 'string' },
      recordEventRegisters: { 'type': 'array', 'itemType': 'string' },
      recording: 'string',
      recordingAudio: 'string',
      recordingDuration: 'number',
      recordingEndTime: 'string',
      recordingExpires: 'number',
      recordingFps: 'number',
      recordingStartTime: 'string',
      recordingUserNotify: 'string',
      recordingUserNotifyMessage: 'string',
      remoteCoordinate: 'string',
      resetDesktop: 'string',
      resolutionHeight: 'number',
      resolutionModel: 'string',
      resolutionWidth: 'number',
      resourceGroupCount: 'number',
      resourceRegionId: 'string',
      safeMenu: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      smoothEnhancement: 'string',
      statusMonitor: 'string',
      streamingMode: 'string',
      targetFps: 'number',
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule },
      videoEncAvgKbps: 'number',
      videoEncMaxQP: 'number',
      videoEncMinQP: 'number',
      videoEncPeakKbps: 'number',
      videoEncPolicy: 'string',
      videoRedirect: 'string',
      visualQuality: 'string',
      watermark: 'string',
      watermarkAntiCam: 'string',
      watermarkColor: 'number',
      watermarkCustomText: 'string',
      watermarkDegree: 'number',
      watermarkFontSize: 'number',
      watermarkFontStyle: 'string',
      watermarkPower: 'string',
      watermarkRowAmount: 'number',
      watermarkSecurity: 'string',
      watermarkTransparency: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
      wuyingKeeper: 'string',
      wyAssistant: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizeAccessPolicyRules)) {
      $dara.Model.validateArray(this.authorizeAccessPolicyRules);
    }
    if(Array.isArray(this.authorizeSecurityPolicyRules)) {
      $dara.Model.validateArray(this.authorizeSecurityPolicyRules);
    }
    if(Array.isArray(this.clientTypes)) {
      $dara.Model.validateArray(this.clientTypes);
    }
    if(Array.isArray(this.cpuProcessors)) {
      $dara.Model.validateArray(this.cpuProcessors);
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
    if(Array.isArray(this.memoryProcessors)) {
      $dara.Model.validateArray(this.memoryProcessors);
    }
    if(Array.isArray(this.netRedirectRule)) {
      $dara.Model.validateArray(this.netRedirectRule);
    }
    if(Array.isArray(this.preemptLoginUsers)) {
      $dara.Model.validateArray(this.preemptLoginUsers);
    }
    if(Array.isArray(this.recordEventFilePaths)) {
      $dara.Model.validateArray(this.recordEventFilePaths);
    }
    if(Array.isArray(this.recordEventRegisters)) {
      $dara.Model.validateArray(this.recordEventRegisters);
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

