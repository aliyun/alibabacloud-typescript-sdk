// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectMachineResponseBodyData extends $dara.Model {
  /**
   * @example
   * 12
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
   * 1
   */
  processCount?: number;
  /**
   * @example
   * studying
   */
  status?: string;
  /**
   * @example
   * hash
   */
  studyMode?: string;
  /**
   * @example
   * 1766988192
   */
  studyStartTime?: number;
  /**
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      processCount: 'ProcessCount',
      status: 'Status',
      studyMode: 'StudyMode',
      studyStartTime: 'StudyStartTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      processCount: 'number',
      status: 'string',
      studyMode: 'string',
      studyStartTime: 'number',
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

export class ListUnknownThreatDetectMachineResponseBodyPageInfo extends $dara.Model {
  /**
   * @example
   * 10
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

export class ListUnknownThreatDetectMachineResponseBody extends $dara.Model {
  data?: ListUnknownThreatDetectMachineResponseBodyData[];
  pageInfo?: ListUnknownThreatDetectMachineResponseBodyPageInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-XXXXXXXXX
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
      data: { 'type': 'array', 'itemType': ListUnknownThreatDetectMachineResponseBodyData },
      pageInfo: ListUnknownThreatDetectMachineResponseBodyPageInfo,
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

