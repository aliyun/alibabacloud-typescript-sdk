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

