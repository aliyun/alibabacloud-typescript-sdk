// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceStaticsResponseBodyDataRealTimeRes extends $dara.Model {
  /**
   * @remarks
   * The CPU usage. Unit: core per minute.
   * 
   * @example
   * 13
   */
  cpu?: number;
  /**
   * @remarks
   * The storage size of the temporary storage space. Unit: GiB.
   * 
   * @example
   * 0
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The memory usage. Unit: GiB per minute.
   * 
   * @example
   * 26
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      ephemeralStorage: 'EphemeralStorage',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      ephemeralStorage: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBodyDataSummary extends $dara.Model {
  /**
   * @remarks
   * The usage of active vCPU. Unit: Core*min.
   * 
   * @example
   * 10
   */
  activeCpu?: number;
  /**
   * @remarks
   * The CPU usage. Unit: core per minute.
   * 
   * @example
   * 3354
   */
  cpu?: number;
  /**
   * @remarks
   * The CU usage.
   * 
   * @example
   * 2312145
   */
  cu?: number;
  /**
   * @remarks
   * The storage size of the temporary storage space. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @example
   * c8g1
   */
  gpuA10?: number;
  gpuPpu810e?: number;
  /**
   * @remarks
   * The usage of idle CPU. Unit: Core*min.
   * 
   * @example
   * 10
   */
  idleCpu?: number;
  /**
   * @remarks
   * The memory usage. Unit: GiB per minute.
   * 
   * @example
   * 6708
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      activeCpu: 'ActiveCpu',
      cpu: 'Cpu',
      cu: 'Cu',
      ephemeralStorage: 'EphemeralStorage',
      gpuA10: 'GpuA10',
      gpuPpu810e: 'GpuPpu810e',
      idleCpu: 'IdleCpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCpu: 'number',
      cpu: 'number',
      cu: 'number',
      ephemeralStorage: 'number',
      gpuA10: 'number',
      gpuPpu810e: 'number',
      idleCpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The real-time resource usage.
   */
  realTimeRes?: QueryResourceStaticsResponseBodyDataRealTimeRes;
  /**
   * @remarks
   * The resource usage of the current month.
   */
  summary?: QueryResourceStaticsResponseBodyDataSummary;
  static names(): { [key: string]: string } {
    return {
      realTimeRes: 'RealTimeRes',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeRes: QueryResourceStaticsResponseBodyDataRealTimeRes,
      summary: QueryResourceStaticsResponseBodyDataSummary,
    };
  }

  validate() {
    if(this.realTimeRes && typeof (this.realTimeRes as any).validate === 'function') {
      (this.realTimeRes as any).validate();
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The resource usage.
   */
  data?: QueryResourceStaticsResponseBodyData;
  /**
   * @remarks
   * The error code. 
   * 
   * - The **ErrorCode** parameter is not returned when the request succeeds.
   * - The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * *   **success** is returned when the request succeeds.
   * *   An error code is returned when the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CCF7092-72CA-4431-90D6-C7D98752****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the resource usage of an application was obtained. Valid values:
   * 
   * *   **true**: indicates that the resource usage was obtained.
   * *   **false**: indicates that the resource usage could not be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. It can be used to query the details of a request.
   * 
   * @example
   * ac1a08a015623098794277264e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryResourceStaticsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

