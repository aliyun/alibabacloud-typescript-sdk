// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ComponentInstanceSelector } from "./ComponentInstanceSelector";


export class RunApplicationActionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the action. Valid values:
   * 
   * *   start
   * *   stop
   * *   config
   * *   restart
   * *   refresh_queues
   * *   refresh_labels
   * 
   * This parameter is required.
   * 
   * @example
   * start
   */
  actionName?: string;
  /**
   * @remarks
   * The number of applications in each batch.
   * 
   * @example
   * 1
   */
  batchSize?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * C-C95F0A39D8FF****
   */
  clusterId?: string;
  /**
   * @remarks
   * The operation object.
   * 
   * This parameter is required.
   */
  componentInstanceSelector?: ComponentInstanceSelector;
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * 运行描述
   */
  description?: string;
  /**
   * @remarks
   * The execution policy. Valid values:
   * 
   * *   FAILED_BLOCK: The system stops the execution if the execution fails.
   * *   FAILED_CONTINUE: The system continues the execution if the execution fails.
   * 
   * @example
   * FAILED_CONTINUE
   */
  executeStrategy?: string;
  /**
   * @remarks
   * The interval for rolling execution. Unit: seconds.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable rolling execution.
   * 
   * @example
   * true
   */
  rollingExecute?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      batchSize: 'BatchSize',
      clusterId: 'ClusterId',
      componentInstanceSelector: 'ComponentInstanceSelector',
      description: 'Description',
      executeStrategy: 'ExecuteStrategy',
      interval: 'Interval',
      regionId: 'RegionId',
      rollingExecute: 'RollingExecute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      batchSize: 'number',
      clusterId: 'string',
      componentInstanceSelector: ComponentInstanceSelector,
      description: 'string',
      executeStrategy: 'string',
      interval: 'number',
      regionId: 'string',
      rollingExecute: 'boolean',
    };
  }

  validate() {
    if(this.componentInstanceSelector && typeof (this.componentInstanceSelector as any).validate === 'function') {
      (this.componentInstanceSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

