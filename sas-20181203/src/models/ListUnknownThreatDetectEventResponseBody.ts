// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectEventResponseBodyData extends $dara.Model {
  /**
   * @example
   * [{"5133":"pickup -l -t unix -u"},{"1077":"/usr/libexec/postfix/master -w"},{"1":"/usr/lib/systemd/systemd --switched-root --system --deserialize 22"}]
   */
  cmdChain?: string;
  /**
   * @example
   * /usr/sbin/sshd -D
   */
  cmdline?: string;
  /**
   * @example
   * 5
   */
  count?: number;
  /**
   * @example
   * 1694576692000
   */
  firstTime?: number;
  /**
   * @example
   * 30368144069e7567bbb10eabc2******
   */
  hashKey?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * centos****
   */
  instanceName?: string;
  /**
   * @example
   * 172.16.XX.XX
   */
  internetIp?: string;
  /**
   * @example
   * 10.42.XX.XX
   */
  intranetIp?: string;
  /**
   * @example
   * 1694576692000
   */
  lastTime?: number;
  /**
   * @example
   * 5b394b54ca632fe51c4ab4a6dbaf****
   */
  md5?: string;
  /**
   * @example
   * /usr/sbin/sshd -D
   */
  parentCmdline?: string;
  /**
   * @example
   * 12
   */
  parentPid?: string;
  /**
   * @example
   * /usr/bin/tar
   */
  parentProcessPath?: string;
  /**
   * @example
   * 11
   */
  pid?: string;
  /**
   * @example
   * /usr/bin/tar
   */
  processPath?: string;
  /**
   * @example
   * 3a6fed5fc11392b3ee9f81caf017b48640d7458766a8eb0382899a605b41****
   */
  sha256?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      cmdChain: 'CmdChain',
      cmdline: 'Cmdline',
      count: 'Count',
      firstTime: 'FirstTime',
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
      cmdChain: 'string',
      cmdline: 'string',
      count: 'number',
      firstTime: 'number',
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
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
  data?: ListUnknownThreatDetectEventResponseBodyData[];
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

