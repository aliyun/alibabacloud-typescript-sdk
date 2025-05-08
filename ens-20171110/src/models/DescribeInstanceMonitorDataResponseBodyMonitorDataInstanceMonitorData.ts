// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData extends $dara.Model {
  /**
   * @remarks
   * The vCPU usage of the instance, which is raw data. For example, a value of 0.02 indicates that the usage is 2%.
   * 
   * @example
   * 0.02
   */
  CPU?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * yourInstance ID
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is not yet supported.
   * 
   * @example
   * Not currently supported
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      instanceId: 'InstanceId',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      instanceId: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

