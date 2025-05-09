// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestTasksTaskSpecResource } from "./CreateJobRequestTasksTaskSpecResource";
import { CreateJobRequestTasksTaskSpecTaskExecutor } from "./CreateJobRequestTasksTaskSpecTaskExecutor";
import { CreateJobRequestTasksTaskSpecVolumeMount } from "./CreateJobRequestTasksTaskSpecVolumeMount";


export class CreateJobRequestTasksTaskSpec extends $dara.Model {
  resource?: CreateJobRequestTasksTaskSpecResource;
  /**
   * @remarks
   * This parameter is required.
   */
  taskExecutor?: CreateJobRequestTasksTaskSpecTaskExecutor[];
  volumeMount?: CreateJobRequestTasksTaskSpecVolumeMount[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      taskExecutor: 'TaskExecutor',
      volumeMount: 'VolumeMount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: CreateJobRequestTasksTaskSpecResource,
      taskExecutor: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecTaskExecutor },
      volumeMount: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecVolumeMount },
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.taskExecutor)) {
      $dara.Model.validateArray(this.taskExecutor);
    }
    if(Array.isArray(this.volumeMount)) {
      $dara.Model.validateArray(this.volumeMount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

