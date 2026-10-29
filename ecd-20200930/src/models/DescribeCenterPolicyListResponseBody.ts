// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAppScreenshotBuckets extends $dara.Model {
  /**
   * @remarks
   * Bucket 名稱。
   * 
   * @example
   * my-bucket-01
   */
  bucketName?: string;
  /**
   * @remarks
   * 使用者 OSS Bucket 所在地域，必須與 Bucket 的實際地域一致。
   * 
   * @example
   * cn-beijing
   */
  bucketRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketRegionId: 'BucketRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $dara.Model {
  /**
   * @remarks
   * 用戶端存取 IP 位址區段。格式為 CIDR 格式的 IPv4 位址區段。
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * 用戶端存取 IP 位址區段備註資訊。
   * 
   * @example
   * 公司辦公網段
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules extends $dara.Model {
  /**
   * @remarks
   * 安全性群組管控規則的對象，CIDR 格式的 IPv4 位址區段。
   * 
   * @example
   * 47.100.XX.XX/16
   */
  cidrIp?: string;
  /**
   * @remarks
   * 安全性群組管控規則的描述資訊。
   * 
   * @example
   * 允許存取內網研發環境
   */
  description?: string;
  /**
   * @remarks
   * 安全性群組管控規則的通訊協定類型。
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * 安全性群組管控規則的授權原則。
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * 安全性群組管控規則的連接埠範圍。
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * 安全性群組管控規則的優先順序，數字越小，代表優先順序越高。
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * 安全性群組管控規則的規則方向。
   * 
   * @example
   * inflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes extends $dara.Model {
  /**
   * @remarks
   * 用戶端類型。
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * 是否允許某一類型的用戶端登入雲端桌面。
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects extends $dara.Model {
  /**
   * @remarks
   * 周邊裝置類型。
   * 
   * @example
   * camera
   */
  deviceType?: string;
  /**
   * @remarks
   * 重新導向類型。
   * 
   * @example
   * usbRedirect
   */
  redirectType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      redirectType: 'RedirectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      redirectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules extends $dara.Model {
  /**
   * @remarks
   * 裝置名稱。
   * 
   * @example
   * sandisk
   */
  deviceName?: string;
  /**
   * @remarks
   * 產品 ID。
   * 
   * @example
   * 0x55b1
   */
  devicePid?: string;
  /**
   * @remarks
   * 周邊裝置類型。
   * 
   * @example
   * storage
   */
  deviceType?: string;
  /**
   * @remarks
   * 生產廠商 ID。參見 [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf)。
   * 
   * @example
   * 0x0781
   */
  deviceVid?: string;
  /**
   * @remarks
   * 連結最佳化指令。
   * 
   * @example
   * 2:0
   */
  optCommand?: string;
  /**
   * @remarks
   * 裝置規則適用的平台類型。
   * 
   * @example
   * Windows
   */
  platforms?: string;
  /**
   * @remarks
   * 重新導向類型。
   * 
   * @example
   * usbRedirect
   */
  redirectType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      devicePid: 'DevicePid',
      deviceType: 'DeviceType',
      deviceVid: 'DeviceVid',
      optCommand: 'OptCommand',
      platforms: 'Platforms',
      redirectType: 'RedirectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      devicePid: 'string',
      deviceType: 'string',
      deviceVid: 'string',
      optCommand: 'string',
      platforms: 'string',
      redirectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule extends $dara.Model {
  /**
   * @remarks
   * 原則描述。
   * 
   * @example
   * 測試規則
   */
  description?: string;
  /**
   * @remarks
   * 網域。
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * 解析原則。
   * 
   * @example
   * allow
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
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

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule extends $dara.Model {
  /**
   * @remarks
   * 網域。
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * 重新導向策略。
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * 規則類型。
   * 
   * @example
   * domain
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule extends $dara.Model {
  /**
   * @remarks
   * 規則描述。
   * 
   * @example
   * 測試規則
   */
  description?: string;
  /**
   * @remarks
   * 產品 ID。
   * 
   * @example
   * 08**
   */
  productId?: string;
  /**
   * @remarks
   * USB 重新導向類型。
   * 
   * @example
   * 1
   */
  usbRedirectType?: number;
  /**
   * @remarks
   * USB 重新導向規則類型。
   * 
   * @example
   * 1
   */
  usbRuleType?: number;
  /**
   * @remarks
   * 生產廠商 ID。參見 [Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf)。
   * 
   * @example
   * 04**
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenterPolicyListResponseBodyDescribePolicyGroups extends $dara.Model {
  /**
   * @remarks
   * 學術代理功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  academicProxy?: string;
  /**
   * @remarks
   * 使用者連線雲端電腦後是否具有管理員權限。
   * 
   * > 該功能處於定向邀測中，暫不對外開放。
   * 
   * @example
   * deny
   */
  adminAccess?: string;
  /**
   * @remarks
   * 全螢幕模式下管理員鍵盤控制開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  adminKeyboardOnFullScreen?: string;
  /**
   * @remarks
   * Windows 系統內管理員鍵盤控制開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  adminKeyboardOnWindows?: string;
  /**
   * @remarks
   * 管理員監控開關。取值範圍：
   * - 1：開啟。
   * - 0：關閉。
   * 
   * @example
   * 0
   */
  adminMonitor?: number;
  /**
   * @remarks
   * 是否開啟防截圖功能。
   * 
   * @example
   * off
   */
  appContentProtection?: string;
  /**
   * @remarks
   * 防截圖行動裝置截圖自訂 OSS Bucket 清單。
   */
  appScreenshotBuckets?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAppScreenshotBuckets[];
  /**
   * @remarks
   * 用戶端存取 IP 白名單。
   */
  authorizeAccessPolicyRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  /**
   * @remarks
   * 安全性群組管控規則清單。
   */
  authorizeSecurityPolicyRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  /**
   * @remarks
   * 用戶端自動重新連線開關。
   * 
   * @example
   * off
   */
  autoReconnect?: string;
  /**
   * @remarks
   * 自動儲存行動裝置截圖。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  autoSaveAppScreenshot?: string;
  /**
   * @remarks
   * 是否開啟本機攝影機重新導向。
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * 用戶端控制選單顯示開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * on
   */
  clientControlMenu?: string;
  /**
   * @remarks
   * 用戶端建立自訂快照功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  clientCreateSnapshot?: string;
  /**
   * @remarks
   * 用戶端休眠選單開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  clientHibernate?: string;
  /**
   * @remarks
   * 用戶端重新啟動選單開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  clientRestart?: string;
  /**
   * @remarks
   * 用戶端關機選單開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  clientShutdown?: string;
  /**
   * @remarks
   * 登入方式管控規則。
   */
  clientTypes?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes[];
  /**
   * @remarks
   * 剪貼簿權限。
   * 
   * @example
   * off
   */
  clipboard?: string;
  /**
   * @remarks
   * 設計及 3D 應用場景選擇是否開啟色彩增強。
   * 
   * @example
   * off
   */
  colorEnhancement?: string;
  /**
   * @remarks
   * 本機驅動程式剪貼簿功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  cpdDriveClipboard?: string;
  /**
   * @remarks
   * CPU 降頻時長，取值範圍： 30\\~120。單位：秒。
   * 
   * @example
   * 30
   */
  cpuDownGradeDuration?: number;
  /**
   * @remarks
   * CPU 負載保護開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  cpuOverload?: string;
  /**
   * @remarks
   * 處理程序名稱。
   */
  cpuProcessors?: string[];
  /**
   * @remarks
   * CPU 保護模式開關。
   * 
   * @example
   * on
   */
  cpuProtectedMode?: string;
  /**
   * @remarks
   * CPU 整體使用率百分比，取值範圍： 70\\~90。
   * 
   * @example
   * 70
   */
  cpuRateLimit?: number;
  /**
   * @remarks
   * CPU 整體取樣時長，取值範圍： 10\\~60。單位：秒。
   * 
   * @example
   * 10
   */
  cpuSampleDuration?: number;
  /**
   * @remarks
   * CPU 單核心使用率百分比，取值範圍： 70\\~100。
   * 
   * @example
   * 70
   */
  cpuSingleRateLimit?: number;
  /**
   * @remarks
   * 已關聯該原則的雲端電腦數量。
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * 已關聯該原則的雲端電腦集區數量。
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * 周邊裝置連線提示控制。
   * 
   * @example
   * off
   */
  deviceConnectHint?: string;
  /**
   * @remarks
   * 裝置重新導向規則。
   */
  deviceRedirects?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects[];
  /**
   * @remarks
   * 自訂周邊裝置規則。
   */
  deviceRules?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules[];
  /**
   * @remarks
   * 工作階段斷線保留。
   * > 僅適用於雲端應用程式原則。
   * 
   * @example
   * persistent
   */
  disconnectKeepSession?: string;
  /**
   * @remarks
   * 工作階段斷線保留時長。單位：秒。
   * > 僅適用於雲端應用程式原則。
   * 
   * @example
   * 120
   */
  disconnectKeepSessionTime?: number;
  /**
   * @remarks
   * 磁碟負載保護開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  diskOverload?: string;
  /**
   * @remarks
   * 顯示模式。
   * 
   * @example
   * adminCustom
   */
  displayMode?: string;
  /**
   * @remarks
   * 網域解析生效欄位。
   * 
   * @example
   * example.com
   */
  domainRegisterValue?: string;
  /**
   * @remarks
   * 網域解析原則詳情。
   */
  domainResolveRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule[];
  /**
   * @remarks
   * 網域解析原則開關。
   * 
   * @example
   * on
   */
  domainResolveRuleType?: string;
  /**
   * @remarks
   * 使用者請求管理員協助。
   * 
   * @example
   * off
   */
  endUserApplyAdminCoordinate?: string;
  /**
   * @remarks
   * 關聯的終端使用者數量。
   * 
   * @example
   * 3
   */
  endUserCount?: string;
  /**
   * @remarks
   * 同一個辦公網路下使用者共享雲端電腦。
   * 
   * @example
   * off
   */
  endUserGroupCoordinate?: string;
  /**
   * @remarks
   * 外接儲存裝置使用開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  externalDrive?: string;
  /**
   * @remarks
   * 檔案遷移。
   * 
   * @example
   * off
   */
  fileMigrate?: string;
  /**
   * @remarks
   * 檔案傳輸功能的服務位址。
   * 
   * @example
   * filetransfer.example.com
   */
  fileTransferAddress?: string;
  /**
   * @remarks
   * 單次傳入雲端電腦的檔案大小限制，需與傳入單位參數配合使用。
   * 
   * @example
   * 100
   */
  fileTransferInSize?: string;
  /**
   * @remarks
   * 單次傳入雲端電腦的檔案大小限制單位。
   * 
   * @example
   * MB
   */
  fileTransferInUnit?: string;
  /**
   * @remarks
   * 單次從雲端電腦傳出的檔案大小限制，需與傳出單位參數配合使用。
   * 
   * @example
   * 100
   */
  fileTransferOutSize?: string;
  /**
   * @remarks
   * 單次從雲端電腦傳出的檔案大小限制單位。
   * 
   * @example
   * MB
   */
  fileTransferOutUnit?: string;
  /**
   * @remarks
   * 檔案傳輸大小限制開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  fileTransferSizeLimit?: string;
  /**
   * @remarks
   * 檔案傳輸速度檔位。
   * 
   * @example
   * default
   */
  fileTransferSpeed?: string;
  /**
   * @remarks
   * 用戶端設定的檔案傳輸速度生效位置。
   * 
   * @example
   * client
   */
  fileTransferSpeedLocation?: string;
  /**
   * @remarks
   * 檔案同步開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  folderSync?: string;
  /**
   * @remarks
   * 是否為圖形型規格雲端電腦開啟畫質策略。對雲端電腦效能和使用體驗要求較高時，例如專業設計場景下，建議開啟該策略。
   * 
   * @example
   * off
   */
  gpuAcceleration?: string;
  /**
   * @remarks
   * 懸浮球設定訊息提示開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  hoverConfigMsg?: string;
  /**
   * @remarks
   * 懸浮球休眠按鈕開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  hoverHibernate?: string;
  /**
   * @remarks
   * 懸浮球重新啟動按鈕開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  hoverRestart?: string;
  /**
   * @remarks
   * 懸浮球關機按鈕開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  hoverShutdown?: string;
  /**
   * @remarks
   * Web用戶端存取策略。
   * 
   * @example
   * off
   */
  html5Access?: string;
  /**
   * @remarks
   * Web用戶端檔案傳輸策略。
   * 
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * 網路通訊協定。
   * 
   * @example
   * tcp
   */
  internetCommunicationProtocol?: string;
  /**
   * @remarks
   * 網路印表機功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  internetPrinter?: string;
  /**
   * @remarks
   * 懸浮球鍵盤控制開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  keyboardControl?: string;
  /**
   * @remarks
   * KMS 伺服器開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  kmsServer?: string;
  /**
   * @remarks
   * KMS 伺服器設定，格式為位址:連接埠。
   * 
   * @example
   * kms.example.com:1688
   */
  kmsServerConfig?: string;
  /**
   * @remarks
   * 本機磁碟映射權限。
   * 
   * @example
   * readwrite
   */
  localDrive?: string;
  /**
   * @remarks
   * 雲端電腦由於客觀原因造成中斷連線的最大連線重試時間。取值範圍：30\\~7200，單位：秒。
   * 
   * @example
   * 120
   */
  maxReconnectTime?: number;
  /**
   * @remarks
   * 開啟 MCP 服務。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  mcpService?: string;
  /**
   * @remarks
   * 單個處理程序記憶體降頻時長，取值範圍： 30\\~120。單位：秒。
   * 
   * @example
   * 30
   */
  memoryDownGradeDuration?: number;
  /**
   * @remarks
   * 記憶體負載保護開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  memoryOverload?: string;
  /**
   * @remarks
   * 處理程序名稱。
   */
  memoryProcessors?: string[];
  /**
   * @remarks
   * 記憶體保護模式開關。
   * 
   * @example
   * off
   */
  memoryProtectedMode?: string;
  /**
   * @remarks
   * 記憶體整體使用率百分比，取值範圍： 70\\~90。
   * 
   * @example
   * 70
   */
  memoryRateLimit?: number;
  /**
   * @remarks
   * 記憶體整體取樣時長，取值範圍： 30\\~60。單位：秒。
   * 
   * @example
   * 30
   */
  memorySampleDuration?: number;
  /**
   * @remarks
   * 單個處理程序記憶體使用率百分比，取值範圍： 30\\~60。
   * 
   * @example
   * 30
   */
  memorySingleRateLimit?: number;
  /**
   * @remarks
   * 透過行動端（Android用戶端<props="china">和iOS用戶端）連線雲端電腦時，是否在雲端電腦懸浮球內提供重新啟動按鈕。
   * 
   * > 僅適用於V7.4或更高版本的行動端。
   * 
   * @example
   * off
   */
  mobileRestart?: string;
  /**
   * @remarks
   * 行動端Windows 安全性控制開關。
   * 
   * @example
   * off
   */
  mobileSafeMenu?: string;
  /**
   * @remarks
   * 透過行動端（Android用戶端<props="china">和iOS用戶端）連線雲端電腦時，是否在雲端電腦懸浮球內提供關機按鈕。
   * 
   * > 僅適用於V7.4或更高版本的行動端。
   * 
   * @example
   * off
   */
  mobileShutdown?: string;
  /**
   * @remarks
   * 行動端無影管家開關。
   * 
   * @example
   * off
   */
  mobileWuyingKeeper?: string;
  /**
   * @remarks
   * 行動端小穎的開關。
   * 
   * @example
   * off
   */
  mobileWyAssistant?: string;
  /**
   * @remarks
   * 模型庫功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  modelLibrary?: string;
  /**
   * @remarks
   * 多螢幕顯示功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  multiScreen?: string;
  /**
   * @remarks
   * 策略名稱。
   * 
   * @example
   * testPolicyGroupName
   */
  name?: string;
  /**
   * @remarks
   * 網路重新導向。
   * 
   * > 該功能處於定向邀測中，暫不對外開放。
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * 網路重新導向策略詳細資訊。
   * 
   * > 該功能處於定向邀測中，暫不對外開放。
   * >
   */
  netRedirectRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule[];
  /**
   * @remarks
   * 網路印表機功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  networkPrinter?: string;
  /**
   * @remarks
   * 無操作中斷連線。
   * > 僅適用於雲端應用策略。
   * 
   * @example
   * off
   */
  noOperationDisconnect?: string;
  /**
   * @remarks
   * 無操作中斷連線時長。單位：秒。
   * > 僅適用於雲端應用策略。
   * 
   * @example
   * 120
   */
  noOperationDisconnectTime?: number;
  /**
   * @remarks
   * 關聯的組織數量。
   * 
   * @example
   * 2
   */
  organizationCount?: string;
  /**
   * @remarks
   * 策略ID。
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * 策略類型。
   * 
   * @example
   * SYSTEM
   */
  policyGroupType?: string;
  /**
   * @remarks
   * 雲端電腦策略狀態。
   * 
   * @example
   * AVAILABLE
   */
  policyStatus?: string;
  /**
   * @remarks
   * 連接埠代理功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  portProxy?: string;
  /**
   * @remarks
   * 印表機彈出視窗提示。取值範圍：
   * - default：預設值。
   * - off：關閉。
   * - custom：自訂。
   * 
   * @example
   * off
   */
  printerAlert?: string;
  /**
   * @remarks
   * 印表機彈出視窗提示內容。
   * 
   * @example
   * Print Content.
   */
  printerAlertContent?: string;
  /**
   * @remarks
   * 印表機彈出視窗提示標題。
   * 
   * @example
   * Print Title
   */
  printerAlertTitle?: string;
  /**
   * @remarks
   * 印表機重新導向策略。
   * 
   * @example
   * off
   */
  printerRedirection?: string;
  /**
   * @remarks
   * 設計及3D應用場景選擇是否開啟畫質增強。
   * 
   * @example
   * off
   */
  qualityEnhancement?: string;
  /**
   * @remarks
   * 是否開啟自訂螢幕錄影。
   * 
   * @example
   * off
   */
  recordContent?: string;
  /**
   * @remarks
   * 自訂螢幕錄影的檔案過期時間，預設30天。
   * 
   * @example
   * 30
   */
  recordContentExpires?: number;
  /**
   * @remarks
   * 螢幕錄影稽核中偵測到事件發生後螢幕錄影的時長。單位：分鐘。取值範圍：10\\~60。
   * 
   * @example
   * 10
   */
  recordEventDuration?: number;
  /**
   * @remarks
   * 螢幕錄影稽核中的檔案監控絕對路徑。
   */
  recordEventFilePaths?: string[];
  /**
   * @remarks
   * 螢幕錄影稽核中的登錄檔監控絕對路徑。
   */
  recordEventRegisters?: string[];
  /**
   * @remarks
   * 是否開啟螢幕錄影。
   * 
   * @example
   * off
   */
  recording?: string;
  /**
   * @remarks
   * 錄製雲端電腦聲音選項。
   * 
   * @example
   * on
   */
  recordingAudio?: string;
  /**
   * @remarks
   * 螢幕錄影檔案閱覽時長，單位為分鐘。錄製檔案會根據您設定的時長自動分割並上傳至儲存空間，檔案達到300MB時優先滾動更新。
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * 螢幕錄影結束時間，取值：HH:MM:SS。只有Recording取值是period時，該傳回值有實際意義。
   * 
   * @example
   * 08:59:00
   */
  recordingEndTime?: string;
  /**
   * @remarks
   * 螢幕錄影檔案的保留時間。取值範圍為1\\~180天。
   * 
   * @example
   * 15
   */
  recordingExpires?: number;
  /**
   * @remarks
   * 螢幕錄影幀率。單位：FPS（幀/秒）。
   * 
   * @example
   * 5
   */
  recordingFps?: number;
  /**
   * @remarks
   * 螢幕錄影開始時間，取值：HH:MM:SS。只有Recording取值是period時，該傳回值有實際意義。
   * 
   * @example
   * 08:00:00
   */
  recordingStartTime?: string;
  /**
   * @remarks
   * 提示終端客戶已開啟螢幕錄影。
   * 
   * @example
   * off
   */
  recordingUserNotify?: string;
  /**
   * @remarks
   * 提示終端客戶開啟螢幕錄影的資訊。
   * 
   * @example
   * 螢幕錄影已開啟
   */
  recordingUserNotifyMessage?: string;
  /**
   * @remarks
   * 遠端協助鍵盤與滑鼠控制權限。
   * 
   * @example
   * fullControl
   */
  remoteCoordinate?: string;
  /**
   * @remarks
   * 重置雲端電腦。
   * 
   * @example
   * off
   */
  resetDesktop?: string;
  /**
   * @remarks
   * 螢幕解析度的 DPI 值。
   * 
   * @example
   * 96
   */
  resolutionDpi?: number;
  /**
   * @remarks
   * 解析度的高度。單位：畫素。
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * 解析度類型。
   * 
   * @example
   * adaptive
   */
  resolutionModel?: string;
  /**
   * @remarks
   * 解析度的寬度。單位：畫素。
   * 
   * @example
   * 1920
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * 已關聯該策略的資源群組數量。
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  /**
   * @remarks
   * 安全中心快速鍵開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  safeMenu?: string;
  /**
   * @remarks
   * 策略的生效範圍。
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  /**
   * @remarks
   * 生效的 CIDR Block。
   */
  scopeValue?: string[];
  /**
   * @remarks
   * 螢幕顯示模式。
   * 
   * @example
   * auto
   */
  screenDisplayMode?: string;
  /**
   * @remarks
   * 日常辦公場景選擇，是否開啟平滑度增強。
   * 
   * @example
   * off
   */
  smoothEnhancement?: string;
  /**
   * @remarks
   * 是否在雲端電腦懸浮球內提供狀態監控功能入口。
   * 
   * @example
   * on
   */
  statusMonitor?: string;
  /**
   * @remarks
   * 串流模式適配場景。
   * 
   * @example
   * smooth
   */
  streamingMode?: string;
  /**
   * @remarks
   * 目標幀率，取值範圍：10\\~60。
   * 
   * @example
   * 30
   */
  targetFps?: number;
  /**
   * @remarks
   * 應用程式工作列。
   * > 僅適用於雲端應用程式策略。
   * 
   * @example
   * off
   */
  taskbar?: string;
  /**
   * @remarks
   * 三螢幕開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  threeScreen?: string;
  /**
   * @remarks
   * USB 重新導向。
   * 
   * @example
   * off
   */
  usbRedirect?: string;
  /**
   * @remarks
   * USB 重新導向規則。
   */
  usbSupplyRedirectRule?: DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule[];
  /**
   * @remarks
   * 懸浮球使用時長顯示開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  useTime?: string;
  /**
   * @remarks
   * 影片編碼平均位元率。單位：Kbps。取值範圍：1000\\~50000。
   * 
   * @example
   * 1000
   */
  videoEncAvgKbps?: number;
  /**
   * @remarks
   * 影片編碼最大 QP，畫面最低品質，取值範圍：0\\~51。
   * 
   * @example
   * 20
   */
  videoEncMaxQP?: number;
  /**
   * @remarks
   * 影片編碼最小 QP，最高品質。取值範圍：0\\~51。
   * 
   * @example
   * 20
   */
  videoEncMinQP?: number;
  /**
   * @remarks
   * 影片編碼峰值位元率。單位：Kbps。取值範圍：1000~50000。
   * 
   * @example
   * 2000
   */
  videoEncPeakKbps?: number;
  /**
   * @remarks
   * 影片編碼策略。
   * 
   * @example
   * qualityFirst
   */
  videoEncPolicy?: string;
  /**
   * @remarks
   * 多媒體重新導向。
   * 
   * @example
   * off
   */
  videoRedirect?: string;
  /**
   * @remarks
   * 影像顯示品質策略。
   * 
   * @example
   * medium
   */
  visualQuality?: string;
  /**
   * @remarks
   * 浮水印。
   * 
   * @example
   * on
   */
  watermark?: string;
  /**
   * @remarks
   * 隱藏式浮水印防拍照功能。
   * 
   * @example
   * off
   */
  watermarkAntiCam?: string;
  /**
   * @remarks
   * 浮水印字型顏色。取值範圍：0\\~16777215。
   * 
   * @example
   * 0
   */
  watermarkColor?: number;
  /**
   * @remarks
   * 若參數 `WatermarkType` 傳入 `custom`，則必須同時透過參數 `WatermarkCustomText` 傳入自訂文字的內容。
   * 
   * @example
   * custom-watermark
   */
  watermarkCustomText?: string;
  /**
   * @remarks
   * 浮水印傾斜度。取值範圍：-10\\~-30。
   * 
   * @example
   * -10
   */
  watermarkDegree?: number;
  /**
   * @remarks
   * 浮水印字型大小。取值範圍：10\\~20。
   * 
   * @example
   * 10
   */
  watermarkFontSize?: number;
  /**
   * @remarks
   * 浮水印字型樣式。
   * 
   * @example
   * plain
   */
  watermarkFontStyle?: string;
  /**
   * @remarks
   * 隱藏式浮水印增強功能。
   * 
   * @example
   * medium
   */
  watermarkPower?: string;
  /**
   * @remarks
   * 浮水印行數。
   * 
   * @example
   * 3
   */
  watermarkRowAmount?: number;
  /**
   * @remarks
   * 隱藏式浮水印安全優先規則。
   * 
   * @example
   * on
   */
  watermarkSecurity?: string;
  /**
   * @remarks
   * 浮水印陰影效果開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  watermarkShadow?: string;
  /**
   * @remarks
   * 浮水印透明度，值越大，透明度越小。取值範圍：10\\~100。
   * 
   * @example
   * 10
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * 浮水印類型。
   * 
   * @example
   * EndUserId
   */
  watermarkType?: string;
  /**
   * @remarks
   * 無影管家開關。
   * 
   * @example
   * off
   */
  wuyingKeeper?: string;
  /**
   * @remarks
   * 是否在雲端電腦懸浮球內提供無影 AI 助手功能入口。
   * 
   * @example
   * on
   */
  wyAssistant?: string;
  static names(): { [key: string]: string } {
    return {
      academicProxy: 'AcademicProxy',
      adminAccess: 'AdminAccess',
      adminKeyboardOnFullScreen: 'AdminKeyboardOnFullScreen',
      adminKeyboardOnWindows: 'AdminKeyboardOnWindows',
      adminMonitor: 'AdminMonitor',
      appContentProtection: 'AppContentProtection',
      appScreenshotBuckets: 'AppScreenshotBuckets',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      autoReconnect: 'AutoReconnect',
      autoSaveAppScreenshot: 'AutoSaveAppScreenshot',
      cameraRedirect: 'CameraRedirect',
      clientControlMenu: 'ClientControlMenu',
      clientCreateSnapshot: 'ClientCreateSnapshot',
      clientHibernate: 'ClientHibernate',
      clientRestart: 'ClientRestart',
      clientShutdown: 'ClientShutdown',
      clientTypes: 'ClientTypes',
      clipboard: 'Clipboard',
      colorEnhancement: 'ColorEnhancement',
      cpdDriveClipboard: 'CpdDriveClipboard',
      cpuDownGradeDuration: 'CpuDownGradeDuration',
      cpuOverload: 'CpuOverload',
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
      disconnectKeepSession: 'DisconnectKeepSession',
      disconnectKeepSessionTime: 'DisconnectKeepSessionTime',
      diskOverload: 'DiskOverload',
      displayMode: 'DisplayMode',
      domainRegisterValue: 'DomainRegisterValue',
      domainResolveRule: 'DomainResolveRule',
      domainResolveRuleType: 'DomainResolveRuleType',
      endUserApplyAdminCoordinate: 'EndUserApplyAdminCoordinate',
      endUserCount: 'EndUserCount',
      endUserGroupCoordinate: 'EndUserGroupCoordinate',
      externalDrive: 'ExternalDrive',
      fileMigrate: 'FileMigrate',
      fileTransferAddress: 'FileTransferAddress',
      fileTransferInSize: 'FileTransferInSize',
      fileTransferInUnit: 'FileTransferInUnit',
      fileTransferOutSize: 'FileTransferOutSize',
      fileTransferOutUnit: 'FileTransferOutUnit',
      fileTransferSizeLimit: 'FileTransferSizeLimit',
      fileTransferSpeed: 'FileTransferSpeed',
      fileTransferSpeedLocation: 'FileTransferSpeedLocation',
      folderSync: 'FolderSync',
      gpuAcceleration: 'GpuAcceleration',
      hoverConfigMsg: 'HoverConfigMsg',
      hoverHibernate: 'HoverHibernate',
      hoverRestart: 'HoverRestart',
      hoverShutdown: 'HoverShutdown',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      internetCommunicationProtocol: 'InternetCommunicationProtocol',
      internetPrinter: 'InternetPrinter',
      keyboardControl: 'KeyboardControl',
      kmsServer: 'KmsServer',
      kmsServerConfig: 'KmsServerConfig',
      localDrive: 'LocalDrive',
      maxReconnectTime: 'MaxReconnectTime',
      mcpService: 'McpService',
      memoryDownGradeDuration: 'MemoryDownGradeDuration',
      memoryOverload: 'MemoryOverload',
      memoryProcessors: 'MemoryProcessors',
      memoryProtectedMode: 'MemoryProtectedMode',
      memoryRateLimit: 'MemoryRateLimit',
      memorySampleDuration: 'MemorySampleDuration',
      memorySingleRateLimit: 'MemorySingleRateLimit',
      mobileRestart: 'MobileRestart',
      mobileSafeMenu: 'MobileSafeMenu',
      mobileShutdown: 'MobileShutdown',
      mobileWuyingKeeper: 'MobileWuyingKeeper',
      mobileWyAssistant: 'MobileWyAssistant',
      modelLibrary: 'ModelLibrary',
      multiScreen: 'MultiScreen',
      name: 'Name',
      netRedirect: 'NetRedirect',
      netRedirectRule: 'NetRedirectRule',
      networkPrinter: 'NetworkPrinter',
      noOperationDisconnect: 'NoOperationDisconnect',
      noOperationDisconnectTime: 'NoOperationDisconnectTime',
      organizationCount: 'OrganizationCount',
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      policyStatus: 'PolicyStatus',
      portProxy: 'PortProxy',
      printerAlert: 'PrinterAlert',
      printerAlertContent: 'PrinterAlertContent',
      printerAlertTitle: 'PrinterAlertTitle',
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
      resolutionDpi: 'ResolutionDpi',
      resolutionHeight: 'ResolutionHeight',
      resolutionModel: 'ResolutionModel',
      resolutionWidth: 'ResolutionWidth',
      resourceGroupCount: 'ResourceGroupCount',
      safeMenu: 'SafeMenu',
      scope: 'Scope',
      scopeValue: 'ScopeValue',
      screenDisplayMode: 'ScreenDisplayMode',
      smoothEnhancement: 'SmoothEnhancement',
      statusMonitor: 'StatusMonitor',
      streamingMode: 'StreamingMode',
      targetFps: 'TargetFps',
      taskbar: 'Taskbar',
      threeScreen: 'ThreeScreen',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      useTime: 'UseTime',
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
      watermarkShadow: 'WatermarkShadow',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkType: 'WatermarkType',
      wuyingKeeper: 'WuyingKeeper',
      wyAssistant: 'WyAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      academicProxy: 'string',
      adminAccess: 'string',
      adminKeyboardOnFullScreen: 'string',
      adminKeyboardOnWindows: 'string',
      adminMonitor: 'number',
      appContentProtection: 'string',
      appScreenshotBuckets: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAppScreenshotBuckets },
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      autoReconnect: 'string',
      autoSaveAppScreenshot: 'string',
      cameraRedirect: 'string',
      clientControlMenu: 'string',
      clientCreateSnapshot: 'string',
      clientHibernate: 'string',
      clientRestart: 'string',
      clientShutdown: 'string',
      clientTypes: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsClientTypes },
      clipboard: 'string',
      colorEnhancement: 'string',
      cpdDriveClipboard: 'string',
      cpuDownGradeDuration: 'number',
      cpuOverload: 'string',
      cpuProcessors: { 'type': 'array', 'itemType': 'string' },
      cpuProtectedMode: 'string',
      cpuRateLimit: 'number',
      cpuSampleDuration: 'number',
      cpuSingleRateLimit: 'number',
      desktopCount: 'number',
      desktopGroupCount: 'number',
      deviceConnectHint: 'string',
      deviceRedirects: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRedirects },
      deviceRules: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDeviceRules },
      disconnectKeepSession: 'string',
      disconnectKeepSessionTime: 'number',
      diskOverload: 'string',
      displayMode: 'string',
      domainRegisterValue: 'string',
      domainResolveRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsDomainResolveRule },
      domainResolveRuleType: 'string',
      endUserApplyAdminCoordinate: 'string',
      endUserCount: 'string',
      endUserGroupCoordinate: 'string',
      externalDrive: 'string',
      fileMigrate: 'string',
      fileTransferAddress: 'string',
      fileTransferInSize: 'string',
      fileTransferInUnit: 'string',
      fileTransferOutSize: 'string',
      fileTransferOutUnit: 'string',
      fileTransferSizeLimit: 'string',
      fileTransferSpeed: 'string',
      fileTransferSpeedLocation: 'string',
      folderSync: 'string',
      gpuAcceleration: 'string',
      hoverConfigMsg: 'string',
      hoverHibernate: 'string',
      hoverRestart: 'string',
      hoverShutdown: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      internetCommunicationProtocol: 'string',
      internetPrinter: 'string',
      keyboardControl: 'string',
      kmsServer: 'string',
      kmsServerConfig: 'string',
      localDrive: 'string',
      maxReconnectTime: 'number',
      mcpService: 'string',
      memoryDownGradeDuration: 'number',
      memoryOverload: 'string',
      memoryProcessors: { 'type': 'array', 'itemType': 'string' },
      memoryProtectedMode: 'string',
      memoryRateLimit: 'number',
      memorySampleDuration: 'number',
      memorySingleRateLimit: 'number',
      mobileRestart: 'string',
      mobileSafeMenu: 'string',
      mobileShutdown: 'string',
      mobileWuyingKeeper: 'string',
      mobileWyAssistant: 'string',
      modelLibrary: 'string',
      multiScreen: 'string',
      name: 'string',
      netRedirect: 'string',
      netRedirectRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsNetRedirectRule },
      networkPrinter: 'string',
      noOperationDisconnect: 'string',
      noOperationDisconnectTime: 'number',
      organizationCount: 'string',
      policyGroupId: 'string',
      policyGroupType: 'string',
      policyStatus: 'string',
      portProxy: 'string',
      printerAlert: 'string',
      printerAlertContent: 'string',
      printerAlertTitle: 'string',
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
      resolutionDpi: 'number',
      resolutionHeight: 'number',
      resolutionModel: 'string',
      resolutionWidth: 'number',
      resourceGroupCount: 'number',
      safeMenu: 'string',
      scope: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      screenDisplayMode: 'string',
      smoothEnhancement: 'string',
      statusMonitor: 'string',
      streamingMode: 'string',
      targetFps: 'number',
      taskbar: 'string',
      threeScreen: 'string',
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule },
      useTime: 'string',
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
      watermarkShadow: 'string',
      watermarkTransparencyValue: 'number',
      watermarkType: 'string',
      wuyingKeeper: 'string',
      wyAssistant: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appScreenshotBuckets)) {
      $dara.Model.validateArray(this.appScreenshotBuckets);
    }
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

export class DescribeCenterPolicyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * 雲端電腦原則的詳細資訊。
   */
  describePolicyGroups?: DescribeCenterPolicyListResponseBodyDescribePolicyGroups[];
  /**
   * @remarks
   * 請求 ID。
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * 查詢結果總數。
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      describePolicyGroups: 'DescribePolicyGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describePolicyGroups: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.describePolicyGroups)) {
      $dara.Model.validateArray(this.describePolicyGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

