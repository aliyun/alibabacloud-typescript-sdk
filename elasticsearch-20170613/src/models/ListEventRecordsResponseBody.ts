// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRecordsResponseBodyResultResultShowContentActionSuggest extends $dara.Model {
  suggestActions?: string[];
  /**
   * @example
   * “”
   */
  suggestText?: string;
  /**
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
  actionSuggest?: ListEventRecordsResponseBodyResultResultShowContentActionSuggest;
  /**
   * @example
   * Instance.SpecModify
   */
  desc?: string;
  /**
   * @example
   * Executed
   */
  eventStatus?: string;
  /**
   * @example
   * 2025-05-08 18:31:01
   */
  eventTime?: string;
  /**
   * @example
   * 2025-05-08 18:41:01
   */
  executeFinishTime?: string;
  /**
   * @example
   * 2025-05-08 18:31:00
   */
  executeStartTime?: string;
  /**
   * @example
   * es-cn-a5cb2dece****
   */
  instanceId?: string;
  /**
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
   * @example
   * false
   */
  autoAlarm?: boolean;
  /**
   * @example
   * Instance.SpecModify
   */
  displayName?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * Info
   */
  level?: string;
  /**
   * @example
   * false
   */
  mustOps?: boolean;
  /**
   * @example
   * elasticsearch
   */
  product?: string;
  /**
   * @example
   * 2025-05-08 18:41:01
   */
  scheduleExecuteTime?: string;
  /**
   * @example
   * 2025-05-08 18:41:01
   */
  scheduleFinishTime?: string;
  showContent?: ListEventRecordsResponseBodyResultResultShowContent;
  /**
   * @example
   * webConsole
   */
  source?: string;
  /**
   * @example
   * Executed
   */
  status?: string;
  /**
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
  result?: ListEventRecordsResponseBodyResultResult[];
  /**
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
   * @example
   * 7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****
   */
  requestId?: string;
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

