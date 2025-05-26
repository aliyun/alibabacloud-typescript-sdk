// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoLabelClassificationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The task ID, which is obtained from response parameters of [CreateVideoLabelClassificationTask](https://help.aliyun.com/document_detail/478223.html).
   * 
   * This parameter is required.
   * 
   * @example
   * VideoLabelClassification-2f157087-91df-4fda-8c3e-232407ec****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * VideoLabelClassification
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      taskId: 'string',
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

