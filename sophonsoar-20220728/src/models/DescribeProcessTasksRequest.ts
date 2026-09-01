// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessTasksRequest extends $dara.Model {
  alertId?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * - **desc**: Descending (default).
   * - **asc**: Ascending.
   * 
   * @example
   * desc
   */
  direction?: string;
  /**
   * @remarks
   * The name of the entity to be disposed.
   * 
   * @example
   * 127.0.0.1
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the entity to be disposed. Valid values:
   * 
   * - **ip**: IP address entity.
   * - **file**: File entity.
   * - **process**: Process entity.
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The UUID of the entity.
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
  executeUuid?: string;
  /**
   * @remarks
   * The field used to sort the results.
   * 
   * > You can obtain the sort field from the response of this operation.
   * 
   * @example
   * gmtCreate
   */
  orderField?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page for paging queries. Default value: 20. If the PageSize parameter is left empty, 10 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The fuzzy match content. This parameter queries the entity, disposal scene, and disposal parameter fields.
   * 
   * @example
   * 12.x.x.x
   */
  paramContent?: string;
  /**
   * @remarks
   * The end time of the query range for the disposal time. Format: 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processActionEnd?: number;
  /**
   * @remarks
   * The start time of the query range for the disposal time. Format: 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processActionStart?: number;
  /**
   * @remarks
   * The end time of the query range for the unblocking time. Format: 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processRemoveEnd?: number;
  /**
   * @remarks
   * The start time of the query range for the unblocking time. Format: 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processRemoveStart?: number;
  /**
   * @remarks
   * The UUID of the disposal strategy.
   * >You can call the [ListDisposeStrategy](https://help.aliyun.com/document_detail/2584440.html) operation to obtain this parameter.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536_****
   */
  processStrategyUuid?: string;
  /**
   * @remarks
   * The trigger ID of the playbook.
   * 
   * @example
   * b73d0b08-f1bd-4e8f-967a-8e2982c9****
   */
  reqUuid?: string;
  responseRuleId?: string;
  /**
   * @remarks
   * The scene code of the disposal task.
   * >You can call the [DescribeEnumItems](~~DescribeEnumItems~~) operation to obtain this parameter.
   * 
   * @example
   * event_xxx_whole_process
   */
  sceneCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID for the disposal.
   * 
   * @example
   * 125xxxxx9870
   */
  scope?: string;
  /**
   * @remarks
   * The trigger source of the disposal task, in array string format. Valid values:
   * 
   * - **system**: Triggered by manual event disposal.
   * - **custom**: Triggered by an automatic response rule based on an event.
   * - **custom_alert**: Triggered by an automatic response rule based on an alert.
   * - **soar-manual**: Triggered by manually invoking a SOAR playbook.
   * - **soar-mdr**: Triggered by the Managed Security Service.
   * 
   * @example
   * ["system"]
   */
  source?: string;
  /**
   * @remarks
   * The unique identifier of the disposal task.
   * 
   * > This parameter is used to query a specific task. You can obtain the value from the response of this operation.
   * 
   * @example
   * 150xxxxxxxxx95066
   */
  taskId?: string;
  /**
   * @remarks
   * The status list of the disposal task, in data string format. Valid values:
   * 
   * - **11**: Disposing.
   * - **21**: Blocking.
   * - **22**: Isolating.
   * - **23**: Ended.
   * - **24**: Whitelisted.
   * - **20**: Succeeded.
   * - **90**: Failed.
   * - **91**: Unblocking failed.
   * - **92**: Unisolation failed.
   * 
   * @example
   * ["11","21"]
   */
  taskStatus?: string;
  /**
   * @remarks
   * The trigger source of the disposal task. Valid values:
   * 
   * - **system**: Triggered by manual event disposal.
   * - **custom**: Triggered by an automatic response rule based on an event.
   * - **custom_alert**: Triggered by an automatic response rule based on an alert.
   * - **soar-manual**: Triggered by manually invoking a SOAR playbook.
   * - **soar-mdr**: Triggered by the Managed Security Service.
   * 
   * @example
   * system
   */
  triggerSource?: string;
  /**
   * @remarks
   * The cloud product associated with the disposal task, in data string format. Valid values:
   * 
   * - **WAF**: Web Application Firewall.
   * - **CFW**: Cloud Firewall.
   * - **Aegis**: Security Center.
   * 
   * @example
   * ["WAF"]
   */
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      direction: 'Direction',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      eventUuid: 'EventUuid',
      executeUuid: 'ExecuteUuid',
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
      responseRuleId: 'ResponseRuleId',
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
      alertId: 'string',
      direction: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      eventUuid: 'string',
      executeUuid: 'string',
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
      responseRuleId: 'string',
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

