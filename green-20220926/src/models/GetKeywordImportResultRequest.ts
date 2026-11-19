// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeywordImportResultRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The task ID. Although this parameter is marked as required:false in the specification, it is actually required. If you do not provide this parameter, the service returns a 400 error. You can obtain the task ID from the TaskId field in the response of the AddKeywordsToLib operation when you import keywords in batches from a file.
   * 
   * @example
   * xxx-xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

