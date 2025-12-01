// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulListByIdResponseBodyDataEffectMsgDTOS extends $dara.Model {
  /**
   * @remarks
   * Hit
   * 
   * @example
   * fastjson(jar) extendField.safemode equals false
   */
  matchList?: string;
  /**
   * @remarks
   * Path
   * 
   * @example
   * /uat6/qry/enquiry/policy/yrtPolicyList
   */
  path?: string;
  /**
   * @remarks
   * Software name
   * 
   * @example
   * python-perf 3.10.0
   */
  softName?: string;
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
      path: 'Path',
      softName: 'SoftName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: 'string',
      path: 'string',
      softName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Vulnerability Alias
   * 
   * @example
   * Tomcat websocket 拒绝服务漏洞利用代码披露（CVE-2020-13935）
   */
  aliasName?: string;
  /**
   * @remarks
   * Impact description
   */
  effectMsgDTOS?: GetVulListByIdResponseBodyDataEffectMsgDTOS[];
  /**
   * @remarks
   * Timestamp of the first time the vulnerability was detected
   * 
   * @example
   * 1620404763000
   */
  firstTs?: string;
  /**
   * @remarks
   * Instance name of the asset
   * 
   * @example
   * 凌星-CentOS
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP of the asset
   * 
   * @example
   * 39.101.73.28
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP of the asset
   * 
   * @example
   * 172.22.216.17
   */
  intranetIp?: string;
  /**
   * @remarks
   * Timestamp of the last time the vulnerability was detected
   * 
   * @example
   * 1620404763000
   */
  lastTs?: string;
  /**
   * @remarks
   * Vulnerability name
   * 
   * @example
   * SCA:ACSV-2020-111301
   */
  name?: string;
  /**
   * @remarks
   * Necessity level of vulnerability repair
   * 
   * @example
   * later,asap,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * List of associated CVEs for the vulnerability, separated by commas (,) if there are multiple values.
   * 
   * @example
   * CVE-2020-13935
   */
  related?: string;
  /**
   * @remarks
   * Repair command
   * 
   * @example
   * *** update python-perf
   */
  repairCmd?: string;
  /**
   * @remarks
   * Timestamp of vulnerability repair
   * 
   * @example
   * 1541207563000
   */
  repairTs?: string;
  /**
   * @remarks
   * Vulnerability status:
   * 1: Not fixed
   * 2: Fix failed
   * 3: Rollback failed
   * 4: Fixing
   * 5: Rolling back
   * 6: Verifying
   * 7: Fixed successfully
   * 8: Fixed successfully, pending reboot
   * 9: Rolled back successfully
   * 10: Ignored
   * 11: Rolled back successfully, pending reboot
   * 12: Vulnerability does not exist
   * 20: Expired
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * Vulnerability tag
   * 
   * @example
   * Restart Required
   */
  tag?: string;
  /**
   * @remarks
   * UUID of the asset instance.
   * 
   * @example
   * hdm_5cf2eaf263c021b354877943f181956d
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      effectMsgDTOS: 'EffectMsgDTOS',
      firstTs: 'FirstTs',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTs: 'LastTs',
      name: 'Name',
      necessity: 'Necessity',
      related: 'Related',
      repairCmd: 'RepairCmd',
      repairTs: 'RepairTs',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      effectMsgDTOS: { 'type': 'array', 'itemType': GetVulListByIdResponseBodyDataEffectMsgDTOS },
      firstTs: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTs: 'string',
      name: 'string',
      necessity: 'string',
      related: 'string',
      repairCmd: 'string',
      repairTs: 'string',
      status: 'string',
      tag: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.effectMsgDTOS)) {
      $dara.Model.validateArray(this.effectMsgDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records in the query result.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetVulListByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulListByIdResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetVulListByIdResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * D38B3D2F-67FD-57FF-87D1-C431D2C70F76
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values: - **true**: Yes. - **false**: No.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetVulListByIdResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetVulListByIdResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
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

