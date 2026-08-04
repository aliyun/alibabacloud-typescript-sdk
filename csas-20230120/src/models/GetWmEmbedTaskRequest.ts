// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWmEmbedTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID obtained when creating the embedding job. Source of the value:  
   * - [CreateWmEmbedTask](~~CreateWmEmbedTask~~): Create a watermark embedding job.
   * 
   * This parameter is required.
   * 
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjU********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

