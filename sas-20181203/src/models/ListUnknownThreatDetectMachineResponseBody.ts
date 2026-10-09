// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectMachineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of days the policy has been in effect.
   * 
   * @example
   * 0
   */
  effectDays?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * 12
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
   * The number of malicious processes.
   * 
   * @example
   * 0
   */
  maliciousProcessCount?: number;
  /**
   * @remarks
   * The number of normal events.
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  normalEventCount?: number;
  /**
   * @remarks
   * The plug-in status.
   */
  pluginStatus?: string;
  /**
   * @remarks
   * The number of processes.
   * 
   * @example
   * 1
   */
  processCount?: number;
  /**
   * @remarks
   * The number of recent deviation behaviors.
   * 
   * @example
   * 0
   */
  recentDeviationBehaviorCount?: number;
  /**
   * @remarks
   * The machine running status. Valid values:
   * 
   * - **monitoring**: warning in progress
   * - **blocking**: under control
   * - **studying**: learning in progress
   * 
   * @example
   * studying
   */
  status?: string;
  /**
   * @remarks
   * The whitelist mode. Valid values:
   * 
   * - **hash**: process hash
   * - **path**: process path
   * 
   * @example
   * hash
   */
  studyMode?: string;
  /**
   * @remarks
   * The number of remaining learning days.
   * 
   * @example
   * 0
   */
  studyRemainDays?: number;
  /**
   * @remarks
   * The timestamp when learning started.
   * 
   * @example
   * 1766988192
   */
  studyStartTime?: number;
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
      effectDays: 'EffectDays',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      maliciousProcessCount: 'MaliciousProcessCount',
      normalEventCount: 'NormalEventCount',
      pluginStatus: 'PluginStatus',
      processCount: 'ProcessCount',
      recentDeviationBehaviorCount: 'RecentDeviationBehaviorCount',
      status: 'Status',
      studyMode: 'StudyMode',
      studyRemainDays: 'StudyRemainDays',
      studyStartTime: 'StudyStartTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectDays: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      maliciousProcessCount: 'number',
      normalEventCount: 'number',
      pluginStatus: 'string',
      processCount: 'number',
      recentDeviationBehaviorCount: 'number',
      status: 'string',
      studyMode: 'string',
      studyRemainDays: 'number',
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
   * @remarks
   * The number of entries displayed on the current page in a paged query.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to display per page in a paged query.
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

export class ListUnknownThreatDetectMachineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListUnknownThreatDetectMachineResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
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

