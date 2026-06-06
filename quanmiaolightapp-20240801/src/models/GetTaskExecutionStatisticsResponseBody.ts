// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskExecutionStatisticsResponseBodyDataTpmPerMinute extends $dara.Model {
  /**
   * @example
   * 3
   */
  count?: number;
  /**
   * @example
   * 2024-08-01 10:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class GetTaskExecutionStatisticsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  completedCount?: number;
  /**
   * @example
   * 5
   */
  runningCount?: number;
  tpmPerMinute?: GetTaskExecutionStatisticsResponseBodyDataTpmPerMinute[];
  /**
   * @example
   * 10
   */
  waitingCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'completedCount',
      runningCount: 'runningCount',
      tpmPerMinute: 'tpmPerMinute',
      waitingCount: 'waitingCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      runningCount: 'number',
      tpmPerMinute: { 'type': 'array', 'itemType': GetTaskExecutionStatisticsResponseBodyDataTpmPerMinute },
      waitingCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tpmPerMinute)) {
      $dara.Model.validateArray(this.tpmPerMinute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskExecutionStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetTaskExecutionStatisticsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A1B2C3D4-E5F6-7890-GHIJ-KLMNOPQRST
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTaskExecutionStatisticsResponseBodyData,
      httpStatusCode: 'number',
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

