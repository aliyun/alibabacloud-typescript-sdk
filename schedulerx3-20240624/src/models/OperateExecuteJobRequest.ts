// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateExecuteJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * name=zhangsan
   */
  instanceParameters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * gray
   */
  label?: string;
  /**
   * @example
   * http://192.168.1.5:9999/
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

