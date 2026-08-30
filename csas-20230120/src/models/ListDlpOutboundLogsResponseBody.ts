// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDlpOutboundLogsResponseBodyLogsMatchedDictsInnerDicts extends $dara.Model {
  /**
   * @remarks
   * The number of matches.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The dictionary name.
   * 
   * @example
   * Identify Number
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDlpOutboundLogsResponseBodyLogsMatchedDictsKeywords extends $dara.Model {
  /**
   * @remarks
   * The number of matches.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The keyword name.
   * 
   * @example
   * Report
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDlpOutboundLogsResponseBodyLogsMatchedDictsUserDicts extends $dara.Model {
  /**
   * @remarks
   * The number of matches.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The dictionary name.
   * 
   * @example
   * Work Number
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDlpOutboundLogsResponseBodyLogsMatchedDicts extends $dara.Model {
  /**
   * @remarks
   * The matched built-in dictionaries.
   */
  innerDicts?: ListDlpOutboundLogsResponseBodyLogsMatchedDictsInnerDicts[];
  /**
   * @remarks
   * The matched keywords.
   */
  keywords?: ListDlpOutboundLogsResponseBodyLogsMatchedDictsKeywords[];
  /**
   * @remarks
   * The matched built-in dictionaries.
   */
  userDicts?: ListDlpOutboundLogsResponseBodyLogsMatchedDictsUserDicts[];
  static names(): { [key: string]: string } {
    return {
      innerDicts: 'InnerDicts',
      keywords: 'Keywords',
      userDicts: 'UserDicts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerDicts: { 'type': 'array', 'itemType': ListDlpOutboundLogsResponseBodyLogsMatchedDictsInnerDicts },
      keywords: { 'type': 'array', 'itemType': ListDlpOutboundLogsResponseBodyLogsMatchedDictsKeywords },
      userDicts: { 'type': 'array', 'itemType': ListDlpOutboundLogsResponseBodyLogsMatchedDictsUserDicts },
    };
  }

  validate() {
    if(Array.isArray(this.innerDicts)) {
      $dara.Model.validateArray(this.innerDicts);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    if(Array.isArray(this.userDicts)) {
      $dara.Model.validateArray(this.userDicts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDlpOutboundLogsResponseBodyLogsMatchedPolicies extends $dara.Model {
  /**
   * @remarks
   * The corresponding data level.
   * 
   * @example
   * L3
   */
  engineDataLevel?: string;
  /**
   * @remarks
   * The corresponding data type.
   * 
   * @example
   * Company Data
   */
  engineDataType?: string;
  /**
   * @remarks
   * The matched detection rule name.
   * 
   * @example
   * ID No
   */
  engineName?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * gitlab-tag-policy
   */
  policyDesc?: string;
  /**
   * @remarks
   * The matched policy name.
   * 
   * @example
   * default
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      engineDataLevel: 'EngineDataLevel',
      engineDataType: 'EngineDataType',
      engineName: 'EngineName',
      policyDesc: 'PolicyDesc',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineDataLevel: 'string',
      engineDataType: 'string',
      engineName: 'string',
      policyDesc: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDlpOutboundLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The file category.
   * 
   * @example
   * Document
   */
  category?: string;
  /**
   * @remarks
   * The primary channel ID.
   * 
   * @example
   * 3
   */
  channelId?: string;
  /**
   * @remarks
   * The primary channel.
   * 
   * @example
   * Web Upload
   */
  channelType?: string;
  /**
   * @remarks
   * The department.
   * 
   * @example
   * R&D Department
   */
  department?: string;
  /**
   * @remarks
   * The local path of the file on the device.
   * 
   * @example
   * C:\\Users\\a\\Desktop\\x.xlsx
   */
  devFilePath?: string;
  /**
   * @remarks
   * The unique identifier of the device.
   * 
   * @example
   * 69FFB8EB-3E5E-5F11-A9D3-59ED8CBB345D
   */
  deviceTag?: string;
  /**
   * @remarks
   * The device type.
   * 
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @remarks
   * The storage policy ID.
   * 
   * @example
   * 12345
   */
  dlpStorageConfigId?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * OSS
   */
  dlpStorageType?: string;
  /**
   * @remarks
   * The outbound destination address or URL.
   * 
   * @example
   * https://mail.example.com
   */
  dstAddr?: string;
  /**
   * @remarks
   * The file source.
   * 
   * @example
   * download
   */
  fileOrigin?: string;
  /**
   * @remarks
   * The host of the file source.
   * 
   * @example
   * drive.example.com
   */
  fileOriginHost?: string;
  /**
   * @remarks
   * The referrer of the file source.
   * 
   * @example
   * https://drive.example.com/
   */
  fileOriginReferrer?: string;
  /**
   * @remarks
   * The file content preview snippet.
   * 
   * @example
   * preview
   */
  filePreview?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * xlsx
   */
  format?: string;
  /**
   * @remarks
   * The organizational structure path.
   * 
   * @example
   * R&D Center-Data Platform Team
   */
  groupInfo?: string;
  /**
   * @remarks
   * The hostname of the device.
   * 
   * @example
   * MacBook-Pro
   */
  hostName?: string;
  /**
   * @remarks
   * LogId
   * 
   * @example
   * da817m4mfrcs6xxxx3hg
   */
  logId?: string;
  /**
   * @remarks
   * The matched dictionary statistics.
   */
  matchedDicts?: ListDlpOutboundLogsResponseBodyLogsMatchedDicts;
  /**
   * @remarks
   * The list of matched policy details.
   */
  matchedPolicies?: ListDlpOutboundLogsResponseBodyLogsMatchedPolicies[];
  /**
   * @remarks
   * The object path of the sensitive file in the storage bucket.
   * 
   * @example
   * dlp/2026/08/10/xxx.xlsx
   */
  ossFileName?: string;
  /**
   * @remarks
   * The policy action.
   * 
   * @example
   * block_and_hint
   */
  policyAction?: string;
  /**
   * @remarks
   * The list of matched policy names.
   */
  policyName?: string[];
  /**
   * @remarks
   * The outbound process name.
   * 
   * @example
   * chrome.exe
   */
  processName?: string;
  /**
   * @remarks
   * The secondary channel description.
   * 
   * @example
   * WeCom-FileSend
   */
  processNameDesc?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The matched risk scenario.
   * 
   * @example
   * file
   */
  scene?: string;
  /**
   * @remarks
   * The storage path of the screenshot file.
   * 
   * @example
   * dlp/screen/xxx.png
   */
  screenFilePath?: string;
  /**
   * @remarks
   * The file size.
   * 
   * @example
   * 1048576
   */
  size?: string;
  /**
   * @remarks
   * The original file name.
   * 
   * @example
   * 2026Q2FinancialReport.xlsx
   */
  srcFileName?: string;
  /**
   * @remarks
   * The source IP address of the device.
   * 
   * @example
   * 10.0.0.5
   */
  srcIp?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2026-08-10 14:03:22
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the log was reported.
   * 
   * @example
   * 2026-08-10 14:03:25
   */
  uploadTime?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      department: 'Department',
      devFilePath: 'DevFilePath',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      dlpStorageConfigId: 'DlpStorageConfigId',
      dlpStorageType: 'DlpStorageType',
      dstAddr: 'DstAddr',
      fileOrigin: 'FileOrigin',
      fileOriginHost: 'FileOriginHost',
      fileOriginReferrer: 'FileOriginReferrer',
      filePreview: 'FilePreview',
      format: 'Format',
      groupInfo: 'GroupInfo',
      hostName: 'HostName',
      logId: 'LogId',
      matchedDicts: 'MatchedDicts',
      matchedPolicies: 'MatchedPolicies',
      ossFileName: 'OssFileName',
      policyAction: 'PolicyAction',
      policyName: 'PolicyName',
      processName: 'ProcessName',
      processNameDesc: 'ProcessNameDesc',
      riskLevel: 'RiskLevel',
      scene: 'Scene',
      screenFilePath: 'ScreenFilePath',
      size: 'Size',
      srcFileName: 'SrcFileName',
      srcIp: 'SrcIp',
      startTime: 'StartTime',
      uploadTime: 'UploadTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      channelId: 'string',
      channelType: 'string',
      department: 'string',
      devFilePath: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      dlpStorageConfigId: 'string',
      dlpStorageType: 'string',
      dstAddr: 'string',
      fileOrigin: 'string',
      fileOriginHost: 'string',
      fileOriginReferrer: 'string',
      filePreview: 'string',
      format: 'string',
      groupInfo: 'string',
      hostName: 'string',
      logId: 'string',
      matchedDicts: ListDlpOutboundLogsResponseBodyLogsMatchedDicts,
      matchedPolicies: { 'type': 'array', 'itemType': ListDlpOutboundLogsResponseBodyLogsMatchedPolicies },
      ossFileName: 'string',
      policyAction: 'string',
      policyName: { 'type': 'array', 'itemType': 'string' },
      processName: 'string',
      processNameDesc: 'string',
      riskLevel: 'string',
      scene: 'string',
      screenFilePath: 'string',
      size: 'string',
      srcFileName: 'string',
      srcIp: 'string',
      startTime: 'string',
      uploadTime: 'string',
      user: 'string',
    };
  }

  validate() {
    if(this.matchedDicts && typeof (this.matchedDicts as any).validate === 'function') {
      (this.matchedDicts as any).validate();
    }
    if(Array.isArray(this.matchedPolicies)) {
      $dara.Model.validateArray(this.matchedPolicies);
    }
    if(Array.isArray(this.policyName)) {
      $dara.Model.validateArray(this.policyName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDlpOutboundLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log objects.
   */
  logs?: ListDlpOutboundLogsResponseBodyLogs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9350F06D-80FB-5B8B-983A-0E25CBD08479
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the query conditions.
   * 
   * @example
   * 120
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListDlpOutboundLogsResponseBodyLogs },
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

