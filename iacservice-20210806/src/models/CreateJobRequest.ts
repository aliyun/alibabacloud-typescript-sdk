// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. We recommend that you use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2daf4227f747cbf11a5501f18cc5e004
   */
  clientToken?: string;
  /**
   * @remarks
   * The job description. Length: 1 to 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The operation command. Valid values:
   * 
   * - plan: performs a preview. This is the default value.
   * - refresh: refreshes the resource status.
   * - destroy: destroys resources.
   * 
   * @example
   * refresh
   */
  subCommand?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - Task: regular task. This is the default value.
   * - SceneTestingTask: scenario-based testing task.
   * 
   * @example
   * Task
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      subCommand: 'subCommand',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      subCommand: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

