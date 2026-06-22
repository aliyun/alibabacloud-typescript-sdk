// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectEventResponseBodyData extends $dara.Model {
  analyzeDesc?: string;
  analyzeResult?: string;
  /**
   * @remarks
   * The process chain.
   * 
   * @example
   * [{"5133":"pickup -l -t unix -u"},{"1077":"/usr/libexec/postfix/master -w"},{"1":"/usr/lib/systemd/systemd --switched-root --system --deserialize 22"}]
   */
  cmdChain?: string;
  /**
   * @remarks
   * The process command line.
   * 
   * @example
   * /usr/sbin/sshd -D
   */
  cmdline?: string;
  /**
   * @remarks
   * The number of occurrences.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The timestamp of the first occurrence.
   * 
   * @example
   * 1694576692000
   */
  firstTime?: number;
  handleType?: string;
  /**
   * @remarks
   * The unique identifier of the file.
   * 
   * @example
   * 30368144069e7567bbb10eabc2******
   */
  hashKey?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * centos****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.42.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp of the most recent occurrence.
   * 
   * @example
   * 1694576692000
   */
  lastTime?: number;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * 5b394b54ca632fe51c4ab4a6dbaf****
   */
  md5?: string;
  /**
   * @remarks
   * The parent command line.
   * 
   * @example
   * /usr/sbin/sshd -D
   */
  parentCmdline?: string;
  /**
   * @remarks
   * The parent process ID.
   * 
   * @example
   * 12
   */
  parentPid?: string;
  /**
   * @remarks
   * The parent process path.
   * 
   * @example
   * /usr/bin/tar
   */
  parentProcessPath?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 11
   */
  pid?: string;
  /**
   * @remarks
   * The process path.
   * 
   * @example
   * /usr/bin/tar
   */
  processPath?: string;
  /**
   * @remarks
   * The SHA-256 hash of the file.
   * 
   * @example
   * 3a6fed5fc11392b3ee9f81caf017b48640d7458766a8eb0382899a605b41****
   */
  sha256?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - **1**: Unhandled.
   * - **2**: Blocked.
   * - **3**: Ignored.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the asset instance.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      analyzeDesc: 'AnalyzeDesc',
      analyzeResult: 'AnalyzeResult',
      cmdChain: 'CmdChain',
      cmdline: 'Cmdline',
      count: 'Count',
      firstTime: 'FirstTime',
      handleType: 'HandleType',
      hashKey: 'HashKey',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTime: 'LastTime',
      md5: 'Md5',
      parentCmdline: 'ParentCmdline',
      parentPid: 'ParentPid',
      parentProcessPath: 'ParentProcessPath',
      pid: 'Pid',
      processPath: 'ProcessPath',
      sha256: 'Sha256',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeDesc: 'string',
      analyzeResult: 'string',
      cmdChain: 'string',
      cmdline: 'string',
      count: 'number',
      firstTime: 'number',
      handleType: 'string',
      hashKey: 'string',
      id: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTime: 'number',
      md5: 'string',
      parentCmdline: 'string',
      parentPid: 'string',
      parentProcessPath: 'string',
      pid: 'string',
      processPath: 'string',
      sha256: 'string',
      status: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnknownThreatDetectEventResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of alerting events displayed on the current page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries displayed on each page in a paged query. This parameter is used for paging.
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
   * 149
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

export class ListUnknownThreatDetectEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data details.
   */
  data?: ListUnknownThreatDetectEventResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListUnknownThreatDetectEventResponseBodyPageInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUnknownThreatDetectEventResponseBodyData },
      pageInfo: ListUnknownThreatDetectEventResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

