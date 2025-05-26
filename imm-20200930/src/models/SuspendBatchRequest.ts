// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the batch processing task. You can obtain the ID of the batch processing task from the response of the [CreateBatch](https://help.aliyun.com/document_detail/606694.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * batch-4eb9223f-3e88-42d3-a578-3f2852******
   */
  id?: string;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

