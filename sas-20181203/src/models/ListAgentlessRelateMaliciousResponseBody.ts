// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRelateMaliciousResponseBodyListDetails extends $dara.Model {
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
   * 1f2e13a7c51ee89316ae50066515****
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

export class ListAgentlessRelateMaliciousResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The details of the alert events.
   */
  details?: ListAgentlessRelateMaliciousResponseBodyListDetails[];
  /**
   * @remarks
   * The URL to download the malicious image sample.
   * 
   * @example
   * https://upgrade-rule-pkg.oss-cn-beijing.aliyuncs.com/totalpackage/***
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /root/logs/arms/tracelogs/log****
   */
  filePath?: string;
  /**
   * @remarks
   * The timestamp when the first scan was performed. Unit: milliseconds.
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
   * 8012
   */
  id?: number;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * sql-test-0****
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
   * The timestamp when the last scan was performed. Unit: milliseconds.
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
   * The handling result of the alert.
   * 
   * @example
   * addWhitelist.USER.Success
   */
  operateResult?: string;
  /**
   * @remarks
   * The timestamp when the alert is handled. Unit: milliseconds.
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
   * The ID of the task object.
   * 
   * @example
   * m-****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * image_***
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the task object. Valid values:
   * 
   * *   **1**: snapshot.
   * *   **2**: image.
   * 
   * @example
   * 2
   */
  targetType?: string;
  /**
   * @remarks
   * The UUID of the server.
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
      details: { 'type': 'array', 'itemType': ListAgentlessRelateMaliciousResponseBodyListDetails },
      downloadUrl: 'string',
      filePath: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessRelateMaliciousResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 197
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

export class ListAgentlessRelateMaliciousResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of hosts that are associated with the risk.
   */
  list?: ListAgentlessRelateMaliciousResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAgentlessRelateMaliciousResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FCA270CC-24C8-5DA1-9184-20F2605C****
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
      list: { 'type': 'array', 'itemType': ListAgentlessRelateMaliciousResponseBodyList },
      pageInfo: ListAgentlessRelateMaliciousResponseBodyPageInfo,
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

