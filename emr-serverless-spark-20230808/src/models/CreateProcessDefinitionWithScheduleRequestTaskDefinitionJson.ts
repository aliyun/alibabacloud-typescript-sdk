// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams } from "./CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams";


export class CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson extends $dara.Model {
  /**
   * @remarks
   * The email address to receive alerts.
   * 
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 36************
   */
  code?: number;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * ods transform task
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to send alerts when the node fails.
   * 
   * @example
   * false
   */
  failAlertEnable?: boolean;
  /**
   * @remarks
   * The number of retries when the node fails.
   * 
   * @example
   * 1
   */
  failRetryTimes?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * ods_transform_task
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to send alerts when the node is started.
   * 
   * @example
   * false
   */
  startAlertEnable?: boolean;
  /**
   * @remarks
   * The tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The job parameters.
   * 
   * This parameter is required.
   */
  taskParams?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams;
  /**
   * @remarks
   * The type of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * MigrateData
   */
  taskType?: string;
  /**
   * @remarks
   * The timeout period of the callback. Unit: seconds.
   * 
   * @example
   * 1200
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      code: 'code',
      description: 'description',
      failAlertEnable: 'failAlertEnable',
      failRetryTimes: 'failRetryTimes',
      name: 'name',
      startAlertEnable: 'startAlertEnable',
      tags: 'tags',
      taskParams: 'taskParams',
      taskType: 'taskType',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      code: 'number',
      description: 'string',
      failAlertEnable: 'boolean',
      failRetryTimes: 'number',
      name: 'string',
      startAlertEnable: 'boolean',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskParams: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams,
      taskType: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(this.taskParams && typeof (this.taskParams as any).validate === 'function') {
      (this.taskParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

