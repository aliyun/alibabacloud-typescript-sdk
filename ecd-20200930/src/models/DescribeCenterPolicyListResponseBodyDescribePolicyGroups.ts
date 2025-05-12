// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules";
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules";
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes";
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects";
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules";
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule";
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule";
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule";


export class DescribeCenterPolicyListResponseBodyDescribePolicyGroups extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the admin permissions are granted to end users.
   * 
   * >  This parameter is in private preview and only available to specific users.
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * Indicates whether anti-screenshot is enabled.
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * The client IP address whitelists.
   */
  authorizeAccessPolicyRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * The security group rules.
   */
  authorizeSecurityPolicyRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  /**
   * @remarks
   * Indicates whether on-premises webcam redirection is enabled.
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The logon method control rules.
   */
  clientTypes?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes[];
  /**
   * @remarks
   * The read/write permissions on the clipboard.
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * Indicates whether color enhancement is enabled for design and 3D applications.
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
   * The CPU processors.
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * The CPU spike protection policy.
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
   * The number of cloud computers that are associated with the policy.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of cloud computer shares that are associated with the policy.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * The device redirection rules.
   */
  deviceRedirects?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects[];
  /**
   * @remarks
   * The custom peripheral rules.
   */
  deviceRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules[];
  /**
   * @remarks
   * Indicates whether the session is retained after disconnection.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * @example
   * persistent
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * The retention period of the session after disconnection. Unit: seconds.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * @example
   * 120
   */
  disconnectKeepSessionTime?: number;
  /**
   * @remarks
   * The display mode.
   * 
   * @example
   * adminCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * The field where the domain resolution policy is applied.
   * 
   * @example
   * xxxx
   */
  domainRegisterValue?: string;
  /**
   * @remarks
   * The domain resolution policies.
   */
  domainResolveRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule[];
  /**
   * @remarks
   * Indicates whether domain name resolution is allowed.
   * 
   * @example
   * on
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * Indicates whether end users are allowed to request administrator help.
   * 
   * @example
   * off
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * Indicates whether end users in the same office network can share cloud computers.
   * 
   * @example
   * off
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * Indicates whether image quality control is enabled. For optimal computer performance and user experience in professional design scenarios, we recommend enabling this feature.
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * The web client access policy.
   * 
   * @example
   * off
   */
  html5Access?: string;
  /**
   * @remarks
   * The file transfer feature on the web client.
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The network communication protocol.
   * 
   * @example
   * tcp
   */
  internetCommunicationProtocol?: string;
  internetPrinter?: string;
  /**
   * @remarks
   * The read/write permissions on the on-premises drive.
   * 
   * @example
   * readwrite
   */
  localDrive?: string;
  /**
   * @remarks
   * The maximum duration to retry reconnecting to cloud computers after an unexpected disconnection (non-human causes). Valid values: 30 to 7200. Unit: seconds.
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * The memory underclocking duration per process. Valid values: 30 to 120. Unit: seconds.
   * 
   * @example
   * 30
   */
  memoryDownGradeDuration?: number;
  /**
   * @remarks
   * The memory processors.
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * The memory spike protection policy.
   * 
   * @example
   * off
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
   * The memory usage per process. Valid values: 30 to 60. Unit: %.
   * 
   * @example
   * 30
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * Indicates whether the Restart button is displayed in the DesktopAssistant menu when end users connect to cloud computers from Android clients.
   * 
   * >  This feature applies to only mobile clients of version 7.4.0 or later.
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * Indicates whether the Stop button is displayed in the DesktopAssistant menu when end users connect to cloud computers from Android clients.
   * 
   * >  This feature applies to only mobile clients of version 7.4.0 or later.
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * The network redirection policy.
   * 
   * >  This parameter is in private preview and only available to specific users.
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The network redirection policies.
   * 
   * >  This parameter is in private preview and only available to specific users.
   */
  netRedirectRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule[];
  /**
   * @remarks
   * Indicates whether a disconnection is enforced upon inactivity.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * @example
   * off
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * The duration of disconnection after inactivity. Unit: seconds.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * @example
   * 120
   */
  noOperationDisconnectTime?: number;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * SYSTEM
   */
  policyGroupType?: string;
  /**
   * @remarks
   * The status of the cloud computer policy.
   * 
   * @example
   * AVAILABLE
   */
  policyStatus?: string;
  /**
   * @remarks
   * The printer redirection policy.
   * 
   * @example
   * off
   */
  printerRedirection?: string;
  /**
   * @remarks
   * Indicates whether image quality enhancement is enabled for design and 3D applications.
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * Indicates whether custom screen recording is enabled.
   * 
   * @example
   * off
   */
  recordContent?: string;
  /**
   * @remarks
   * The duration for which custom screen recordings are kept before they expire. Default value: 30 days.
   * 
   * @example
   * 30
   */
  recordContentExpires?: number;
  /**
   * @remarks
   * The duration of screen recording after the specified event is detected. Unit: minutes. Valid values: 10 to 60.
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * The absolute paths to screen recording files.
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * The absolute paths to screen recording registries.
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * Indicates whether screen recording is enabled.
   * 
   * @example
   * off
   */
  recording?: string;
  /**
   * @remarks
   * Indicates whether audio files generated on cloud computers are recorded.
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * The length of the screen recording file. Unit: minutes. Screen recording files are split by the specified length and uploaded to OSS buckets. Once a file reaches 300 MB, the system prioritizes rolling updates for that file.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The end time of screen recording. The value is in the HH:MM:SS format. The value is meaningful only when you set Recording to period.
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
   * @example
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * The start time of screen recording. The value is in the HH:MM:SS format. The value is meaningful only when you set Recording to period.
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * Indicates whether to notify end users when screen recording is enabled.
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * The notification sent to end users when screen recording is enabled.
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * The keyboard and mouse control permissions during remote assistance.
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixel.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The resolution type.
   * 
   * @example
   * adaptive
   */
  resolutionModel?: string;
  /**
   * @remarks
   * The width of the resolution. Unit: pixel.
   * 
   * @example
   * 1920
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The number of resource groups that are associated with the policy.
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  safeMenu?: string;
  /**
   * @remarks
   * The effective scope of the policy.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * The effective scopes specified by CIDR blocks.
   */
  scopeValue?: string[];
  /**
   * @remarks
   * Indicates whether smoothness enhancement is enabled for daily office use.
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * Indicates whether the metric status entry is displayed in the DesktopAssistant menu.
   * 
   * @example
   * on
   */
  statusMonitor?: string;
  /**
   * @remarks
   * The streaming mode.
   * 
   * @example
   * smooth
   */
  streamingMode?: string;
  /**
   * @remarks
   * The target frame rate. Valid values: 10 to 60. Unit: fps.
   * 
   * @example
   * 30
   */
  targetFps?: number;
  /**
   * @remarks
   * Indicates whether the application taskbar is displayed.
   * 
   * >  This parameter applies only to cloud application policies.
   * 
   * @example
   * off
   */
  taskbar?: string;
  /**
   * @remarks
   * The USB redirection policy.
   * 
   * @example
   * off
   */
  usbRedirect?: string;
  /**
   * @remarks
   * The USB redirection rules.
   */
  usbSupplyRedirectRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule[];
  /**
   * @remarks
   * The average bitrate for video encoding. Unit: Kbit/s. Valid values: 1000 to 50000.
   * 
   * @example
   * 1000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * The maximum QP for video files. Higher QP values result in lower video quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * The minimum quantizer parameter (QP) for video files. A lower QP means better video quality. Valid values: 0 to 51.
   * 
   * @example
   * 20
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * The peak bitrate for video encoding. Unit: Kbit/s. Valid values: 1000 to 50000.
   * 
   * @example
   * 2000
   */
  videoEncPeakKbps?: number;
  /**
   * @remarks
   * The video encoding policy.
   * 
   * @example
   * qualityFirst
   */
  videoEncPolicy?: string;
  /**
   * @remarks
   * Indicates whether multimedia redirection is enabled.
   * 
   * @example
   * off
   */
  videoRedirect?: string;
  /**
   * @remarks
   * The image quality policy.
   * 
   * @example
   * medium
   */
  visualQuality?: string;
  /**
   * @remarks
   * The watermark policy.
   * 
   * @example
   * on
   */
  watermark?: string;
  /**
   * @remarks
   * Indicates whether anti-screen capture is enabled for invisible watermarks.
   * 
   * @example
   * off
   */
  watermarkAntiCam?: string;
  /**
   * @remarks
   * The font color of the watermark. Valid values: 0 to 16777215.
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
   * custom-watermark
   */
  watermarkCustomText?: string;
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
   * The font size of the watermark. Valid values: 10 to 20.
   * 
   * @example
   * 10
   */
  watermarkFontSize?: number;
  /**
   * @remarks
   * The font style of the watermark.
   * 
   * @example
   * plain
   */
  watermarkFontStyle?: string;
  /**
   * @remarks
   * The enhancement level for invisible watermarks.
   * 
   * @example
   * medium
   */
  watermarkPower?: string;
  /**
   * @remarks
   * The number of watermark rows.
   * 
   * @example
   * 3
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * Indicates whether security priority is enabled for invisible watermarks.
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * The watermark transparency. A higher value means the watermark is less transparent. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The watermark type.
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * Indicates whether the Xiaoying AI Assistant entry is displayed in the DesktopAssistant menu.
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
      deviceRedirects: 'DeviceRedirects',
      deviceRules: 'DeviceRules',
      disconnectKeepSession: 'DisconnectKeepSession',
      disconnectKeepSessionTime: 'DisconnectKeepSessionTime',
      displayMode: 'DisplayMode',
      domainRegisterValue: 'DomainRegisterValue',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
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
      noOperationDisconnect: 'NoOperationDisconnect',
      noOperationDisconnectTime: 'NoOperationDisconnectTime',
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      policyStatus: 'PolicyStatus',
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
      resolutionHeight: 'ResolutionHeight',
      resolutionModel: 'ResolutionModel',
      resolutionWidth: 'ResolutionWidth',
      resourceGroupCount: 'ResourceGroupCount',
      safeMenu: 'SafeMenu',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      smoothEnhancement: 'SmoothEnhancement',
      statusMonitor: 'StatusMonitor',
      streamingMode: 'StreamingMode',
      targetFps: 'TargetFps',
      taskbar: 'Taskbar',
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
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
      wyAssistant: 'WyAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccess: 'string',
      appContentProtection: 'string',
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      cameraRedirect: 'string',
      clientTypes: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes },
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
      deviceRedirects: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules },
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      displayMode: 'string',
      domainRegisterValue: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule },
      domainResolveRuleType: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserGroupCoordinate: 'string',
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
      netRedirectRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule },
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      policyGroupId: 'string',
      policyGroupType: 'string',
      policyStatus: 'string',
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
      resolutionHeight: 'number',
      resolutionModel: 'string',
      resolutionWidth: 'number',
      resourceGroupCount: 'number',
      safeMenu: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      smoothEnhancement: 'string',
      statusMonitor: 'string',
      streamingMode: 'string',
      targetFps: 'number',
      taskbar: 'string',
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule },
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
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
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

