// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerListResponseBodyDataWorkerInfos extends $dara.Model {
  /**
   * @remarks
   * The IP address of the worker.
   * 
   * @example
   * 30.225.16.49
   */
  ip?: string;
  /**
   * @remarks
   * The label of the worker.
   * 
   * @example
   * gray
   */
  label?: string;
  /**
   * @remarks
   * The port number of the worker.
   * 
   * @example
   * 60831
   */
  port?: number;
  /**
   * @remarks
   * The startup method of the worker.
   * 
   * @example
   * springboot
   */
  starter?: string;
  /**
   * @remarks
   * The version of the worker.
   * 
   * @example
   * 1.3.4
   */
  version?: string;
  /**
   * @remarks
   * The address of the worker. The address is in the format of ${worker_id}@${worker_ip}:${worker_port}.
   * 
   * @example
   * 030225016049_11734_25917@30.225.16.49:60831
   */
  workerAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      label: 'Label',
      port: 'Port',
      starter: 'Starter',
      version: 'Version',
      workerAddress: 'WorkerAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      label: 'string',
      port: 'number',
      starter: 'string',
      version: 'string',
      workerAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The worker information.
   */
  workerInfos?: GetWorkerListResponseBodyDataWorkerInfos[];
  static names(): { [key: string]: string } {
    return {
      workerInfos: 'WorkerInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workerInfos: { 'type': 'array', 'itemType': GetWorkerListResponseBodyDataWorkerInfos },
    };
  }

  validate() {
    if(Array.isArray(this.workerInfos)) {
      $dara.Model.validateArray(this.workerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The job information.
   */
  data?: GetWorkerListResponseBodyData;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * Cannot find product according to your domain.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**: The call is successful.
   * *   **false**: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetWorkerListResponseBodyData,
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

