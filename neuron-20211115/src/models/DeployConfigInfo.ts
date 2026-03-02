// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployConfigInfo extends $dara.Model {
  /**
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @example
   * 1
   */
  deploymentId?: number;
  /**
   * @example
   * AUTO
   */
  deploymentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * true
   */
  finish?: boolean;
  /**
   * @example
   * 3
   */
  instanceCount?: number;
  isMonitorEnable?: number;
  /**
   * @example
   * 1
   */
  isServiceGroupEnable?: number;
  /**
   * @example
   * 4
   */
  memory?: number;
  /**
   * @example
   * 1234
   */
  pipelineId?: string;
  preStop?: string;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @example
   * 123
   */
  timeout?: number;
  /**
   * @example
   * 1
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      deploymentId: 'deploymentId',
      deploymentType: 'deploymentType',
      env: 'env',
      finish: 'finish',
      instanceCount: 'instanceCount',
      isMonitorEnable: 'isMonitorEnable',
      isServiceGroupEnable: 'isServiceGroupEnable',
      memory: 'memory',
      pipelineId: 'pipelineId',
      preStop: 'preStop',
      serviceGroupId: 'serviceGroupId',
      serviceId: 'serviceId',
      timeout: 'timeout',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      deploymentId: 'number',
      deploymentType: 'string',
      env: 'string',
      finish: 'boolean',
      instanceCount: 'number',
      isMonitorEnable: 'number',
      isServiceGroupEnable: 'number',
      memory: 'number',
      pipelineId: 'string',
      preStop: 'string',
      serviceGroupId: 'number',
      serviceId: 'number',
      timeout: 'number',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

