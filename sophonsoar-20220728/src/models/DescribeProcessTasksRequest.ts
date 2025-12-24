// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   **desc** (default).
   * *   **asc**.
   * 
   * @example
   * desc
   */
  direction?: string;
  /**
   * @remarks
   * The name of the handling entity.
   * 
   * @example
   * 127.0.0.1
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the handling entity. Valid values:
   * 
   * *   **ip**.
   * *   **file**.
   * *   **process**.
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The UUID of the handling entity.
   * 
   * @example
   * 69d189e2-ec17-4676-a2fe-02969234****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * c1020ce1-d6a5-11e8-8298-00163e10****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The field that you use to sort the result.
   * 
   * >  You can obtain the field from the response result.
   * 
   * @example
   * gmtCreate
   */
  orderField?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you do not specify the PageSize parameter, 10 entries are returned by default.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The handling entity, handling scenario, or handling parameter that is used for fuzzy match.
   * 
   * @example
   * 12.x.x.x
   */
  paramContent?: string;
  /**
   * @remarks
   * The end of the time range for a handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processActionEnd?: number;
  /**
   * @remarks
   * The beginning of the time range for a handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processActionStart?: number;
  /**
   * @remarks
   * The end of the time range for an unblocking task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processRemoveEnd?: number;
  /**
   * @remarks
   * The beginning of the time range for an unblocking task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processRemoveStart?: number;
  /**
   * @remarks
   * The UUID of the handling policy.
   * 
   * >  You can call the [ListDisposeStrategy](https://help.aliyun.com/document_detail/2584440.html) operation to query the UUID of the handling policy.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536_xxxx
   */
  processStrategyUuid?: string;
  reqUuid?: string;
  /**
   * @remarks
   * The scenario code of the handling task.
   * 
   * >  You can call the [DescribeEnumItems](~~DescribeEnumItems~~) operation to query the scenario code of the handling task. This parameter is available when you set **EnumType** to **process**.
   * 
   * @example
   * event_xxx_whole_process
   */
  sceneCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is specified in the handling task.
   * 
   * @example
   * 125xxxxx9870
   */
  scope?: string;
  /**
   * @remarks
   * The triggering source of the handling task. The value is a string array. Valid values:
   * 
   * *   **system**: triggered when you manually handle an event.
   * *   **custom**: triggered by an event based on an automatic response rule.
   * *   **custom_alert**: triggered by an alert based on an automatic response rule.
   * *   **soar-manual**: triggered when you use SOAR to manually run a playbook.
   * *   **soar-mdr**: triggered by Managed Security Service.
   * 
   * @example
   * ["system"]
   */
  source?: string;
  /**
   * @remarks
   * The unique identifier of the handling task.
   * 
   * >  This parameter is used to query a specific task. You can obtain the value from the response result.
   * 
   * @example
   * 150xxxxxxxxx95066
   */
  taskId?: string;
  /**
   * @remarks
   * The status of the handling task. The value is a string. Valid values:
   * 
   * *   **11**: being handled.
   * *   **21**: being blocked.
   * *   **22**: being quarantined.
   * *   **23**: completed.
   * *   **24**: added to the whitelist.
   * *   **20**: successful.
   * *   **90**: failed.
   * *   **91**: unblocking failed.
   * *   **92**: restoring quarantined files failed
   * 
   * @example
   * ["11","21"]
   */
  taskStatus?: string;
  /**
   * @remarks
   * The triggering source of the handling task. Valid values:
   * 
   * *   **system**: triggered when you manually handle an event.
   * *   **custom**: triggered by an event based on an automatic response rule.
   * *   **custom_alert**: triggered by an alert based on an automatic response rule.
   * *   **soar-manual**: triggered when you use SOAR to manually run a playbook.
   * *   **soar-mdr**: triggered by Managed Security Service.
   * 
   * @example
   * system
   */
  triggerSource?: string;
  /**
   * @remarks
   * The cloud service that is associated with the handling task. The value is a string. Valid values:
   * 
   * *   **WAF**: Web Application Firewall (WAF).
   * *   **CFW**: Cloud Firewall.
   * *   **Aegis**: Security Center.
   * 
   * @example
   * ["WAF"]
   */
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      eventUuid: 'EventUuid',
      orderField: 'OrderField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paramContent: 'ParamContent',
      processActionEnd: 'ProcessActionEnd',
      processActionStart: 'ProcessActionStart',
      processRemoveEnd: 'ProcessRemoveEnd',
      processRemoveStart: 'ProcessRemoveStart',
      processStrategyUuid: 'ProcessStrategyUuid',
      reqUuid: 'ReqUuid',
      sceneCode: 'SceneCode',
      scope: 'Scope',
      source: 'Source',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      triggerSource: 'TriggerSource',
      yunCode: 'YunCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      eventUuid: 'string',
      orderField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paramContent: 'string',
      processActionEnd: 'number',
      processActionStart: 'number',
      processRemoveEnd: 'number',
      processRemoveStart: 'number',
      processStrategyUuid: 'string',
      reqUuid: 'string',
      sceneCode: 'string',
      scope: 'string',
      source: 'string',
      taskId: 'string',
      taskStatus: 'string',
      triggerSource: 'string',
      yunCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

