// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPredictiveTaskInfoResponseBodyTaskInfosTaskInfo extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @example
   * 2
   */
  minValue?: number;
  /**
   * @example
   * 2025-12-17T10:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxValue: 'number',
      minValue: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPredictiveTaskInfoResponseBodyTaskInfos extends $dara.Model {
  taskInfo?: QueryPredictiveTaskInfoResponseBodyTaskInfosTaskInfo[];
  static names(): { [key: string]: string } {
    return {
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfo: { 'type': 'array', 'itemType': QueryPredictiveTaskInfoResponseBodyTaskInfosTaskInfo },
    };
  }

  validate() {
    if(Array.isArray(this.taskInfo)) {
      $dara.Model.validateArray(this.taskInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPredictiveTaskInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  taskInfos?: QueryPredictiveTaskInfoResponseBodyTaskInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfos: 'TaskInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfos: QueryPredictiveTaskInfoResponseBodyTaskInfos,
    };
  }

  validate() {
    if(this.taskInfos && typeof (this.taskInfos as any).validate === 'function') {
      (this.taskInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

