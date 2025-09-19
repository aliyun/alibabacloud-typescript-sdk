// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessMaliciousFilesResponseBodyListDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the detailed item.
   * 
   * @example
   * MD5
   */
  name?: string;
  /**
   * @remarks
   * The name key of the detailed item.
   * 
   * @example
   * ${suspicious.mp.db.maliciousfilemd5}
   */
  nameKey?: string;
  /**
   * @remarks
   * The type of the detailed item.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The value of the detailed item.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nameKey: 'NameKey',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nameKey: 'string',
      type: 'string',
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

export class ListAgentlessMaliciousFilesResponseBodyListNotes extends $dara.Model {
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * Serious***
   */
  note?: string;
  /**
   * @remarks
   * The ID of the remark.
   * 
   * @example
   * 50****
   */
  noteId?: string;
  /**
   * @remarks
   * The time when the remark was created.
   * 
   * @example
   * 2023-04-27 14:49:21
   */
  noteTime?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      noteId: 'NoteId',
      noteTime: 'NoteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      noteId: 'string',
      noteTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessMaliciousFilesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The details of the alert event.
   */
  details?: ListAgentlessMaliciousFilesResponseBodyListDetails[];
  /**
   * @remarks
   * The URL to download the malicious image sample.
   * 
   * @example
   * https://upgrade-rule-pkg.oss-cn-beijing.aliyuncs.com/totalpackage/rule/V3.166.2/totalpackage_rule_V3.16_6.2_tip_20230220110****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /root/etc/g****
   */
  filePath?: number;
  /**
   * @remarks
   * The timestamp generated when the first scan was performed. Unit: milliseconds.
   * 
   * @example
   * 168257753****
   */
  firstScanTimestamp?: number;
  /**
   * @remarks
   * The highlighted JSON string.
   * 
   * @example
   * {\\"highlight\\":{\\"ruleVersion\\":\\"20230223\\",\\"ruleId\\":600139,\\"events\\":[[207,284]]}}
   */
  highLight?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 1****
   */
  id?: number;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * sql-test-001****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp generated when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 168257753****
   */
  latestScanTimestamp?: number;
  /**
   * @remarks
   * The severity of the malicious file. Valid values:
   * 
   * *   serious
   * *   suspicious
   * *   remind
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The MD5 hash value of the malicious file.
   * 
   * @example
   * 1f2e13a7c51ee89316ae50066515****
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The name of the malicious file.
   * 
   * @example
   * WebShell
   */
  maliciousName?: string;
  /**
   * @remarks
   * The type of the virus.
   * 
   * @example
   * WebShell
   */
  maliciousType?: string;
  /**
   * @remarks
   * The remarks.
   */
  notes?: ListAgentlessMaliciousFilesResponseBodyListNotes[];
  /**
   * @remarks
   * The handling result of the alert.
   * 
   * @example
   * addWhitelist.USER.Success
   */
  operateResult?: string;
  /**
   * @remarks
   * The timestamp generated when the alert is handled. Unit: milliseconds.
   * 
   * @example
   * 168257753****
   */
  operateTimestamp?: string;
  /**
   * @remarks
   * The partition of the disk.
   * 
   * @example
   * /dev/xvda1
   */
  partition?: string;
  /**
   * @remarks
   * The ID of the asset that is scanned.
   * 
   * @example
   * m-****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the asset that is scanned.
   * 
   * @example
   * jenkins****
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the asset that is scanned. Valid values:
   * 
   * *   2: The scanned asset is an image.
   * 
   * @example
   * 2
   */
  targetType?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      downloadUrl: 'DownloadUrl',
      filePath: 'FilePath',
      firstScanTimestamp: 'FirstScanTimestamp',
      highLight: 'HighLight',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      latestScanTimestamp: 'LatestScanTimestamp',
      level: 'Level',
      maliciousMd5: 'MaliciousMd5',
      maliciousName: 'MaliciousName',
      maliciousType: 'MaliciousType',
      notes: 'Notes',
      operateResult: 'OperateResult',
      operateTimestamp: 'OperateTimestamp',
      partition: 'Partition',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ListAgentlessMaliciousFilesResponseBodyListDetails },
      downloadUrl: 'string',
      filePath: 'number',
      firstScanTimestamp: 'number',
      highLight: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      latestScanTimestamp: 'number',
      level: 'string',
      maliciousMd5: 'string',
      maliciousName: 'string',
      maliciousType: 'string',
      notes: { 'type': 'array', 'itemType': ListAgentlessMaliciousFilesResponseBodyListNotes },
      operateResult: 'string',
      operateTimestamp: 'string',
      partition: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(Array.isArray(this.notes)) {
      $dara.Model.validateArray(this.notes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessMaliciousFilesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessMaliciousFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The malicious files.
   */
  list?: ListAgentlessMaliciousFilesResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAgentlessMaliciousFilesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE343162-35BF-565E-B85E-8E3B7A2B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAgentlessMaliciousFilesResponseBodyList },
      pageInfo: ListAgentlessMaliciousFilesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

