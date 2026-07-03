// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisposeStrategyResponseBodyDataPageInfo extends $dara.Model {
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
   * Number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of entries.
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

export class ListDisposeStrategyResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * Alert UUID.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * SIEM root account ID associated with the strategy.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * Strategy status. Valid values:
   * 
   * - 0: disabled
   * 
   * - 1: enabled
   * 
   * @example
   * 0
   */
  effectiveStatus?: number;
  /**
   * @remarks
   * Entity details in JSON array format.
   * 
   * @example
   * [{"ip":"1.1.1.1"}]
   */
  entity?: any[];
  /**
   * @remarks
   * Entity ID.
   * 
   * @example
   * 123456789
   */
  entityId?: number;
  /**
   * @remarks
   * Entity type. Valid values:
   * 
   * - ip
   * 
   * - process
   * 
   * - file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * Summary of task failure.
   * 
   * @example
   * DisposalEntity failed which description is Aegis Quarantine File , return_info failed which description is Check Aegis Process Result , [ERROR DETAIL] *******.php:file not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * Task completion time.
   * 
   * @example
   * 2021-08-10 21:34:07
   */
  finishTime?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Last modified time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * Strategy ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentName?: string;
  /**
   * @remarks
   * Global unique UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Unique name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  playbookName?: string;
  /**
   * @remarks
   * Playbook type. Valid values:
   * 
   * - system: manual disposal
   * 
   * - custom: event-triggered playbook
   * 
   * - custom_alert: alert-triggered playbook
   * 
   * - soar-manual: manually run playbook
   * 
   * - soar-mdr: MDR-run playbook
   * 
   * @example
   * system
   */
  playbookType?: string;
  /**
   * @remarks
   * UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * Disposal scope.
   * 
   * @example
   * [{ aliUid: 1766185894104675 }]
   */
  scope?: any[];
  /**
   * @remarks
   * ID of the security orchestration and automated response disposal strategy.
   * 
   * @example
   * 577bbf90-a770-44a7-8154-586aa2d3****
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * Playbook invocation status. Valid values:
   * 
   * - 200: succeeded
   * 
   * - 10: deleted
   * 
   * - 5: failed
   * 
   * - 0: initial state
   * 
   * @example
   * 10
   */
  status?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID associated with the configuration policy.
   * 
   * @example
   * 176555323***
   */
  subAliuid?: number;
  /**
   * @remarks
   * Parameters used to trigger the playbook, in JSON format.
   * 
   * @example
   * {
   *       "file": {
   *             "op_code": "2",
   *             "file_path": "/root/alert0913/a886.jsp",
   *             "entity_type": "file",
   *             "entity_name": "a886.jsp",
   *             "file_name": "a886.jsp",
   *             "file_owner": "USER:,GROUP:",
   *             "hash_value": "5def10c9a4287d0920d86b42420b20b0",
   *             "op_level": "2",
   *             "entity_id": "/root/alert0913/a886.jsp",
   *             "host_uuid": {
   *                   "entity_type": "host",
   *                   "entity_name": "N/A",
   *                   "is_comprised": "1",
   *                   "os_type": "linux",
   *                   "entity_id": "5f58ef67-8803-4314-8d67-c87dc92b****",
   *                   "host_uuid": "5f58ef67-8803-4314-8d67-c87dc92b****",
   *                   "host_name": "N/A"
   *             },
   *             "malware_type": "${aliyun.siem.sas.alert_tag.webshell}"
   *       },
   *       "_sys_siem": {
   *             "cloudCode": "aliyun",
   *             "alertId": "89416745494****"
   *       },
   *       "scope": [
   *             {
   *                   "aliUid": 1766185894104****
   *             }
   *       ]
   * }
   */
  taskParam?: string;
  /**
   * @remarks
   * Playbook URL.
   * 
   * @example
   * {"playbookUuid":"system_aliyun_aegis_stop_container_book","requestUuid":"e8924356-448b-4301-aee9-*******"}
   */
  taskUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      aliuid: 'Aliuid',
      effectiveStatus: 'EffectiveStatus',
      entity: 'Entity',
      entityId: 'EntityId',
      entityType: 'EntityType',
      errorMessage: 'ErrorMessage',
      finishTime: 'FinishTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentName: 'IncidentName',
      incidentUuid: 'IncidentUuid',
      playbookName: 'PlaybookName',
      playbookType: 'PlaybookType',
      playbookUuid: 'PlaybookUuid',
      scope: 'Scope',
      sophonTaskId: 'SophonTaskId',
      status: 'Status',
      subAliuid: 'SubAliuid',
      taskParam: 'TaskParam',
      taskUrl: 'TaskUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertUuid: 'string',
      aliuid: 'number',
      effectiveStatus: 'number',
      entity: { 'type': 'array', 'itemType': 'any' },
      entityId: 'number',
      entityType: 'string',
      errorMessage: 'string',
      finishTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentName: 'string',
      incidentUuid: 'string',
      playbookName: 'string',
      playbookType: 'string',
      playbookUuid: 'string',
      scope: { 'type': 'array', 'itemType': 'any' },
      sophonTaskId: 'string',
      status: 'number',
      subAliuid: 'number',
      taskParam: 'string',
      taskUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entity)) {
      $dara.Model.validateArray(this.entity);
    }
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisposeStrategyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Paging information.
   */
  pageInfo?: ListDisposeStrategyResponseBodyDataPageInfo;
  /**
   * @remarks
   * Detailed data.
   */
  responseData?: ListDisposeStrategyResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListDisposeStrategyResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListDisposeStrategyResponseBodyDataResponseData },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.responseData)) {
      $dara.Model.validateArray(this.responseData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisposeStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response data.
   * 
   * @example
   * 123456
   */
  data?: ListDisposeStrategyResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListDisposeStrategyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

