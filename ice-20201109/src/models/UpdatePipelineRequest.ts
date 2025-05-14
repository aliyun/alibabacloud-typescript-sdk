// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the MPS queue.
   * 
   * @example
   * test-pipeline
   */
  name?: string;
  /**
   * @remarks
   * The ID of the MPS queue.
   * 
   * This parameter is required.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the MPS queue. Valid values: 1 to 10.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The state of the MPS queue.
   * 
   * Valid values:
   * 
   * *   Active
   * *   Paused
   * 
   * @example
   * Paused
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pipelineId: 'string',
      priority: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

