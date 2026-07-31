// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRecordsResponseBodyResultResultShowContentActionSuggest extends $dara.Model {
  /**
   * @remarks
   * The suggested action.
   */
  suggestActions?: string[];
  /**
   * @remarks
   * The text of the suggested action.
   * 
   * @example
   * “”
   */
  suggestText?: string;
  /**
   * @remarks
   * The type of the suggested action.
   * 
   * @example
   * promptText
   */
  suggestType?: string;
  static names(): { [key: string]: string } {
    return {
      suggestActions: 'suggestActions',
      suggestText: 'suggestText',
      suggestType: 'suggestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestActions: { 'type': 'array', 'itemType': 'string' },
      suggestText: 'string',
      suggestType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.suggestActions)) {
      $dara.Model.validateArray(this.suggestActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventRecordsResponseBodyResultResultShowContent extends $dara.Model {
  /**
   * @remarks
   * The suggested action.
   */
  actionSuggest?: ListEventRecordsResponseBodyResultResultShowContentActionSuggest;
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * Instance.SpecModify
   */
  desc?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * Executed
   */
  eventStatus?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2025-05-08 18:31:01
   */
  eventTime?: string;
  /**
   * @remarks
   * The end time of the O&M execution for the event.
   * 
   * @example
   * 2025-05-08 18:41:01
   */
  executeFinishTime?: string;
  /**
   * @remarks
   * The start time of the O&M execution for the event.
   * 
   * @example
   * 2025-05-08 18:31:00
   */
  executeStartTime?: string;
  /**
   * @remarks
   * The instance ID of the instance on which the event occurred.
   * 
   * @example
   * es-cn-a5cb2dece****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution ID of the cluster change.
   * 
   * @example
   * f183728022a1c769e97b4*****
   */
  opsChangeId?: string;
  static names(): { [key: string]: string } {
    return {
      actionSuggest: 'actionSuggest',
      desc: 'desc',
      eventStatus: 'eventStatus',
      eventTime: 'eventTime',
      executeFinishTime: 'executeFinishTime',
      executeStartTime: 'executeStartTime',
      instanceId: 'instanceId',
      opsChangeId: 'opsChangeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionSuggest: ListEventRecordsResponseBodyResultResultShowContentActionSuggest,
      desc: 'string',
      eventStatus: 'string',
      eventTime: 'string',
      executeFinishTime: 'string',
      executeStartTime: 'string',
      instanceId: 'string',
      opsChangeId: 'string',
    };
  }

  validate() {
    if(this.actionSuggest && typeof (this.actionSuggest as any).validate === 'function') {
      (this.actionSuggest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventRecordsResponseBodyResultResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic alerting is enabled.
   * 
   * @example
   * false
   */
  autoAlarm?: boolean;
  /**
   * @remarks
   * The display name of the event.
   * 
   * @example
   * Instance.SpecModify
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether this is a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The event level.
   * 
   * @example
   * Info
   */
  level?: string;
  /**
   * @remarks
   * Indicates whether O&M processing is required.
   * 
   * @example
   * false
   */
  mustOps?: boolean;
  /**
   * @remarks
   * The product type of the event.
   * 
   * @example
   * elasticsearch
   */
  product?: string;
  /**
   * @remarks
   * The scheduled execution time.
   * 
   * @example
   * 2025-05-08 18:41:01
   */
  scheduleExecuteTime?: string;
  /**
   * @remarks
   * The scheduled end time.
   * 
   * @example
   * 2025-05-08 18:41:01
   */
  scheduleFinishTime?: string;
  /**
   * @remarks
   * The event content.
   */
  showContent?: ListEventRecordsResponseBodyResultResultShowContent;
  /**
   * @remarks
   * The source of the event.
   * 
   * @example
   * webConsole
   */
  source?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * Executed
   */
  status?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * UserOperator
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoAlarm: 'autoAlarm',
      displayName: 'displayName',
      dryRun: 'dryRun',
      level: 'level',
      mustOps: 'mustOps',
      product: 'product',
      scheduleExecuteTime: 'scheduleExecuteTime',
      scheduleFinishTime: 'scheduleFinishTime',
      showContent: 'showContent',
      source: 'source',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAlarm: 'boolean',
      displayName: 'string',
      dryRun: 'boolean',
      level: 'string',
      mustOps: 'boolean',
      product: 'string',
      scheduleExecuteTime: 'string',
      scheduleFinishTime: 'string',
      showContent: ListEventRecordsResponseBodyResultResultShowContent,
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.showContent && typeof (this.showContent as any).validate === 'function') {
      (this.showContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventRecordsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The returned content.
   */
  result?: ListEventRecordsResponseBodyResultResult[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 4
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListEventRecordsResponseBodyResultResult },
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListEventRecordsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListEventRecordsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

