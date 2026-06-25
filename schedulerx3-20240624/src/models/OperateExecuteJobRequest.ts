// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateExecuteJobRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The custom parameters for the job instance.
   * 
   * @example
   * name=zhangsan
   */
  instanceParameters?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The label used to select a specific worker.
   * 
   * @example
   * gray
   */
  label?: string;
  /**
   * @remarks
   * The address (`workerAddr`) of a specific worker.
   * 
   * @example
   * http://192.168.***.5:9999/
   */
  worker?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      instanceParameters: 'InstanceParameters',
      jobId: 'JobId',
      label: 'Label',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      instanceParameters: 'string',
      jobId: 'number',
      label: 'string',
      worker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

