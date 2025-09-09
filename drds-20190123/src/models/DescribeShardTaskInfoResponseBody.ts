// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeShardTaskInfoResponseBodyDataFull extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks expire.
   * 
   * @example
   * 0
   */
  expired?: number;
  /**
   * @remarks
   * Indicates the progress of the tasks.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * Indicates the start time when the tasks are performed.
   * 
   * @example
   * 2019-09-16 15:11:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of tasks.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 0
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFullCheck extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks expire.
   * 
   * @example
   * 0
   */
  expired?: number;
  /**
   * @remarks
   * Indicates the progress of the tasks.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * Indicates the start time when the tasks are performed.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of tasks.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 0
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFullRevise extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks expire.
   * 
   * @example
   * 0
   */
  expired?: number;
  /**
   * @remarks
   * Indicates the progress of the tasks.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * Indicates the start time when the tasks are performed.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of tasks.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 0
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataIncrement extends $dara.Model {
  /**
   * @remarks
   * Indicates the latency of the incremental data synchronization.
   * 
   * @example
   * 1568617906
   */
  delay?: number;
  /**
   * @remarks
   * Indicates the start time when the incremental data synchronization is performed.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 10
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      startTime: 'StartTime',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      startTime: 'string',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataReview extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks expire.
   * 
   * @example
   * 0
   */
  expired?: number;
  /**
   * @remarks
   * Indicates the progress of the tasks.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * Indicates the start time when the tasks are performed.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of tasks.
   * 
   * @example
   * 5
   */
  total?: number;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 10
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks to shard tables or convert tables expire.
   * 
   * @example
   * 0
   */
  expired?: string;
  /**
   * @remarks
   * Indicates information about full migration tasks.
   */
  full?: DescribeShardTaskInfoResponseBodyDataFull;
  /**
   * @remarks
   * Indicates information about full check tasks.
   */
  fullCheck?: DescribeShardTaskInfoResponseBodyDataFullCheck;
  /**
   * @remarks
   * Indicates information about full correction tasks.
   */
  fullRevise?: DescribeShardTaskInfoResponseBodyDataFullRevise;
  /**
   * @remarks
   * Indicates information about incremental data synchronization.
   */
  increment?: DescribeShardTaskInfoResponseBodyDataIncrement;
  /**
   * @remarks
   * Indicates the incremental data synchronization progress.
   * 
   * @example
   * 70
   */
  progress?: string;
  /**
   * @remarks
   * Indicates check tasks.
   */
  review?: DescribeShardTaskInfoResponseBodyDataReview;
  /**
   * @remarks
   * Indicates the name of the table that you convert or shard.
   * 
   * @example
   * a1
   */
  sourceTableName?: string;
  /**
   * @remarks
   * Indicates the current stage of the task.
   * 
   * @example
   * 2
   */
  stage?: string;
  /**
   * @remarks
   * Indicates the state of the tasks to shard tables or convert tables.
   */
  status?: string;
  /**
   * @remarks
   * Indicates the name of the table after you convert or shard the table.
   * 
   * @example
   * a2
   */
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      full: 'Full',
      fullCheck: 'FullCheck',
      fullRevise: 'FullRevise',
      increment: 'Increment',
      progress: 'Progress',
      review: 'Review',
      sourceTableName: 'SourceTableName',
      stage: 'Stage',
      status: 'Status',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'string',
      full: DescribeShardTaskInfoResponseBodyDataFull,
      fullCheck: DescribeShardTaskInfoResponseBodyDataFullCheck,
      fullRevise: DescribeShardTaskInfoResponseBodyDataFullRevise,
      increment: DescribeShardTaskInfoResponseBodyDataIncrement,
      progress: 'string',
      review: DescribeShardTaskInfoResponseBodyDataReview,
      sourceTableName: 'string',
      stage: 'string',
      status: 'string',
      targetTableName: 'string',
    };
  }

  validate() {
    if(this.full && typeof (this.full as any).validate === 'function') {
      (this.full as any).validate();
    }
    if(this.fullCheck && typeof (this.fullCheck as any).validate === 'function') {
      (this.fullCheck as any).validate();
    }
    if(this.fullRevise && typeof (this.fullRevise as any).validate === 'function') {
      (this.fullRevise as any).validate();
    }
    if(this.increment && typeof (this.increment as any).validate === 'function') {
      (this.increment as any).validate();
    }
    if(this.review && typeof (this.review as any).validate === 'function') {
      (this.review as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the data that is returned.
   */
  data?: DescribeShardTaskInfoResponseBodyData;
  /**
   * @remarks
   * Indicates the unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * 5D64DE5944A1E541E0CB908A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeShardTaskInfoResponseBodyData,
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

