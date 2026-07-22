// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateExecuteJobRequest extends $dara.Model {
  appGroupId?: number;
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
   * The instance parameters.
   * 
   * @example
   * name=zhangsan
   */
  instanceParameters?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The label of the specified machine.
   * 
   * @example
   * gray
   */
  label?: string;
  /**
   * @remarks
   * The workerAddr of the specified machine.
   * 
   * @example
   * http://192.168.***.5:9999/
   */
  worker?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
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
      appGroupId: 'number',
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

