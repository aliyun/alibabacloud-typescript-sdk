// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRelateMaliciousResponseBodyListDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the alert event detail item.
   * 
   * @example
   * MD5
   */
  name?: string;
  /**
   * @remarks
   * The name key of the alert event detail item.
   * 
   * @example
   * ${suspicious.mp.db.maliciousfilemd5}
   */
  nameKey?: string;
  /**
   * @remarks
   * The type of the alert event detail item.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The value of the alert event detail item.
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
   * The alert event details.
   */
  details?: ListAgentlessRelateMaliciousResponseBodyListDetails[];
  /**
   * @remarks
   * The download URL of the malicious sample.
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
   * The timestamp of the first scan. Unit: milliseconds.
   * 
   * @example
   * 168257753****
   */
  firstScanTimestamp?: number;
  /**
   * @remarks
   * The highlighted text, in JSON string format.
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
   * The name of the asset instance.
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
   * The timestamp of the latest scan. Unit: milliseconds.
   * 
   * @example
   * 168257753****
   */
  latestScanTimestamp?: number;
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * - serious: urgent
   * - suspicious: suspicious
   * - remind: reminder.
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The MD5 hash of the malicious file.
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
   * The virus type.
   * 
   * @example
   * WebShell
   */
  maliciousType?: string;
  /**
   * @remarks
   * The alert handling result.
   * 
   * @example
   * addWhitelist.USER.Success
   */
  operateResult?: string;
  /**
   * @remarks
   * The timestamp when the alert was handled. Unit: milliseconds.
   * 
   * @example
   * 168257753****
   */
  operateTimestamp?: string;
  /**
   * @remarks
   * The disk partition.
   * 
   * @example
   * /dev/xvda1
   */
  partition?: string;
  /**
   * @remarks
   * The ID of the task target.
   * 
   * @example
   * m-****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task target.
   * 
   * @example
   * image_***
   */
  targetName?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * - **1**: snapshot
   * - **2**: image.
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
   * The number of entries on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The list of servers with associated risks.
   */
  list?: ListAgentlessRelateMaliciousResponseBodyList[];
  /**
   * @remarks
   * The paging information for the paging query.
   */
  pageInfo?: ListAgentlessRelateMaliciousResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
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

