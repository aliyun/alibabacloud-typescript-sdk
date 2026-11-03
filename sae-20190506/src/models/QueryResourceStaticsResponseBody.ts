// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceStaticsResponseBodyDataRealTimeRes extends $dara.Model {
  /**
   * @remarks
   * The CPU usage. Unit: Core*min.
   * 
   * @example
   * 13
   */
  cpu?: number;
  /**
   * @remarks
   * The ephemeral storage usage. Unit: GiB·min.
   * 
   * @example
   * 0
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The memory usage. Unit: GiB*min.
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
   * The active vCPU usage. Unit: Core·min.
   * 
   * @example
   * 10
   */
  activeCpu?: number;
  /**
   * @remarks
   * The CPU usage. Unit: Core*min.
   * 
   * @example
   * 3354
   */
  cpu?: number;
  /**
   * @remarks
   * The amount of used compute units (CUs).
   * 
   * @example
   * 2312145
   */
  cu?: number;
  /**
   * @remarks
   * The ephemeral storage usage. Unit: GiB·min.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * GpuA10
   * 
   * @example
   * 0
   */
  gpuA10?: number;
  /**
   * @remarks
   * GpuPpu810e
   * 
   * @example
   * 0
   */
  gpuPpu810e?: number;
  /**
   * @remarks
   * The idle vCPU usage. Unit: Core·min.
   * 
   * @example
   * 10
   */
  idleCpu?: number;
  /**
   * @remarks
   * The memory usage. Unit: GiB*min.
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
   * The resource usage information for the current month.
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
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
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
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidServerlessRegion.Unsupported
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - If the request is successful, **success** is returned.
   * - If an exception occurs, a specific error code is returned.
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
   * Indicates whether the application resource usage was retrieved successfully. Valid values:
   * 
   * - **true**: The retrieval was successful.
   * - **false**: The retrieval failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query invocation details.
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

