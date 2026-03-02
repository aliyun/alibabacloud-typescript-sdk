// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploymentTriggerCmd extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @example
   * DAPR
   */
  applicationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @example
   * 员工管理
   */
  description?: string;
  /**
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  instanceCount?: number;
  isMonitorEnable?: number;
  isServiceGroupEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  memory?: number;
  preStop?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @example
   * 123
   */
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  times?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AUTO
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      applicationType: 'applicationType',
      cpu: 'cpu',
      description: 'description',
      imageTag: 'imageTag',
      instanceCount: 'instanceCount',
      isMonitorEnable: 'isMonitorEnable',
      isServiceGroupEnable: 'isServiceGroupEnable',
      memory: 'memory',
      preStop: 'preStop',
      serviceGroupId: 'serviceGroupId',
      timeout: 'timeout',
      times: 'times',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      applicationType: 'string',
      cpu: 'number',
      description: 'string',
      imageTag: 'string',
      instanceCount: 'number',
      isMonitorEnable: 'number',
      isServiceGroupEnable: 'number',
      memory: 'number',
      preStop: 'string',
      serviceGroupId: 'number',
      timeout: 'number',
      times: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

