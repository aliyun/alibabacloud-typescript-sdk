// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceStaticsResponseBodyDataRealTimeRes extends $dara.Model {
  /**
   * @remarks
   * The CPU usage, in Core·min.
   * 
   * @example
   * 13
   */
  cpu?: number;
  /**
   * @remarks
   * The ephemeral storage usage, in GiB·min.
   * 
   * @example
   * 0
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The memory usage, in GiB·min.
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
   * The active vCPU usage, in Core·min.
   * 
   * @example
   * 10
   */
  activeCpu?: number;
  /**
   * @remarks
   * The CPU usage, in Core·min.
   * 
   * @example
   * 3354
   */
  cpu?: number;
  /**
   * @remarks
   * The number of CUs used.
   * 
   * @example
   * 2312145
   */
  cu?: number;
  /**
   * @remarks
   * The ephemeral storage usage, in GiB·min.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The GpuA10 usage.
   */
  gpuA10?: number;
  /**
   * @remarks
   * The GpuPpu810e usage.
   */
  gpuPpu810e?: number;
  /**
   * @remarks
   * The idle vCPU usage, in Core·min.
   * 
   * @example
   * 10
   */
  idleCpu?: number;
  /**
   * @remarks
   * The memory usage, in GiB·min.
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
   * The resource usage in the current month.
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
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The resource usage information.
   */
  data?: QueryResourceStaticsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7CCF7092-72CA-4431-90D6-C7D98752****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query the details of a request.
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

