// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the trigger. You can obtain the ID from the response of the [CreateTrigger](https://help.aliyun.com/document_detail/479912.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * trigger-9f72636a-0f0c-4baf-ae78-38b27b******
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

