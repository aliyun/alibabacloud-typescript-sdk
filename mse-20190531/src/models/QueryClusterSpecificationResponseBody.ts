// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterSpecificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The engine specifications that can be used.
   * 
   * @example
   * MSE_SC_1_2_200_c
   */
  clusterSpecificationName?: string;
  /**
   * @remarks
   * The number of vCPUs in the specifications.
   * 
   * @example
   * 1
   */
  cpuCapacity?: string;
  /**
   * @remarks
   * The memory size in the specifications. Unit: GB.
   * 
   * @example
   * 2
   */
  memoryCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      clusterSpecificationName: 'ClusterSpecificationName',
      cpuCapacity: 'CpuCapacity',
      memoryCapacity: 'MemoryCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSpecificationName: 'string',
      cpuCapacity: 'string',
      memoryCapacity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterSpecificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the data.
   */
  data?: QueryClusterSpecificationResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE5C32A1-BC0E-4B79-817C-103E4EDF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryClusterSpecificationResponseBodyData },
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

