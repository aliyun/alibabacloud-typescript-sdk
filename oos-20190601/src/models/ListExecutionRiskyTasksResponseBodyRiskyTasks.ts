// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionRiskyTasksResponseBodyRiskyTasks extends $dara.Model {
  /**
   * @remarks
   * The name of the operation that the high-risk task calls.
   * 
   * @example
   * DeleteInstance
   */
  API?: string;
  /**
   * @remarks
   * The cloud service in which the high-risk task runs.
   * 
   * @example
   * ECS
   */
  service?: string;
  /**
   * @remarks
   * The details of the high-risk task.
   */
  task?: string[];
  /**
   * @remarks
   * The details of templates to which the high-risk task belongs.
   */
  template?: string[];
  static names(): { [key: string]: string } {
    return {
      API: 'API',
      service: 'Service',
      task: 'Task',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      API: 'string',
      service: 'string',
      task: { 'type': 'array', 'itemType': 'string' },
      template: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

