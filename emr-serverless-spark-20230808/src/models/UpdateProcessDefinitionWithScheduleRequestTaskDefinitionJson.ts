// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams } from "./UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams";


export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJson extends $dara.Model {
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
   * 23************
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
   * true
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
   * The name of the job.
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
   * true
   */
  startAlertEnable?: boolean;
  /**
   * @remarks
   * The tags of the job.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The job parameters.
   * 
   * This parameter is required.
   */
  taskParams?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams;
  /**
   * @remarks
   * The type of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * EMR-SERVERLESS-SPARK
   */
  taskType?: string;
  /**
   * @remarks
   * The default timeout period of the node.
   * 
   * @example
   * 30
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
      taskParams: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams,
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

