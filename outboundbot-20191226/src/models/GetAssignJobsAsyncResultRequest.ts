// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssignJobsAsyncResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * dc79b0f9-a781-4305-85e2-d5d56679ae69
   */
  asyncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

