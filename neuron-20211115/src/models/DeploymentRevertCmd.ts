// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploymentRevertCmd extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  deploymentId?: number;
  /**
   * @example
   * 员工管理
   */
  description?: string;
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
  /**
   * @example
   * 300
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
      cpu: 'cpu',
      deploymentId: 'deploymentId',
      description: 'description',
      instanceCount: 'instanceCount',
      isMonitorEnable: 'isMonitorEnable',
      isServiceGroupEnable: 'isServiceGroupEnable',
      memory: 'memory',
      timeout: 'timeout',
      times: 'times',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cpu: 'number',
      deploymentId: 'number',
      description: 'string',
      instanceCount: 'number',
      isMonitorEnable: 'number',
      isServiceGroupEnable: 'number',
      memory: 'number',
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

