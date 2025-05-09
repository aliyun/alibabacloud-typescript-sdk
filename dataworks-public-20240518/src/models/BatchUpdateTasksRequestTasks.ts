// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchUpdateTasksRequestTasksDataSource } from "./BatchUpdateTasksRequestTasksDataSource";
import { BatchUpdateTasksRequestTasksRuntimeResource } from "./BatchUpdateTasksRequestTasksRuntimeResource";
import { BatchUpdateTasksRequestTasksTags } from "./BatchUpdateTasksRequestTasksTags";
import { BatchUpdateTasksRequestTasksTrigger } from "./BatchUpdateTasksRequestTasksTrigger";


export class BatchUpdateTasksRequestTasks extends $dara.Model {
  /**
   * @remarks
   * The information about the associated data source.
   */
  dataSource?: BatchUpdateTasksRequestTasksDataSource;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SQL node
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the task owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The rerun interval. Unit: seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * *   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to run.
   * *   FailureAllowed: The task can be rerun only after it fails to run.
   * *   AllAllowed: The task can be rerun regardless of whether the task is successfully run or fails to run.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of times that the task is rerun. This parameter takes effect only if the RerunMode parameter is set to AllAllowed or FailureAllowed.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The configurations of the runtime environment, such as the resource group information.
   */
  runtimeResource?: BatchUpdateTasksRequestTasksRuntimeResource;
  /**
   * @remarks
   * The tags.
   */
  tags?: BatchUpdateTasksRequestTasksTags[];
  /**
   * @remarks
   * The timeout period of task running. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger method.
   */
  trigger?: BatchUpdateTasksRequestTasksTrigger;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResource: 'RuntimeResource',
      tags: 'Tags',
      timeout: 'Timeout',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: BatchUpdateTasksRequestTasksDataSource,
      description: 'string',
      envType: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: BatchUpdateTasksRequestTasksRuntimeResource,
      tags: { 'type': 'array', 'itemType': BatchUpdateTasksRequestTasksTags },
      timeout: 'number',
      trigger: BatchUpdateTasksRequestTasksTrigger,
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

