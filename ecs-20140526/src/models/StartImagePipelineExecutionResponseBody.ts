// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartImagePipelineExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image creation task.
   * 
   * @example
   * exec-5fb8facb8ed7427c****
   */
  executionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

