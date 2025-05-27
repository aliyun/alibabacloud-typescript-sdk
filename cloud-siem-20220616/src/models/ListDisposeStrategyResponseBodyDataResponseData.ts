// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisposeStrategyResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the policy in SIEM.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   0: invalid
   * *   1: valid
   * 
   * @example
   * 0
   */
  effectiveStatus?: number;
  /**
   * @remarks
   * The details of the entity. The value is a JSON array.
   * 
   * @example
   * [{"ip":"1.1.1.1"}]
   */
  entity?: any[];
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 123456789
   */
  entityId?: number;
  /**
   * @remarks
   * The type of the entity. Valid values:
   * 
   * *   ip
   * *   process
   * *   file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The summary information about the failed task.
   * 
   * @example
   * DisposalEntity failed which description is Aegis Quarantine File , return_info failed which description is Check Aegis Process Result , [ERROR DETAIL] *******.php:file not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2021-08-10 21:34:07
   */
  finishTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentName?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The name of the playbook, which is the unique identifier of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  playbookName?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   system: user-triggered playbook
   * *   custom: event-triggered playbook
   * *   custom_alert: alert-triggered playbook
   * *   soar-manual: user-run playbook
   * *   soar-mdr: MDR-run playbook
   * 
   * @example
   * system
   */
  playbookType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The scope of the policy.
   * 
   * @example
   * [{ aliUid: 1766185894104675 }]
   */
  scope?: any[];
  /**
   * @remarks
   * The ID of the SOAR handling policy.
   * 
   * @example
   * 577bbf90-a770-44a7-8154-586aa2d318fa
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The running status of the playbook. Valid values:
   * 
   * *   200: successful
   * *   10: deleted
   * *   5: failed
   * *   0: initial
   * 
   * @example
   * 10
   */
  status?: number;
  /**
   * @remarks
   * The ID of the Alibaba account that is used to configure the policy.
   * 
   * @example
   * 176555323***
   */
  subAliuid?: number;
  /**
   * @remarks
   * The parameters that are used to trigger the playbook. The value is in the JSON format.
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

